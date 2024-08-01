<template>
    <header :class="{ 'scrolled': isScrolled }" class="fixed-top">
        <nav class="navbar navbar-default p-0">
            <div class="container">
                <div class="row py-2 w-100">
                    <div class="col-8 col-md-4 col-lg-3 d-flex justify-content-start p-0">
                        <div class="">
                            <RouterLink class="active text-decoration-none headline_1" :to="{ path: '/' }">logo</RouterLink>
                        </div>
                    </div>
                    <div class="col-4 col-md-8 col-lg-9 d-flex justify-content-end p-0">
                        <div class="ml-auto">
                            <div class="hamburger">
                                <a style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; background: var(--template-color-0);" class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i style="color:var(--template-color-2);"  class="fs-4 bi bi-list"></i></a>
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
            <button type="button" ref="closeButton" class="btn-close" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div style="scrollbar-width: none;" class="offcanvas-body p-0">
            <div class="userDetails text-decoration-none flex-row align-items-center">
                <div class="profile_avatar d-flex align-items-center justify-content-center">hello</div>
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
    components: {

    },

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
            if (window.scrollY >= 60) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        },

    }
}
</script>

<style scoped></style>
