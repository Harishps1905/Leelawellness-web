<template>
    <header style="z-index: 1;" :class="{ 'scrolled': isScrolled }" class="d-flex flex-column">
        <div :class="['header-2', isScrolled ? 'header-hidden' : '']" class="w-100 subheadsection">
            <!-- <span class="text-white text-center para_text">Free shipping on orders over AED 500 | Use the discount code "NEW30" to get 30% extra discount</span> -->
         
        </div>
        <nav class="navbar navbar-default p-0">
            <div class="container p-0">
                <div class="row py-3 w-100" data-aos="fade-in" >
                    <div class="col-8 col-md-4 col-lg-3 d-flex justify-content-start p-0">
                        <RouterLink class="active text-decoration-none " :to="{ path: '/' }">
                            <img class="img-fluid rounded logo_img" src="@/assets/images/logo/Logo.png" alt="Logo">
                        </RouterLink>
                    </div>
                    <div class="col-4 col-md-8 col-lg-9 d-flex justify-content-end p-0 align-items-center">
                        <div class="d-block d-md-none ml-auto">
                            <div class="hamburger">
                                <a style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; background: var(--template-color-0);" class="btn border" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i style="color:var(--template-color-2);" class="fs-4 bi bi-list"></i></a>
                            </div>
                        </div>
                        <div class="d-none d-lg-block">
                            <ul class="nav_list d-flex align-items-center justify-content-end gap-5 h-100 list-unstyled m-0 cursor">
                                <div class="" @click="pageRoute('/')" :class="{headline_color_1 : $route.name === 'Landing', 'headline_color_3': $route.name !== 'Landing' }">Home</div>
                                <div @click="pageRoute('/about-leelashilajith')" :class="{headline_color_1 : $route.name === 'AboutUs', 'headline_color_3': $route.name !== 'AboutUs' }">About Leela</div>
                                <div @click="pageRoute('/contact-us')" :class="{headline_color_1 : $route.name === 'ContactUs', 'headline_color_3': $route.name !== 'ContactUs' }">Contact</div>
                                <div @click="pageRoute('/products')" :class="{headline_color_1 : $route.name === 'products', 'headline_color_3': $route.name !== 'products' }">Products</div>
                                <a href="tel:+971045686600" class="nav_list grad_btn btn text-white btn rounded px-4 py-2">Inquire Now</a>
                                
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
                <div class="profile_avatar d-flex align-items-center justify-content-center">hello</div>
                <RouterLink class="active text-decoration-none headline_1" :to="{ path: '/products' }">products</RouterLink>
                <RouterLink class="active text-decoration-none headline_1" :to="{ path: '/contact-us' }">contact us</RouterLink>
                
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
        pageRoute(link) { // Close offcanvas before navigating
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
