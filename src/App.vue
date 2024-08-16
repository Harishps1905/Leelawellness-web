<template>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

      <div class="position-fixed whatsapp" style="bottom: 20px; right: 20px; cursor: pointer;">
        <a href="https://wa.me/9884259035" target="_blank" class="whatsappimg">
         <img class="img-fluid p-2 bg-dark rounded-circle" src="@/assets/images/whatsapp.avif" alt="">
        </a>
      </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
.whatsappimg img{
  width: 90px;
  animation: whatsapp 1s ease-in infinite;
}
.whatsapp img:hover{
  
  transform: scale(1.04);
  transition: 0.6s;
}
@keyframes whatsapp {
  0%{
    transform: scale(1) !important;
  }
  50%{
    transform: scale(1.5) !important;
  }
  100%{
    transform: scale(1) !important;
  }
}
</style>