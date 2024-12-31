<template>
    <div class="height10vh"></div>
    <div class="herobg">
        <div class="container-fluid p-0">
            <div class="row m-0 vh-100">
                <div class="col-12 col-md-7 text-white d-flex align-items-start justify-content-center flex-column text-start gap-md-4 mt-3 px-3 px-lg-5">
                    <h2 data-aos="fade-right" class="main_headline pt-md-1">LEELA GOLD</h2>
                    <p data-aos="fade-right" class="sub_header2">Leela Shilajith is a premium Ayurvedic supplement that boosts performance, immunity, and metabolism, promoting vitality through ancient wisdom.</p>
                    <RouterLink data-aos="fade-right" class="active text-decoration-none headline_1 btn grad_btn px-5 py-2 rounded" :to="{ path: '/products' }">Shop now</RouterLink>
                </div>
                <div class="col-12 col-lg-5 d-flex align-items-end justify-content-end">
                    <img style="padding-bottom: 54px;" class="img-fluid leelabg_hero" data-aos="fade-left" src="@/assets/images/Leela-36__Cap-3D-Mockup--Side-3__1_-removebg-preview.png" alt="Hero Image">
                </div>
            </div>
        </div>
    </div>

    <!-- The Advantages Of Choosing Canza -->
    <ChoosingLeela />
    <section class="border border-dark border-end-0 border-start-0 my-5" style="padding: 120px 0;">
        <div class="container p-0">
            <div class="row m-0">
                <div class="col-12">
                    <div class="d-flex align-items-center justify-content-center flex-column gap-4" data-aos="fade-down">
                        <h1 class="sub_main_headline text-center">WELCOME TO LEELA SHILAJITH</h1>
                        <p class="para_header text-center">At Leela Shilajit, we’re dedicated to providing you with natural solutions to enhance your well-being. We are committed to offering pure, nature-derived supplements, steering clear of synthetic additives. Our philosophy centers around the belief that the most effective health solutions come from the earth, not a laboratory.</p>
                        <p class="para_header text-center">That's why we have made it our mission to bring the benefits of Leela Shilajit to the forefront. This ancient, naturally occurring resin has stood the test of time, and we aim to educate our customers about its incredible, all-natural properties.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 d-flex align-items-center justify-content-center">
            <button class="grad_btn btn px-5"  @click="pageRoute('/about-leelashilajith')">Know More</button>
        </div>
    </section>
    <HerbalWellness />
    <ProductPage/> 
    <section class="my-5">
        <div class="whyLeela">
            <div class="container h-100 py-5">
                <div class="row m-0 align-items-center justify-content-center h-100">
                    <div class="col-10" data-aos="fade-up">
                        <h1 class="text-center sub_main_headline">Why Should I Buy Shilajit?</h1>
                        <p class="text-center para_header mt-5">Everything in nature is connected and designed to keep
                            all of life balanced. However, it is best to consume naturally made, unprocessed products
                            which have established the best compatibility with our bodies through the course of our
                            evolution. Natural sources of nutrition tend to be better than expensive Vitamin tablets, as
                            they contain a whole host of other ingredients, such as trace minerals, that help the body
                            to fulfil its needs. If you can’t get enough minerals through your regular diet, then it’s
                            time to try shilajit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ChoosingLeela from '@/components/homesections/ChoosingLeela.vue';
import HerbalWellness from '@/components/homesections/HerbalWellness.vue';
import ProductPage from '@/views/ProductPage.vue';
import { useHead } from "@vueuse/head";

export default {
    name: 'landing',
    components: {
        ChoosingLeela,
        HerbalWellness,
        ProductPage
    }, 
    setup() {
    useHead({
      title: 'Welcome to Leela Gold - Premium Ayurvedic Supplements',
      meta: [
        {
          name: 'description',
          content: 'Welcome to Leela Gold, where ancient Ayurvedic wisdom meets modern wellness. Discover our premium range of natural supplements designed to boost performance, enhance immunity, and support overall health.'
        }
      ]
    });
  },
    methods: {
        pageRoute(link) { 
            this.$router.push(link);
        },
    }
}
</script>

<style>
.whyLeela {
    background: url('../assets/images/whyleela.png') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    padding: 50px 0px;
}
.comparison-section {
    padding: 20px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.comparison-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.comparison-table th,
.comparison-table td {
    padding: 15px;
}
.comparison-table thead th {
    background-color: #ffffff;
    color: #333;
    font-size: 18px;
}
.comparison-table tbody td {
    border-top: 1px solid #ddd;
}
.checkmark {
    color: #4CAF50;
    /* Green */
    text-align: center;
}
.cross {
    color: #F44336;
    /* Red */
    text-align: center;
}
.comparison-table tbody tr td:first-child {
    font-weight: bold;
}
/* Add violet background for the "Thera Hair" column */
.comparison-table tbody td:nth-child(2),
.comparison-table thead th:nth-child(2) {
    background-color: #7a68b3;
    /* Violet color */
    border-radius: 0px;
    /* For rounded corners on the violet background */
}

.comparison-table thead th:nth-child(2) {
    background-color: #7a68b3;
    /* Violet color */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
</style>