<template>
    <div>
      <PrimevueSkeleton height="8rem" class="mb-3" borderRadius="10px"></PrimevueSkeleton>
      
      <PrimevueSkeleton height="8rem" class="mb-3" borderRadius="10px"></PrimevueSkeleton>
      
      <PrimevueSkeleton height="8rem" class="mb-3" borderRadius="10px"></PrimevueSkeleton>
      
      <PrimevueSkeleton height="8rem" class="mb-3" borderRadius="10px"></PrimevueSkeleton>
      
      <PrimevueSkeleton height="8rem" class="mb-3" borderRadius="10px"></PrimevueSkeleton>
      
      <PrimevueSkeleton height="8rem" class="mb-3" borderRadius="10px"></PrimevueSkeleton>
      
      <PrimevueSkeleton height="8rem" class="mb-3" borderRadius="10px"></PrimevueSkeleton>
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
