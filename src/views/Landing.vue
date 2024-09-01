<template>
    <div class="herobg d-flex align-items-end justify-content-start" style="min-height: 90vh; margin-top: 100px;">
        <div class="container p-0 h-100">
            <div class="row h-100">
                <div data-aos="fade-in"
                    class="col-12 col-md-7 d-flex align-items-start text-white flex-column text-start h-100 gap-4">
                    <h2 class="main_headline">Superior CBD Products</h2>
                    <p class="para_header">Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit.
                        Faucibus a pellentesque sit amet porttitor eget dolor dictum sit amet justo donec enim diam.</p>
                    <button class="btn grad_btn px-5 py-3 rounded">Shop now</button>
                </div>
                <div class="col-12 col-lg-5 d-flex justify-content-end ">
                    <img data-aos="fade-left" style="padding-bottom: 22px; width: 320px; object-fit: contain;"
                        class="img-fluid" src="@/assets/images/Leela-36__Cap-3D-Mockup--Side-3__1_-removebg-preview.png"
                        alt="Hero Image">
                </div>
            </div>
        </div>

    </div>
    <!-- The Advantages Of Choosing Canza -->
    <ChoosingLeela />

    <section class="border border-dark border-end-0 border-start-0 my-5" style="padding: 120px 0;">
        <div class="container p-0">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex align-items-center justify-content-center flex-column gap-4" data-aos="fade-down">
                        <h1 class="sub_main_headline">WELCOME TO LEELA SHILAJITH</h1>
                        <p class="para_header text-center">At Primul, we’re passionate about giving you the tools you need to live life at your optimum. We’re tired of seeing artificial compounds touted as “healthy” supplements. We believe the healthiest supplements available on planet earth are those produced by mother nature, and not by scientists in a lab.</p>
                        <p class="para_header text-center">That’s why we set out on our mission to bring Primul Shilajit to the mainstream by educating consumers on the immense benefits contained within this 100% natural and time-tested resin.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <HerbalWellness />

    <section class="my-5">
        <div class="whyLeela">
            <div class="container h-100 py-5">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-10" data-aos="fade-in">
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

    <ProductPage/>

    <section class="my-5 py-5">
        <div class="container">
            <div class="row" data-aos="fade-down">
                <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                    <h1 class="text-uppercase sub_main_headline">Our Shilajit is Potent and Pure</h1>
                    <img src="@/assets/images/shilaj-1.webp" class="img-fluid" alt="">
                </div>
                <div  
                    class="col-4 d-flex justify-content-center flex-column align-items-center align-content-center text-center gap-4">
                    <img width="100" src="@/assets/images/howdoesitwork.png" class="img-fluid" alt="">
                    <div>
                        <h2 class="sub_header">How to use</h2>
                        <p class="para_text">Follow our simple graphic guideline on How to Use Shilajit. You will not
                            only learn about daily dosage, but also about certain factors you need to avoid.</p>
                    </div>
                </div>
                <div  
                    class="col-4 d-flex justify-content-center flex-column align-items-center align-content-center text-center gap-4">
                    <img width="100" src="@/assets/images/howtouse.jpg" class="img-fluid" alt="">
                    <div>
                        <h2 class="sub_header">How to use</h2>
                        <p class="para_text">Follow our simple graphic guideline on How to Use Shilajit. You will not
                            only learn about daily dosage, but also about certain factors you need to avoid.</p>
                    </div>
                </div>
                <div  
                    class="col-4 d-flex justify-content-center flex-column align-items-center align-content-center text-center gap-4">
                    <img width="100" src="@/assets/images/isitsafe.png" class="img-fluid" alt="">
                    <div>
                        <h2 class="sub_header">How to use</h2>
                        <p class="para_text">Follow our simple graphic guideline on How to Use Shilajit. You will not
                            only learn about daily dosage, but also about certain factors you need to avoid.</p>
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
export default {
    name: 'landing',
    components: {
        ChoosingLeela,
        HerbalWellness,
        ProductPage
    },

}
</script>

<style>
.whyLeela {
    background: url('../assets/images/whyleela.png') no-repeat center;
    background-size: cover;
   padding: 50px 0px;
}

.prod_img img {
    width: 100%;
    height: 270px;
    object-fit: contain;
}
</style>