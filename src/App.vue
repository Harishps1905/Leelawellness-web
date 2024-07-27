<script setup>
import { onMounted, onUnmounted } from "vue";
import { userSignIn, userSignOut } from "./firebase/auth.js";
import HelloWorld from "./components/HelloWorld.vue";
import { app } from "./firebase/config";
import { getProducts, addProduct, updateProduct } from "./firebase/db";


onMounted( async () => {
  // app
  await userSignIn("harishswami62@gmail.com", "123456789");
  // await userSignOut();
  // let products = await getProducts();
  // console.log(products);
  let obj = {
        id: "12",
        productname: "Product 6",
        price: 9.99,
        ingredients: ["ingredient1", "ingredient2"] 
      }
  addProduct(obj);
  obj.id = "13";
  updateProduct(obj)
  console.log(`the component is now mounted.`);
  // setTimeout( async() => {
  //   await userSignOut();
  // }, 5000);
});
</script>

<template>
  <div>
    HelloWorldVue
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
