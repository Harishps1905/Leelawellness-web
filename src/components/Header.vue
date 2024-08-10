<template>
    <header data-aos="fade-in" :class="{ 'scrolled': isScrolled }" class="d-flex flex-column">
        <div :class="['header-2', isScrolled ? 'header-hidden' : '']" class="w-100 bg-black">
            <span class="text-white">hello</span>
        </div>
        <nav class="navbar navbar-default p-0">
            <div class="container">
                <div class="row py-2 w-100">
                    <div class="col-8 col-md-4 col-lg-3 d-flex justify-content-start p-0">
                        <RouterLink class="active text-decoration-none headline_1" :to="{ path: '/' }">
                            <img style="width: 50px;" class="img-fluid rounded" src="@/assets/images/logo/Logo.png" alt="Logo">
                        </RouterLink>
                    </div>
                    <div class="col-4 col-md-8 col-lg-9 d-flex justify-content-end p-0">
                        <div class="ml-auto">
                            <div class="hamburger">
                                <a style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; background: var(--template-color-0);" class="btn border" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i style="color:var(--template-color-2);" class="fs-4 bi bi-list"></i></a>
                            </div>
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
    }
};
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    transition: background 0.3s ease;
}
.scrolled {
    /* background: rgb(255, 223, 223); */
}

.header-2 {
    transition: opacity 0.3s ease, height 0.3s ease;
    opacity: 1;
    height: 30px; /* Adjust as per your header's height */
    overflow: hidden;
}

.header-hidden {
    opacity: 0;
    height: 0;
}
</style>
