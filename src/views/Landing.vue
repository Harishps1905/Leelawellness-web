<template>
    <div class="herobg d-flex align-items-center justify-content-start" style="min-height: 90vh; margin-top: 100px;">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-6 d-flex align-items-start h-100 text-white flex-column a text-start">
                    <h2 class="fs-1 text-start">Superior CBD Products</h2>
                    <p class="text-start">Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Faucibus a pellentesque sit amet porttitor eget dolor dictum sit amet justo donec enim diam. </p>
                    <button class="btn btn-danger rounded">Shop now</button>
                </div>
            </div>
        </div>
    </div>

    <!-- The Advantages Of Choosing Canza -->
    <ChoosingLeela/>

    <section class="my-5">
        <div class="whyLeela">
           <div class="container h-100">
            <div class="row align-items-center justify-content-center h-100">
                <div class="col-8">
                    <h1 class="text-center">Why Should I Buy Shilajit?</h1>
                    <p  class="text-center">Everything in nature is connected and designed to keep all of life balanced. However, it is best to consume naturally made, unprocessed products which have established the best compatibility with our bodies through the course of our evolution. Natural sources of nutrition tend to be better than expensive Vitamin tablets, as they contain a whole host of other ingredients, such as trace minerals, that help the body to fulfil its needs. If you can’t get enough minerals through your regular diet, then it’s time to try shilajit.</p>
                </div>
            </div>
           </div>
        </div>
    </section>

    <HerbalWellness/>

</template>

<script>
import ChoosingLeela from '@/components/homesections/ChoosingLeela.vue';
import HerbalWellness from '@/components/homesections/HerbalWellness.vue';
export default {
    name: 'landing',
    components: {
        ChoosingLeela,
        HerbalWellness
    }
}
</script>

<style scoped>
.whyLeela{
    background:url('../assets/images/whyleela.png') no-repeat center;
    background-size: cover;
    height: 50vh
}

</style>