<template>
    <section class="newsreadsection ">
        <div class="container p-0">
            <div class="row m-0 px-3 px-lg-0">
                <div class="news-ticker px-5 mb-5" style="border-radius: 18px;">
                    <div class="ticker-wrap ">
                        <div class="ticker-move">
                            <marquee>
                                <div class="d-flex sub_header fs-5">
                                    <span>MindHarvest Wellness Launches New Product Line</span>
                                    <span>CultivateWell Introduces New Wellness Programs</span>
                                    <span>Elevate Naturals Expands to New Markets</span>
                                    <span>MindHarvest Wellness Launches New Product Line</span>
                                </div>
                            </marquee>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 d-flex flex-column gap-4 p-0">
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Kurunthotti (Bala)</h2>
                            <p class="para_text">Anti-inflammatory herb that enhances strength, vitality, and supports joint health.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Vayalchulli Vithu (Kokilaksha)</h2>
                            <p class="para_text">Boosts metabolism, aids digestion, and improves respiratory and immune health.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Kanmadham (Shilajit)</h2>
                            <p class="para_text">A potent rejuvenator that boosts energy, endurance, and cognitive function.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-in" class="col-12 col-lg-4 d-flex flex-column px-5 justify-content-center align-items-center">
                    <img class="img-fluid" src="@/assets/images/runningImg.png" alt="premium">
                    <img class="img-fluid" src="@/assets/images/premium.jpg" alt="premium">
                </div>
                <div class="col-12 col-lg-4 d-flex flex-column gap-4 p-0">
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Amukkuram (Ashwagandha)</h2>
                            <p class="para_text">An adaptogen that combats stress, boosts stamina, and enhances overall physical and mental strength.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Naykuranaparippu (Athmaguptha)</h2>
                            <p class="para_text">Rich in protein, it boosts metabolism, aids digestion, and helps manage body weight.</p>
                        </div>
                    </div>
                    <div class="card w-100 d-flex align-items-center px-5 py-3 justify-content-center align-content-center text-center">
                        <img class="w-25 img-fluid bg-warning p-4 rounded-circle" src="@/assets/images/brain.webp" alt="">
                        <div class="pt-4">
                            <h2 class="sub_header">Sathavari (Shatavari)</h2>
                            <p class="para_text">A vital tonic that balances hormones, boosts immunity, and supports reproductive health.</p>
                        </div>
                    </div>
                </div>
                    <div class="col-12 col-lg-8 my-4 p-0 pe-lg-5"> <!-- Add padding-end (pe) for gap -->
                        <div class="card p-4">
                            <div class="row">
                                <div class="col-7 d-flex align-items-start justify-content-center flex-column">
                                    <h3 class="sub_header">Nilappanakizhangu (Musali)</h3>
                                    <p class="para_text">Increases stamina, supports digestion, and strengthens the immune system.</p>
                                    <!-- <span class="para_text">- Assured by CEO of company</span> -->
                                    <h3 class="sub_header text-dark">Njerinjil (Gokshura)</h3>
                                    <p class="para_text">Improves strength, stamina, kidney function, and reproductive health.</p>
                                    
                                </div>
                                <div class="col-5">
                                    <img src="@/assets/images/runningImg.png" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 my-4 ps-1 p-0"> <!-- Add padding-start (ps) for gap -->
                        <div class="card bg-dark p-4 d-flex text-white align-items-center justify-content-center">
                            
                            <!-- <h3 class="sub_header text-dark">Njerinjil (Gokshura)</h3> -->
                                    <p class="para_text text-center">The ingredients in <strong>Leela Shilajith</strong> are expertly blended in the perfect ratio to maximize their health benefits. This ensures optimal performance, enhanced immunity, and improved vitality with every dose.</p>
                                    <!-- <span class="para_text text-center">- Assured by CEO of company</span> -->
                                    <!-- <button class="btn grad_btn px-5 py-2 mt-4 text-white">Shop Now</button> -->
                        </div>
                    </div>
                </div>

            </div>
    </section>
</template>

<script>
export default {
    
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

.newsreadsection .card{
    height:350px;
    background: linear-gradient(90deg,#ffd0357a,#ffd0354d);
    border: none;
    border-radius: 18px;
    border: 2px dotted gold;
}
</style>