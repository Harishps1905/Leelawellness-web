<template>
  <div>
    <div v-if="loading">Loading products...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        {{ product.id }}
        {{ product.price }}
        {{ product.productname }}
        {{ product.ingredients }}
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#delete"
          @click="deleteProduct(product.id)">Delete</button>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
          @click="loadProduct(product)">Edit</button>
      </div>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#added">Add Product</button>
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
            <input type="text" v-model="obj.id" placeholder="Product ID" readonly>
            <input type="text" v-model="obj.productname" placeholder="Product Name">
            <input type="number" v-model="obj.price" placeholder="Product Price">
            <input type="text" v-model="obj.ingredients" placeholder="Ingredients">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="saveProduct" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="added" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Add Product</h1>
          <button type="button" ref="closeButton" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <input type="text" v-model="obj.id" placeholder="Product ID">
            <input type="text" v-model="obj.productname" placeholder="Product Name">
            <input type="number" v-model="obj.price" placeholder="Product Price">
            <input type="text" v-model="obj.ingredients" placeholder="Ingredients">
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="addProduct" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" ref="closeButton" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h1>Are you sure You want to delete ?</h1>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="addProduct" class="text-white btn btn-danger">YEs</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getProducts, deleteProduct, updateProduct, addProduct } from "@/firebase/db";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'products',
  data() {
    return {
      products: [],
      loading: false,
      error: null,
      obj: {
        id: "",
        productname: "",
        price: null,
        ingredients: "",
      },
    }
  },
  methods: {
    created() {
    const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log("User is signed in:", user.uid);
    this.fetchProducts();
    //   } else {
    //     console.log("No user is signed in.");
    //     // Redirect to login page or show an error
    //   }
    // });
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
        this.$refs.closeButton.click();
      } catch (err) {
        console.error("Error saving product:", err);
      }
    },
    async addProduct() {
      this.obj.id=1++;
      try {
        
        let added = await addProduct(this.obj);
        console.log(added, 'added');
        this.products.push({ ...this.obj });
        this.$refs.closeButton.click();
      } catch (err) {
        console.error("Error adding product:", err.code, err.message);
        // Display a user-friendly error message
      }
    }
  },
  async deleteProduct(id) {
      this.loading = true;
      this.error = null;
      try {
        const response = await deleteProduct(id);
        console.log(response);
        this.products = this.products.filter(product => product.id !== id);
      } catch (error) {
        console.error("Error deleting product:", error);
        this.error = "Failed to delete product. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
  
}
</script>
