<template>
  <footer class="py-5 mt-auto bg-light">
    <div class="container">
      <div class="row m-0">
        <!-- Information -->
        <div class="text-center text-lg-start col-12 col-md-4 text-dark mb-4 mb-md-0">
          <RouterLink class="active text-decoration-none " :to="{ path: '/' }">
            <img class="img-fluid rounded logo_img" width="50px" src="@/assets/images/logo/Logo.png" alt="Logo">
          </RouterLink>
          <p class="para_text mt-3 text-dark">Leela Shilajith is a premium Ayurvedic supplement that boosts performance, strengthens immunity, and supports healthy metabolism. Made with powerful herbs and natural ingredients, it's the ideal solution for enhancing vitality and energy, rooted in ancient Ayurvedic wisdom.</p>
         
        </div>
        <div class="text-center text-lg-start col-12 col-md-3 ps-4 text-dark mb-4 mb-md-0">
          <h5>Information</h5>
          <ul class="list-unstyled">
            <!-- <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Return Policy</a></li> -->
            <li><div class="" @click="pageRoute('/')">Home</div></li>
            <li><div @click="pageRoute('/about-leelashilajith')">About Leela</div></li>
            <li><div @click="pageRoute('/contact-us')">Contact</div></li>
            <li><div @click="pageRoute('/products')">Products</div></li>
                                
          </ul>
        </div>
        <!-- Contact Us -->
        <div class="col-12 col-md-3 text-dark text-center text-lg-start mb-4 mb-md-0">
          <h5>Contact Us</h5>
          <address>
            Bloom World<br>
            South Kovil Road, M.G.Road, <br>
            Thrissur, Kerala, India.<br>
            <a href="tel:00914872383834">0091 487 2383834</a><br>
            <a href="tel:00919072099959">0091 907 2099959</a><br>
            <a href="mailto:support@example.com">support@example.com</a><br>
            <a href="mailto:example@admin.com">example@admin.com</a>
          </address>
        </div>

        <!-- Find Us -->
        <div class="col-12 col-md-2 text-dark text-center text-lg-start">
          <h5>Find us</h5>
          <p>You can find us here.</p>
          <div>
            <a href="#" class="text-dark me-3"><i class="text-danger bi bi-instagram"></i></a>
            <a href="#" class="text-dark me-3"><i class="text-danger bi bi-facebook"></i></a>
            <a href="#" class="text-dark me-3"><i class="text-danger bi bi-twitter"></i></a>
            <a href="#" class="text-dark me-3"><i class="text-danger bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center text-center py-3 mt-4 border-top">
        <p class="mb-0 text-dark">&copy; SabujCha. All Rights Reserved</p>
        <div class="mt-3 mt-lg-0">
          <img class="img-fluid" src="../assets/images/payment.webp" alt="Payment methods">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {   
    pageRoute(link) { // Close offcanvas before navigating
      this.$router.push(link);
    },
  }
}
</script>

<style scoped>
li a {
  color: var(--template-color-5);
  text-decoration: none;
}

a {
  color: var(--template-color-5);
  text-decoration: none;
}
</style>
