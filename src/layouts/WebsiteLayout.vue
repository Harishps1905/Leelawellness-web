<template>
    <Header/>
    <main>
        <router-view/>
    </main>
    <div>footer</div>
</template>

<script>
import Header from '@/components/Header.vue';
    export default {
        name:'WebsiteLayout',
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>