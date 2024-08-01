<template>
  <div style="padding: 15px 15px; font-size: 30px">
    <p>
      <b>This example demonstrates how to shrink a navigation bar when the user
        starts to scroll the page.</b>
    </p>
    <p>Scroll down this frame to see the effect!</p>
    <p>Scroll to the top to remove the effect.</p>
    <p>
      <b>Note:</b> We have also made the navbar responsive, resize the browser
      window to see the effect.
    </p>
    <p>
      Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
  <div>
    <h1>hell</h1>
    <form @submit.prevent="register()" class="row g-3 justify-content-end">
      <input type="text" v-model="userData.username" placeholder="username" />
      <input type="phone" v-model="userData.phone" placeholder="phone" />
      <input type="password" v-model="userData.password" placeholder="password" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      userData: {
        username: "",
        phone: "",
        password: ""
      }
    }
  },
  methods: {
   async register() {
      try {
        const response = await axios.post(
          "https://leelawellness-api.azurewebsites.net/api/registerUser?code=ubKyFrzwKwB_oNKHOfFiLgR2nDJCFg6NH4sW7dq33mOIAzFu0MLEqw%3D%3D",
          {
            username: this.userData.username,
            password: this.userData.password,
            mobile: this.userData.phone
          }
        );
      } catch (error) {
        console.error("Error registering user:", error.message);
        // Display an error message to the user
        alert("An error occurred while registering the user. Please try again later.");
      }
    }
  }
}
</script>

<style scoped></style>
