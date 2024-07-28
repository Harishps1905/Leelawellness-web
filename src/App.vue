<script setup>
import { onMounted, onUnmounted } from "vue";
import { userSignIn, userSignOut } from "./firebase/auth.js";
import HelloWorld from "./components/HelloWorld.vue";
import { app } from "./firebase/config";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./firebase/db";


onMounted( async () => {
  console.log(`the component is now mounted.`);
  let obj = {
        id: "42",
        productname: "Product 6",
        price: 9.99,
        ingredients: ["ingredient1", "ingredient2"] 
      }
  try {

  // get all products
  let products = await getProducts();
  console.log(products);


  //signout user
  // await userSignOut();


  // signin user
  // let user = await userSignIn("harishswami62@gmail.com", "987654321");
  // console.log(user);

  // let updated = await updateProduct(obj)
  // console.log(updated);

  // add product
  // let added = await addProduct(obj);
  // console.log(added);

  // delete product
  //   let del = await deleteProduct(obj.id);
  //   console.log(del);

  
  } catch (error) {
    console.log(error);
  }

});

onUnmounted(async() => {
  console.log(`the component is now unmounted.`);
  // await userSignOut();
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
