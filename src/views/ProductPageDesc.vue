<template>

  <section>
    <div style="height: 20vh;"></div>
    <div class="container my-5">
      <div class="row m-0" v-if="productDetails">
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <img :src="productDetails.imageUrl" class="img-fluid" alt="Product 3">
        </div>
        <div class="col-12 col-md-6">
          <p><strong>ID: </strong>{{ productDetails.id }}</p>
          <h1 class="product-name sub_main_headline">{{ productDetails.productname }}</h1>
          <p class="text-muted">Himalayan Mountains</p>
          <div class=" d-flex flex-column">
            <span class="fw-semibold">Available Sizes:</span>
            <span class="text-danger">{{ productDetails.price }}</span> 
          </div>
          <p class="text-success"> </p>
          <div class="my-3">
            <p>Quantity</p>
            <div class="input-group">
              <button class="btn btn-outline-secondary" type="button" @click="decreaseQuantity">-</button>
              <input type="text" class="form-control text-center" :value="NoOfProduct" readonly>
              <button class="btn btn-outline-secondary" type="button" @click="increaseQuantity">+</button>
            </div>
          </div>
          <div class="my-4 d-flex flex-column gap-3">
            <button class="btn w-100 rounded border-secondary btn-success mb-10" @click="sendToWhatsApp">Buy Now &nbsp;&nbsp;<i class="bi bi-whatsapp"></i></button>
            <a href="tel:9072099959" class="btn w-100 rounded border-secondary btn-outline-success"><i class="bi bi-telephone"></i> &nbsp;&nbsp;&nbsp;&nbsp;Make A Call To Order</a>
          </div>
          <h2 class="mt-3 text-uppercase">Ingredients</h2>
          <p class="sub_header headline_color_2">Below are the ingredients used</p>
          <p class="product-description para_header headline_color_3"> {{ productDetails.ingredients }} </p>
        </div>
      </div>
      <div v-else>
        <skeleton/>
      </div>
    </div>
  </section>

</template>

<script>
import { getProducts } from "@/firebase/db";
import skeleton from '@/components/skeleton/Skeleton.vue';
import { useHead } from "@vueuse/head";

export default {
  name: 'ProductPageDesc',
  setup() {
    useHead({
      title: `Leela Shilajith Product - leelashilajith`,
      meta: [
        {
          name: 'description',
          content: 'Discover [Product Name] by Leela Shilajith, a premium Ayurvedic supplement crafted to enhance your well-being. Learn about its benefits, ingredients, and how it supports vitality, performance, and overall health.'
        }
      ]
    });
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    skeleton,
  },
  data() {
    return {
      productDetails: null,
      whatsappNumber: "+919072099959",
      NoOfProduct: 1,
    }
  },
  computed: {
    increment() {
      return this.NoOfProduct + 1;
    }
  },
  methods: {
    increaseQuantity() {
      this.NoOfProduct++;
    },
    decreaseQuantity() {
      if (this.NoOfProduct > 1) {
        this.NoOfProduct--;
      }
    },
    sendToWhatsApp() {
      const message = `[View Image](${this.productDetails.imageUrl}\nProduct: ${this.productDetails.id}\nDescription: ${this.productDetails.productname}\n No.of product: ${this.NoOfProduct}\n`;
      const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    },
  },
  async mounted() {
    try {
      const products = await getProducts();
      this.productDetails = products.find(product => product.id === this.id);
      if (!this.productDetails) {
        console.error("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }
}
</script>

<style>
.price {
  font-size: 2rem;
  color: #d9534f;
}

.original-price {
  text-decoration: line-through;
  color: #6c757d;
}

.product-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.product-description {
  margin-top: 1rem;
}

.thumb-images img {
  width: 100px;
  height: auto;
  cursor: pointer;
  margin-right: 5px;
}

.size-options button {
  margin-right: 5px;
}
</style>