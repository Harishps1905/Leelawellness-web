<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-warning sidebar">
        <div class="position-sticky">
          <ul class="dashboardAdmin nav flex-column">
            <li class="nav-item">
              <RouterLink class="nav-link text-decoration-none"
                :class="{ adminactive: $route.name === 'dashboard', 'adminnonactive': $route.name !== 'dashboard' }"
                :to="{ path: '/dashboard' }">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-decoration-none"
                :class="{ adminactive: $route.name === 'products', 'adminnonactive': $route.name !== 'products' }"
                :to="{ path: '/dashboard/products' }">Products</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-decoration-none"
                :class="{ adminactive: $route.name === 'customers', 'adminnonactive': $route.name !== 'customers' }"
                :to="{ path: '/dashboard/customers' }">Customers</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-decoration-none"
                :class="{ adminactive: $route.name === 'settings', 'adminnonactive': $route.name !== 'settings' }"
                :to="{ path: '/dashboard/settings' }">Settings</RouterLink>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-decoration-none adminnonactive" @click.prevent="logouted">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Main content -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
       <div v-if="this.$store.state.auth">
        <router-view />
       </div>
       <div v-else>
         <h1>You are not logged in</h1>
         <router-link to="/">Login</router-link> or <router-link to="/admin">Register</router-link> to access the dashboard.
       </div>
      </main>
    </div>
  </div>
</template>

<script>
import { userSignOut } from "@/firebase/auth.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useRouter } from 'vue-router';
import { app } from "@/firebase/config";

export default {
  data() {
    return {
      // Your data properties go here
    }
  },
  methods: {
    async logouted() {
      try {
        await userSignOut();
        this.$store.dispatch('logout');
        await this.$router.push('/');
        location.reload();
      } catch (error) {
        console.error("Error signing out:", error);
      }
    }
  }
}
</script>


<style scoped>
/* Add any component-specific styles here */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto;
}

.dashboardAdmin .adminactive {
  color: brown;
  background: #fff;
  transition: 1s;
  border-bottom: 3px solid brown;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.dashboardAdmin .adminnonactive {
  color: black;
}
</style>