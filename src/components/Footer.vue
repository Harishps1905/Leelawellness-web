<template>
  <footer class="py-5 mt-auto bg-light">
    <div class="container">
      <div class="row">
        <!-- Information -->
        <div class="text-center text-lg-start col-12 col-md-4 text-dark mb-4 mb-md-0">
          <h5>Information</h5>
          <ul class="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Return Policy</a></li>
          </ul>
        </div>

        <!-- Contact Us -->
        <div class="col-12 col-md-4 text-dark text-center text-lg-start mb-4 mb-md-0">
          <h5>Contact Us</h5>
          <address>
            Your current address goes to here, 120 example, country.<br>
            <a href="tel:+00825425425487">(008) 254 254 254 25487</a><br>
            <a href="tel:+0083585876576985">(008) 358 587 657 6985</a><br>
            <a href="mailto:support@example.com">support@example.com</a><br>
            <a href="mailto:example@admin.com">example@admin.com</a>
          </address>
        </div>

        <!-- Find Us -->
        <div class="col-12 col-md-4 text-dark text-center text-lg-start">
          <h5>Find us</h5>
          <p>Your description goes here. You can find us here.</p>
          <div>
            <a href="#" class="text-dark me-3"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-dark me-3"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-dark me-3"><i class="fab fa-google"></i></a>
            <a href="#" class="text-dark me-3"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="text-dark me-3"><i class="fab fa-pinterest"></i></a>
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
  name: 'Footer'
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
