<template>
    <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-warning sidebar">
        <div class="position-sticky">
          <ul class="dashboardAdmin nav flex-column">
            <li class="nav-item">
                <RouterLink class="nav-link text-decoration-none" :to="{ path: '/dashboard' }">dashboard</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link text-decoration-none" :to="{ path: '/dashboard/products' }">products</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link text-decoration-none" :to="{ path: '/dashboard' }">customers</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link text-decoration-none" :to="{ path: '/dashboard' }">settings</RouterLink>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main content -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'dashboard'
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

.dashboardAdmin .router-link-active{
  color: brown;
}
</style>