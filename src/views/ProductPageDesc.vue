<template>
    <div v-if="productDetails">
      <h1>Product Details</h1>
      <p><strong>ID:</strong> {{ productDetails.id }}</p>
      <p><strong>Name:</strong> {{ productDetails.productname }}</p>
      <p><strong>Price:</strong> {{ productDetails.price }}</p>
      <p><strong>Ingredients:</strong> {{ productDetails.ingredients }}</p>
    </div>
    <div v-else>
      Loading...
    </div>
  </template>
  
  <script>
  import { getProducts } from "@/firebase/db";
  
  export default {
    name: 'ProductPageDesc',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        productDetails: null
      }
    },
    async mounted() {
      try {
        const products = await getProducts();
        this.productDetails = products.find(product => product.id === this.id);
        console.log(this.productDetails, 'created');
        
        if (!this.productDetails) {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }
  }
  </script>
  
  