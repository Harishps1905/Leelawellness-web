<template>
    <div>
        <Header/>
        <main>
            <router-view />
        </main>
        footer
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    components: {
        Header
    },
}
</script>

<style scoped></style>