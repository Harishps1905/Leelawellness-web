<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3" v-for="n in 4">
        <PrimevueSkeleton height="20rem" class="mb-3 w-100 " borderRadius="16px"></PrimevueSkeleton>
      </div>
    </div>
  </div>
</template>


<script setup>
import PrimevueSkeleton from 'primevue/skeleton';
</script>

<style scoped>
.p-skeleton {
  animation: skeletonIn 2s ease-out infinite;
  background-color: #fa6e1161;
}

/* Keyframes for the skeleton animation */
@keyframes skeletonIn {
  0% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}
</style>
