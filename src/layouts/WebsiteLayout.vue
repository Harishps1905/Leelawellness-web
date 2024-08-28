<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { getProducts } from "@/firebase/db";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'WebsiteLayout',
  components: {
    Header,
    Footer
  },
  created() {
    const auth = getAuth();
    this.fetchProducts();
   
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        this.products = await getProducts();
        console.log(this.products);
        this.$store.commit('GET_PROD', this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        this.error = "Failed to fetch products. Please try again later.";
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped></style>