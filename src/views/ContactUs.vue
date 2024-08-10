<template>
    <section class="page-banner">
        <object>
            <img class="img-fluid w-100" style="height: 40vh;" src="../assets/images/mantas-sinkevicius-ary5wXnNR1I-unsplash.jpg" />
        </object>
    </section>
    <section class="bg-black pt-4 pb-5">
        <div class="container">
            <div class="row py-5">
                <div data-aos="fade-left" class="col-12 col-lg-5">
                    <div class="mt-3 mb-5">
                        <h1 class="text-uppercase text-white">get in touch</h1>
                        <p class="text-secondary"> we will respond to you within 24 hours or less</p>
                    </div>
                    <div>
                        <h3 class="text-uppercase about_headline_color">contact information</h3>
                        <ul style="list-style: none" class="p-0 d-flex flex-column gap-4 pt-4 text-secondary">
                            <li>
                                <i class="bi bi-phone"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a class="text-decoration-none text-secondary" href="tel:+971522280076">971-522280076</a>
                            </li>
                            <li>
                                <i class="bi bi-telephone-fill"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="text-decoration-none text-secondary" href="tel:+971045686600">045686600</a>
                            </li>
                            <li>
                                <i class="bi bi-telephone-fill"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="text-decoration-none text-secondary" href="tel:+971045762246">045762246</a>
                            </li>
                            <li>
                                <i class="bi bi-envelope-check"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="text-decoration-none text-secondary"
                                    href="mailto:info@9xproduction.com">info@9xproduction.com</a>
                            </li>
                            <li>
                                <a class="text-decoration-none text-secondary"
                                    href="https://maps.app.goo.gl/27Z3mRiWQonKLrfN6?g_st=com.google.maps.preview.copy"
                                    target="_blank"><i class="bi bi-geo-alt fs-5"></i>
                                    &nbsp;&nbsp;&nbsp;&nbsp;Warehouse No. A-28, Al Quoz 1, Dubai
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-right" class="col-12 col-lg-7 form_bg">
                    <div class="position-relative">
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
                                            <select
                                                class="form-control text-white bg-transparent border-0 border-bottom rounded-0"
                                                >
                                                <option class="text-white" value="" disabled>
                                                    Services
                                                </option>
                                                <option class="bg-black" >
                                                    sss
                                                </option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="row pt-5">
                                        <div class="col-6">
                                            <input type="email"  placeholder="Email" />

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
                                    <span class="mt-5">
                                        <button class="rounded py-2 px-5 contact_btn text-white">
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
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8776136606507!2d55.223420499999996!3d25.139828200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ba3a55d8489%3A0x2837e3c1f63c57d8!2s9X%20Production!5e0!3m2!1sen!2sae!4v1721392100033!5m2!1sen!2sae"
        width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
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
