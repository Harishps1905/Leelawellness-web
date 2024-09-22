<template>
      <div class="height10vh"></div>
  <section class="my-5" v-if="$route.name === 'Landing'">
        <div class="container my-5" data-aos="fade-in">
            <h2 class="text-center mb-4 py-5 sub_main_headline">Explore Our Leela Shilajith Product</h2>
            <div class="row m-0 justify-content-center g-4">
                <div class="col-9 col-sm-6 col-md-6 col-lg-3 prod_img" v-for="(prod, index) in this.$store.state.products">
                  <router-link style="text-decoration: none;" :to="{ name: 'ProductPageDesc', params: { id: prod.id } }">
                    <div class="card h-100 border-0">
                        <img :src="prod.imageUrl" style="height:400px;"
                            class="img-fluid card-img-top" alt="Product 3">
                        <div class="card-body text-center">
                            <h5 class="card-title">{{prod.productname}}</h5>
                            <span>Available Sizes:</span>
                            <p class="card-text">{{prod.price}}</p>
                            <button class="btn btn-dark rounded-0 para_text w-100">Buy Now</button>
                        </div>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
  </section>

    <section v-else>
     <div class="productbgall text-white vh-100" v-for="(prod, index) in this.$store.state.products">
      <div class="container h-100">
          <div class="row align-items-center h-100 m-0" >
              <div class="col-md-6 mb-lg-4 mb-md-0">
                <img data-aos="fade-right" src="@/assets/images/Leela-36_Cap1.png" class="img-fluid px-lg-5" alt="Himalayan Product 3">
              </div>
              <div class="col-md-6" data-aos="fade-left">
                  <h1 class="fw-bold text-dark number p-0 m-0">0{{index+1}}</h1>
                  <div class="mb-5 mb-lg-2">
                      <h2 class="fw-bold text-uppercase">{{prod.productname}}</h2>
                      <p class="lead sub_header2">Leela shilajith, we provide professional. Our dedicated team and modern equipment ensure your vision is turned into reality with high quality.</p>
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
  import { useHead } from "@vueuse/head";

  export default {
    name: 'product',
    data() {
      return {
      };
    },
    setup() {
    useHead({
      title: 'Leela Shilajith - Premium Ayurvedic Supplement',
      meta: [
        {
          name: 'description',
          content: 'Explore Leela Shilajith, a premium Ayurvedic supplement designed to enhance performance, strengthen immunity, and support a healthy metabolism. Discover the benefits of our all-natural formulation crafted from potent herbs.'
        }
      ]
    });
  },
  
  };
  </script>

  <style>

.productbgall{
  background: url('@/assets/images/productbgall.png');
  background-position: center;
  background-size: cover;
  height: 50vh;
}
</style>
