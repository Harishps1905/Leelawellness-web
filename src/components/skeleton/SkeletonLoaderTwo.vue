<template>
<div class="rounded d-flex flex-column gap-4">
    <div class="d-flex gap-3 align-items-center" v-for="n in 13" :key="n">
        <PrimevueSkeleton shape="circle" size="3rem" height="2rem" class="mr-2"></PrimevueSkeleton>
        <PrimevueSkeleton width="30rem" height="2rem" class="rounded mb-2"></PrimevueSkeleton>
    </div>
</div>  
 </template>
 
 <script setup>
  import PrimevueSkeleton from 'primevue/skeleton';
 </script>

  <style scoped>
  .p-skeleton {
    animation: skeletonIn 2s ease-out infinite;
    background-color: #f0a94261;
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
