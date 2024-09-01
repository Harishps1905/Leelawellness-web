<template>
      <section class="my-5">
        <div class="container my-5" data-aos="fade-in">
            <h2 class="text-center mb-4 py-5 sub_main_headline">Explore Our Leela Shilajith Products</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col prod_img" v-for="(prod, index) in this.$store.state.products">
                  <router-link style="text-decoration: none;" :to="{ name: 'ProductPageDesc', params: { id: prod.id } }">
                    <div class="card h-100 shadow-sm border-0">
                        <img :src="prod.imageUrl"
                            class="card-img-top" alt="Product 3">
                        <div class="card-body text-center">
                            <h5 class="card-title">{{prod.productname}}</h5>
                            <p class="card-text">${{prod.price}}</p>
                            <button class="btn btn-dark rounded-0 para_text w-100">Buy Now</button>
                        </div>
                    </div>
                  </router-link>
                </div>

                <div class="col prod_img">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="../assets/images/runningImg.png" class="card-img-top" alt="Himalayan Product 3">
                        <div class="card-body text-center">
                            <h5 class="card-title">Himalayan Product 3</h5>
                            <p class="card-text">$24.99</p>
                            <button class="btn btn-dark rounded-0 para_text w-100">Buy Now</button>
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    </section>
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
