<template>
    <div class="height10vh"></div>
    <section data-aos="fade-down" class="page-banner positon-relative">
            <img src="@/assets/images/contact.jpg" style="object-fit: cover; object-position: center;" width="100%" height="500px" />
            <span style="top: 40%; left: 5%; z-index: 999;" class="position-absolute text-white main_headline">Contact Us</span>
    </section>
    <section class="bg-black pt-4 pb-5">
        <div class="container">
            <div class="row m-0 py-5">
                <div data-aos="fade-left" class="col-12 col-lg-5">
                    <div class="mt-3 mb-5">
                        <h1 class="text-uppercase text-white">get in touch</h1>
                        <p class="text-secondary"> we will respond to you within 24 hours or less</p>
                    </div>
                    <div>
                        <h3 class="text-uppercase about_headline_color">contact information</h3>
                        <ul style="list-style: none" class="p-0 d-flex flex-column gap-4 pt-4 text-secondary">
                            <li>
                                <i class="bi bi-phone"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="text-decoration-none text-secondary"
                                    href="tel:0091 487 2383834">0091 487 2383834</a>
                            </li>
                            <li>
                                <i class="bi bi-telephone-fill"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="text-decoration-none text-secondary" href="tel:0091 907 2099959">0091 907 2099959</a>
                            </li>
                            <li>
                                <i class="bi bi-whatsapp"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="text-decoration-none text-secondary" href="tel:0091 487 2383834">0091 487 2383834</a>
                            </li>
                            <li>
                                <i class="bi bi-envelope-check"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="text-decoration-none text-secondary"
                                    href="mailto:info@9xproduction.com">info@leelashilajith.com</a>
                            </li>
                            <li>
                                <a class="text-decoration-none text-secondary"
                                    href="https://maps.app.goo.gl/27Z3mRiWQonKLrfN6?g_st=com.google.maps.preview.copy"
                                    target="_blank"><i class="bi bi-geo-alt fs-5"></i>
                                    &nbsp;&nbsp;&nbsp;&nbsp;leelashialajith trisurr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-right" class="col-12 col-lg-7 form_bg">
                    <div class="">
                        <div>
                            <form @submit.prevent="quickContactForm"
                                class="w-100 d-flex flex-column align-items-center justify-content-center">
                                <div class="py-4">
                                    <h3 class="text-uppercase about_headline_color"> send us a message</h3>
                                </div>
                                <div class="row align-items-center sendus_message w-100 px-1 px-md-4 px-lg-5">
                                    <div class="row">
                                        <div class="col-6">
                                            <input type="text" placeholder="name" />
                                        </div>
                                        <div class="col-6">
                                            <select class="form-control text-white bg-transparent border-0 border-bottom rounded-0" >
                                                <option class="text-white" value="" disabled>
                                                    Services
                                                </option>
                                                <option class="bg-black">                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row pt-5">
                                        <div class="col-6">
                                            <input type="email" placeholder="Email" />
                                             

                                        </div>
                                        <div class="col-6">
                                            <input type="tel"
                                                placeholder="Contact Number" />
                                           

                                        </div>
                                    </div>
                                    <div class="col-12 pt-5">
                                        <textarea  
                                            placeholder="Message (Optional)"></textarea>
                                    </div>
                                    <span class="mt-4">
                                        <button   class="rounded py-2 px-5 contact_btn text-white">
                                            Submit
                                        </button>
                                       
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.710160234827!2d76.2032739721919!3d10.523479340869802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee440462505b%3A0xb43cb61adb25ff4b!2sMG%20Road%20%26%20S%20Amman%20Kovil%20Ln%2C%20Kottappuram%2C%20Thrissur%2C%20Kerala%20680667%2C%20India!5e0!3m2!1sen!2sae!4v1726347462783!5m2!1sen!2sae" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<script>


export default {


};
</script>

<style>
.contactHeader {
    font-size: clamp(28px, 5vw, 80px);
}

.sendus_message input,
textarea {
    width: 100%;
    background: transparent;
    border-bottom: 2px solid #999 !important;
    border-left: none;
    border-right: none;
    border-top: none;
    padding-bottom: 12px;
    color: #fff;
}

.contact_btn {
    border: 3px solid rgba(255, 255, 255, 0.722);
    background: var(--theme-color-green);
}
</style>
