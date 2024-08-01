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
        <!-- Other product details -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import { userSignIn, userSignOut } from "@/firebase/auth.js";
import { app } from "@/firebase/config";
import { getProducts, addProduct, updateProduct, deleteProduct, } from "@/firebase/db";

export default {
    name: 'products',
    data() {
        return {
            products: [],
            loading: false,
            error: null
        }
    },
    methods: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        // Assuming getProducts is an imported function that returns a Promise
        this.products = await getProducts();
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        this.error = "Failed to fetch products. Please try again later.";
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style scoped></style>