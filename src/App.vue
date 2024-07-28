<template>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
</router-view>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';

</script>