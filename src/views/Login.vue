<template>
  <div class="height10vh"></div>

  <section style="background-color: #fff;" class="mt-3 py-5">
    <div class="container py-3 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="row justify-content-center " title="login">
            <div class="col-md-7 d-flex align-items-center rounded login_bg">
              <div class="card-body p-4 p-lg-5 text-black">
                <form>
                  <div class="d-flex text-white flex-column align-items-center mb-3 pb-1">
                    <span class="h1 fw-bold  mb-0">LEELASHILAJITH</span>
                    <small class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</small>
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label text-white" for="form2Example17">Email address</label>
                    <input type="email" v-model="admin.email" id="form2Example17"
                      class="form-control form-control-lg" />
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label text-white" for="form2Example27">Password</label>
                    <input type="password" v-model="admin.password" id="form2Example27"
                      class="form-control form-control-lg" />
                  </div>
                  <div class="pt-1 mb-4">
                    <button v-if="!loader" class="btn grad_btn mt-3 px-5 btn-lg btn-block" @click="authenticateUser"
                      type="button">Continue</button>
                      <button v-else class="btn grad_btn mt-3 px-5 btn-lg btn-block"
                      type="button">Please wait...</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { userSignIn, userSignOut } from "@/firebase/auth.js";
import { app } from "@/firebase/config";
import { useRouter } from 'vue-router';
import swal from "sweetalert";

export default {
  name: 'loginAdmin',
  data() {
    return {
      admin: {
        email: 'harishswami62@gmail.com',
        password: '987654321',
      },
      loader:false,
    }
  },
  methods: {
    async authenticateUser() {
      try {
        this.loader=false;
        this.user = await userSignIn(this.admin.email, this.admin.password);
        console.log(this.user);
        this.$store.commit('SET_SELECTEDAUTH', true)
        swal({
          title: "success",
          text: "Admin successfully logged in",
          icon: "success",
        });
        this.loader=true;
        this.$router.push('/dashboard');
      } catch (error) {
        console.log(error);

        swal({
          title: "error signing",
          text: "Email / Password is invalid , please try again",
          icon: "error",
        });
      }
    }
  }
}
</script>

<style scoped>
.login_bg {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/aboutus.png') center no-repeat;
  background-size: cover;
}
</style>