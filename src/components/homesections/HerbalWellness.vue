<template>
    <section class="newsreadsection">
        <div class="container">
            <div class="row">
                <div class="news-ticker rounded mb-5">
                    <div class="ticker-wrap">
                        <div class="ticker-move">
                            <div class="ticker-item" v-for="news in newsItems" :key="news">
                                <div class="d-flex align-items-center justify-content-center">
                                    <div>{{ news }}</div>
                                    <div class="px-4">
                                        <img style="width: 40px;" class="" src="@/assets/images/newsreadericon.png" alt="newsreadericon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 d-flex flex-column gap-4 pr-3">
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded circled" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2>Support For Mental Health</h2>
                            <p>Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded circled" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2>Support For Mental Health</h2>
                            <p>Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded circled" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2>Support For Mental Health</h2>
                            <p>Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                </div>
                <div class="col-4 d-flex flex-column px-5 justify-content-center align-items-center">
                    <img src="@/assets/images/Asset_1.webp" alt="premium">
                    <img src="@/assets/images/premium.jpg" alt="premium">
                </div>
                <div class="col-4 d-flex flex-column gap-4 ps-3">
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded circled" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2>Support For Mental Health</h2>
                            <p>Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded circled" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2>Support For Mental Health</h2>
                            <p>Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded circled" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2>Support For Mental Health</h2>
                            <p>Bibendum neque egestas congue quisque. Faucibus ornare suspendisse sed nisi lacus.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 my-5">
                    <div class="card">
                        <div class="row">
                            <div class="col-6">
                                <h3>Marijuana Shop</h3>
                                <p>Amet massa vitae tortor condimentum lacinia quis vel eros. Aliquet nibh praesent tristique magna sit amet purus gravida. </p>
                                <span>- Assured by CEO of company</span>
                            </div>
                            <div class="col-6">
                                
                            </div>
                        </div>
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
    justify-content: flex-center;
    align-items: center;
    height: 70px;
    overflow: hidden;
    position: relative;
}

.ticker-move {
    display: flex;
    white-space: nowrap;
    animation: ticker 55s linear infinite;
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
}
</style>