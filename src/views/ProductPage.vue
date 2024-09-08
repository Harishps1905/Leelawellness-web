<template>
  <div v-if="$route.name === 'ProductPage'" style="height: 10vh;"></div>
  <section class="my-5" v-if="$route.name === 'Landing'">
        <div class="container my-5" data-aos="fade-in">
            <h2 class="text-center mb-4 py-5 sub_main_headline">Explore Our Leela Shilajith Products</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div class="col prod_img" v-for="(prod, index) in this.$store.state.products">
                  <router-link style="text-decoration: none;" :to="{ name: 'ProductPageDesc', params: { id: prod.id } }">
                    <div class="card h-100 shadow-sm border-0">
                        <img :src="prod.imageUrl" style="height: 270px; object-fit: cover;"
                            class="img-fluid card-img-top" alt="Product 3">
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

    <section v-else>
     <div class="productbgall text-white vh-100" v-for="(prod, index) in this.$store.state.products">
      <div class="container h-100">
          <div class="row align-items-center h-100" >
              <div class="col-md-6 mb-4 mb-md-0">
                <img data-aos="fade-right" src="@/assets/images/runningImg.png" class="img-fluid px-5" alt="Himalayan Product 3">
              </div>
              <div class="col-md-6" data-aos="fade-left">
                  <h1 class="fw-bold text-dark number p-0 m-0">0{{index+1}}</h1>
                  <div>
                      <h2 class="fw-bold text-uppercase">{{prod.productname}}</h2>
                      <p class="lead">Leela shilajith, we provide professional. Our dedicated team and modern equipment ensure your vision is turned into reality with high quality.</p>
                      <router-link style="text-decoration: none;" :to="{ name: 'ProductPageDesc', params: { id: prod.id } }">
                         <button class="btn shadow border text-white px-5">Know More</button>
                      </router-link>
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

  <style>

.productbgall{
  background: url('@/assets/images/productbgall.png');
  background-position: center;
  background-size: cover;
  height: 50vh;
}</style>
