<template>
    <header style="z-index: 1;" :class="{ 'scrolled': isScrolled }" class="d-flex flex-column">
        <div :class="['header-2', isScrolled ? 'header-hidden' : '']" class="w-100 subheadsection d-flex justify-content-between text-white px-1 px-lg-4">
  <div class="col-8">
    <span class="para_text">Free shipping on orders over ₹500</span>
  </div>
  <div class="col-4 text-end">
    <span>
      <a style="text-decoration: none;" class="text-white para_text" href="tel:+918129497944">
        <i class="bi bi-telephone"></i> +91 7994869741
      </a>
    </span>
  </div>
</div>
        <nav class="navbar navbar-default p-0">
            <div class="container p-0">
                <div class="row py-2 py-lg-2 m-0 px-3 w-100" data-aos="fade-in" >
                    <div class="col-8 col-md-4 col-lg-3 d-flex justify-content-start p-0">
                        <RouterLink class="active text-decoration-none " :to="{ path: '/' }">
                            <img class="img-fluid rounded logo_img" src="@/assets/images/logo/Logo.png" alt="Logo">
                        </RouterLink>
                    </div>
                    <div class="col-4 col-md-8 col-lg-9 d-flex justify-content-end p-0 align-items-center">
                        <div class="d-block d-lg-none ml-auto">
                            <div class="hamburger">
                                <a style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; background: var(--template-color-0);" class="btn border" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i style="color:var(--template-color-2);" class="fs-4 bi bi-list"></i></a>
                            </div>
                        </div>
                        <div class="d-none d-lg-block">
                            <ul class="nav_list d-flex align-items-center justify-content-end gap-5 h-100 list-unstyled m-0 cursor">
                                <div @click="pageRoute('/')" :class="{headline_color_1 : $route.name === 'Landing', 'headline_color_3': $route.name !== 'Landing' }">Home</div>
                                <div @click="pageRoute('/about-leelashilajith')" :class="{headline_color_1 : $route.name === 'AboutUs', 'headline_color_3': $route.name !== 'AboutUs' }">About Leela</div>
                                <div @click="pageRoute('/contact-us')" :class="{headline_color_1 : $route.name === 'ContactUs', 'headline_color_3': $route.name !== 'ContactUs' }">Contact</div>
                                <div @click="pageRoute('/products')" :class="{headline_color_1 : $route.name === 'products', 'headline_color_3': $route.name !== 'products' }">Products</div>
                                <a href="tel: +917994869741" class="nav_list grad_btn btn text-white btn rounded px-4 py-2">Inquire Now</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
            <button type="button" ref="closeButton" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div style="scrollbar-width: none;" class="offcanvas-body p-0">
            <div class="userDetails text-decoration-none flex-row align-items-center">
                <div class="profile_avatar d-flex align-items-center justify-content-center">
                    <RouterLink class="active text-decoration-none " :to="{ path: '/' }">
                            <img class="img-fluid rounded logo_img" src="@/assets/images/logo/Logo.png" alt="Logo">
                        </RouterLink>
                </div>
                <div>
                    <ul class="pt-5 nav_list d-flex flex-column align-items-center justify-content-end gap-4 h-100 list-unstyled m-0 cursor">
                                <div class="btn px-5" @click="pageRoute('/')" :class="{grad_btn : $route.name === 'Landing', 's': $route.name !== 'Landing' }">Home</div>
                                <div class="btn px-5" @click="pageRoute('/about-leelashilajith')" :class="{grad_btn : $route.name === 'AboutUs', 'headline_color_3': $route.name !== 'AboutUs' }">About Leela</div>
                                <div class="btn px-5" @click="pageRoute('/contact-us')" :class="{grad_btn : $route.name === 'ContactUs', 'headline_color_3': $route.name !== 'ContactUs' }">Contact</div>
                                <div class="btn px-5" @click="pageRoute('/products')" :class="{grad_btn : $route.name === 'ProductPage', 'headline_color_3': $route.name !== 'ProductPage' }">Products</div>
                                <!-- <button class="nav_list btn rounded px-4 py-2">Inquire Now</button> -->
                            </ul>
                </div>
            </div>
        </div>
        <div class="mx-4">
            <!-- <LanguageToggle/> -->
        </div>
    </div>
</template>


<script>

export default {
    name: 'Header',
    data() {
        return {
            isScrolled: false,
        };
    },
    components: {
        
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY >= 60;
        },
        closeOffcanvas() {
      this.$refs.closeButton.click();
    },
        pageRoute(link) { // Close offcanvas before navigating
            this.closeOffcanvas();
      this.$router.push(link);
    },
    }
};
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    background: hsl(0, 0%, 94%); 
    transition: background 0.3s ease;
}
.scrolled {
     background: hsla(0, 0%, 0%, 0.823); 
}
.logo_img{
    width: 50px;
}
.scrolled .logo_img{
    width: 50px;
    transition: 0.3s ease-in;
    
}
.header-hidden {
    opacity: 0 !important;
    height: 0 !important;
}
.subheadsection{
    background: linear-gradient(to bottom right, hsl(358.72deg 79.66% 23.14%), hsl(358.26deg 85.19% 52.35%));
    transition: opacity 0.3s ease, height 0.3s ease;
    opacity: 1;
    height: 40px; /* Adjust as per your header's height */
    overflow: hidden;
    border-bottom: 2px dotted hsl(31, 100%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
