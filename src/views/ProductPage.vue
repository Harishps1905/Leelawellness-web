<template>
    <div class="product-page">
      <div class="container">
        <div class="products-grid">
          <div class="product-card" v-for="product in products" :key="product.id">
            <router-link :to="{ name: 'ProductPageDesc', params: { id: product.id } }">
              <img :src="product.imageUrl" alt="Product Image" class="product-image" />
            </router-link>
            <div class="product-info">
              <h5 class="product-title">{{ product.productname }}</h5>
              <p class="product-ingredients">{{ product.ingredients }}</p>
              <div class="product-footer">
                <span class="product-price">${{ product.price }}</span>
                <button v-if="!isInCart(product.id)" @click="addtoCart(product)" class="btn-add-cart">
                  Add to cart
                </button>
                <button v-else class="btn-added" disabled>
                  Added
                </button>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/cart" class="cart-button">
          {{ this.$store.state.cartproduct.length }} items in cart
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { getProducts } from "@/firebase/db";
  
  export default {
    name: 'product',
    data() {
      return {
        products: [],
      };
    },
    created() {
      this.fetchProducts();
    },
    computed: {
      isInCart() {
        return (productId) => this.$store.getters.isProductInCart(productId);
      },
    },
    methods: {
      async fetchProducts() {
        try {
          this.products = await getProducts();
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
      addtoCart(product) {
        this.$store.dispatch('addToCart', product);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-page {
    padding-top: 112px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .product-card:hover {
    transform: translateY(-10px);
  }
  
  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .product-info {
    padding: 15px;
  }
  
  .product-title {
    font-size: 1.1rem;
    margin: 0 0 10px;
  }
  
  .product-ingredients {
    font-size: 0.9rem;
    color: #777;
    margin: 0 0 15px;
  }
  
  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .product-price {
    font-weight: bold;
    color: #333;
  }
  
  .btn-add-cart,
  .btn-added {
    padding: 5px 10px;
    font-size: 0.9rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-add-cart {
    background-color: #333;
    color: #fff;
  }
  
  .btn-added {
    background-color: #ccc;
    color: #666;
  }
  
  .cart-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
  
  .cart-button:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 768px) {
    .product-image {
      height: 150px;
    }
  
    .cart-button {
      width: 100%;
      bottom: 0;
      right: 0;
      border-radius: 0;
      text-align: center;
    }
  }
  </style>
  