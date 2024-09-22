<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="headline1 text-danger">Product Management </h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <dateandtime />
      </div>
    </div>
  </div>
  <div>
    <div v-if="loading">
      <skeleton />
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="col-9 col-sm-6 col-md-6 col-lg-3 prod_img" v-for="product in products" :key="product.id">
        <div class="card h-100 border-0 d-flex align-items-center">
          <img :src="product.imageUrl" style="height:240px; width: 200px;" class="img-fluid card-img-top"
            alt="productuct 3">
          <div class="card-body text-center">
            <h5 class="card-title">{{ product.productname }}</h5>
            <span>Available Sizes:</span>
            <p class="card-text">{{ product.price }}</p>
            <p>{{ product.ingredients }}</p>
          </div>
        </div>
        <div class="d-flex justify-content-evenly">
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#added"><i
              class="bi bi-folder-plus"></i></button>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            @click="loadProduct(product)"><i class="bi bi-pencil-square"></i></button>
          <button class="btn btn-danger" @click="deleteProductID(product.id)"><i class="bi bi-trash3"></i></button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Edit Product</h1>
          <button type="button" ref="closeButton" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" v-model="obj.id" placeholder="Product ID"
                readonly>
              <label for="floatingInput">Product Id</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" v-model="obj.productname" placeholder="Product Name" class="form-control"
                id="floatingInput">
              <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" v-model="obj.price" placeholder="Product Price" class="form-control"
                id="floatingInput">
              <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" v-model="obj.ingredients" placeholder="Ingredients" class="form-control"
                id="floatingInput">
              <label for="floatingInput">Product Name</label>
            </div>
            <!-- File Input Field -->
            <input type="file" @change="onFileChange" accept=".png, .jpg, .jpeg" />
            <!-- Display Selected File Name -->
            <p v-if="file">Selected File: {{ file.name }}</p>
            <!-- Display File Preview if Available -->
            <div v-if="obj.imageUrl">
              <img :src="obj.imageUrl" alt="File Preview" style="max-width: 200px; margin-top: 10px;" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" ref="closeButton" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="saveProduct" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="added" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Add Product</h1>
          <button type="button" ref="closeButton" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-floating mb-3">
              <input type="number" v-model="obj.id" placeholder="Product id" class="form-control" id="floatingInput">
              <label for="floatingInput">Product Id</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" v-model="obj.productname" placeholder="Product Name" class="form-control" id="floatingInput">
              <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" v-model="obj.price" placeholder="Product Price" class="form-control" id="floatingInput">
              <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" v-model="obj.ingredients" placeholder="Ingredients" class="form-control" id="floatingInput">
              <label for="floatingInput">Product Name</label>
            </div>
            <input type="file" @change="onFileChange" accept=".png, .jpg, .jpeg" />
            <p v-if="file">Selected File: {{ file.name }}</p>
            <!-- Display File Preview if Available -->
            <div v-if="obj.imageUrl">
              <img :src="obj.imageUrl" alt="File Preview" style="max-width: 200px; margin-top: 10px;" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="addProduct" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts, deleteProduct, updateProduct, addProduct } from "@/firebase/db";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uploadImage } from "@/firebase/utils/uploadImage";
import dateandtime from '@/admin/DateAndTime.vue'
import skeleton from '@/components/skeleton/Skeleton.vue'
import swal from "sweetalert";

export default {
  name: 'products',
  data() {
    return {
      products: [],
      loading: false,
      error: null,
      file: null,        // Holds the selected file
      obj: {
        id: "",
        productname: "",
        price: null,
        ingredients: "",
        imageUrl: null,
        // imageUrlTwo: null,
        // imageUrlThree: null,
        // imageUrlFour: null,
      },
    }
  },
  components: {
    dateandtime,
    skeleton
  },
  created() {
    const auth = getAuth();
    this.fetchProducts();

  },
  methods: {
    async deleteProductID(id) {
    console.log('hello');
    
    this.loading = true;
    this.error = null;
    try {
      const response = await addProduct(this.obj);
      console.log(response);
      this.products = this.products.filter(product => product.id !== id);
    } catch (error) {
      swal({
          title: "success",
          text: "Failed to delete product. Please try again later.",
          icon: "success",
        });
       
    } finally {
      this.loading = false;
    }
  },

    // Method triggered on file selection
    async onFileChange(event) {
      const selectedFile = event.target.files[0]; // Get the selected file

      // Check if a file was selected and if it's a valid image type
      if (selectedFile && (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg') && this.obj.productname !== "") {
        this.file = selectedFile; // Update the file in data
        // URL.createObjectURL(this.file);
        // Create a URL for the selected file to display a preview
        this.obj.imageUrl = await uploadImage(selectedFile, this.obj.productname);
        console.log("this.obj.imageUrl", this.obj.imageUrl);

      } else {
        alert('Please select a valid PNG or JPG file and Provide Product Name');
        this.file = null;
        this.obj.imageUrl = null;
      }
    },
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        this.products = await getProducts();
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        this.error = "Failed to fetch products. Please try again later.";
      } finally {
        this.loading = false;
      }
    },

    loadProduct(product) {
      this.obj = { ...product };
      console.log(this.obj);
    },
    async saveProduct() {
      try {
        let updated = await updateProduct(this.obj);
        console.log(updated, 'updated');
        const index = this.products.findIndex(p => p.id === this.obj.id);
        if (index !== -1) {
          this.products.splice(index, 1, { ...this.obj });
        }
        swal({
          title: "success",
          text: "Product updated successfully",
          icon: "success",
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      } catch (err) {
        swal({
          title: "error",
          text: "Invalid, Please try again",
          icon: "error",
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
        console.error("Error saving product:", err);
      }
    },
    async addProduct() {
      // this.obj.id=1++;
      try {

        let added = await addProduct(this.obj);
        console.log(added, 'added');
        this.products.push({ ...this.obj });
        swal({
          title: "success",
          text: "Product added successfully",
          icon: "success",
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      } catch (err) {
        swal({
          title: "error",
          text: "product invalid , please try again",
          icon: "error",
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
        console.error("Error adding product:", err.code, err.message);
        // Display a user-friendly error message
      }
    }
  },
  
}
</script>
