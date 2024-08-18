<template>
    <section class="newsreadsection ">
        <div class="container p-0">
            <div class="row">
                <div class="news-ticker px-5 mb-5" style="border-radius: 18px;">
                    <div class="ticker-wrap ">
                        <div class="ticker-move">
                            <div class="ticker-item" v-for="news in newsItems" :key="news">
                                <div class="d-flex align-items-center justify-content-center">
                                    <div class="para_header">{{ news }}</div>
                                    <div class="px-4">
                                        <img style="width: 40px;" class="" src="@/assets/images/newsreadericon.png" alt="newsreadericon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 d-flex flex-column gap-4 p-0">
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Support For Mental Health</h2>
                            <p class="para_text">Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Support For Mental Health</h2>
                            <p class="para_text">Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Support For Mental Health</h2>
                            <p class="para_text">Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                </div>
                <div class="col-4 d-flex flex-column px-5 justify-content-center align-items-center">
                    <img src="@/assets/images/Asset_1.webp" alt="premium">
                    <img src="@/assets/images/premium.jpg" alt="premium">
                </div>
                <div class="col-4 d-flex flex-column gap-4 p-0">
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Support For Mental Health</h2>
                            <p class="para_text">Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Support For Mental Health</h2>
                            <p class="para_text">Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Support For Mental Health</h2>
                            <p class="para_text">Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                </div>
                    <div class="col-lg-8 my-4 p-0 pe-5"> <!-- Add padding-end (pe) for gap -->
                        <div class="card p-4">
                            <div class="row">
                                <div class="col-7 d-flex align-items-start justify-content-center flex-column">
                                    <h3 class="sub_header">Marijuana Shop</h3>
                                    <p class="para_text">Amet massa vitae tortor condimentum lacinia quis vel eros. Aliquet nibh praesent tristique magna sit amet purus gravida.</p>
                                    <span class="para_text">- Assured by CEO of company</span>
                                </div>
                                <div class="col-5">
                                    <img src="@/assets/images/runningImg.png" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 my-4 ps-1 p-0"> <!-- Add padding-start (ps) for gap -->
                        <div class="card bg-dark p-4 d-flex text-white align-items-center justify-content-center">
                            
                            <h3 class="sub_header text-dark">Marijuana Shop</h3>
                                    <p class="para_text text-center">Amet massa vitae tortor condimentum lacinia quis vel eros. Aliquet nibh praesent tristique magna sit amet purus gravida.</p>
                                    <span class="para_text text-center">- Assured by CEO of company</span>
                                    <button class="btn grad_btn px-5 py-2 mt-4 text-white">Shop Now</button>
                        </div>
                    </div>
                </div>

            </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            newsItems: [
                "MindHarvest Wellness Launches New Product Line",
                "Elevate Naturals Expands to New Markets",
                "HarvestMind Health Partners with Leading Researchers",
                "CultivateWell Introduces New Wellness Programs",
                "Natural Elevation Reports Record Growth",
                "MindHarvest Wellness Launches New Product Line",
                "Elevate Naturals Expands to New Markets",
                "HarvestMind Health Partners with Leading Researchers",
                "CultivateWell Introduces New Wellness Programs",
                "Natural Elevation Reports Record Growth",
            ]
        };
    }
};
</script>

<style scoped>
.news-ticker {
    width: 100%;
    background: linear-gradient(90deg,#ffd0357a,#ffd0354d);
    color: #000;
    font-weight: bold;
    overflow: hidden;
    position: relative;
}

.ticker-wrap {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 70px;
    overflow: hidden;
    position: relative;
}

.ticker-move {
    display: flex;
    white-space: nowrap;
    animation: ticker 40s linear infinite;
}

.ticker-item {
    font-size: 1.2rem;
}

@keyframes ticker {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}
.newsreadsection .card{
    height:350px;
    background: linear-gradient(90deg,#ffd0357a,#ffd0354d);
    border: none;
    border-radius: 18px;
    border: 2px dotted gold;
}
</style>