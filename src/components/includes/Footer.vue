<template>
  <!-- Footer Start -->
  <div
    class="container-fluid text-white-50 footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <router-link to="/" class="navbar-brand ms-4 ms-lg-0">
            <img
              src="/img/logo.png"
              alt="logo"
              class="rounded shadow img-fluid"
              width="70px"
            />
          </router-link>
          <p class="mt-2">
            ...And God said, “Let there be light,” and there was light.
          </p>
          <!-- <div class="d-flex pt-2">
            <a class="btn btn-square me-1" href=""
              ><i class="fab fa-twitter"></i>{{}}</a
            >
            <a class="btn btn-square me-1" href=""
              ><i class="fab fa-facebook-f"></i>{{}}</a
            >
            <a class="btn btn-square me-1" href=""
              ><i class="fab fa-youtube"></i>{{}}</a
            >
            <a class="btn btn-square me-0" href=""
              ><i class="fab fa-linkedin-in"></i>{{}}</a
            >
          </div> -->
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-light mb-4">Address</h5>
          <p>
            <i class="fa fa-map-marker-alt me-3"></i>Riverside Ballroom, Hyatt
            Regency, 1800 E Putnam Ave, Old Greenwich, CT 06870
          </p>
          <!-- <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p> -->
          <p><i class="fa fa-envelope me-3"></i>cityoflightsyaya@gmail.com</p>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-light mb-4 text-underline">Quick Links</h5>
          <router-link class="btn btn-link my-2" to="/about"
            >About Us</router-link
          >
          <router-link class="btn btn-link my-2" to="/contact"
            >Contact Us</router-link
          >
          <router-link class="btn btn-link my-2" to="/service"
            >Service</router-link
          >
        </div>
      </div>
    </div>
    <div class="container-fluid copyright">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-3 mb-md-0 small">
            &copy;
            <span>City of Lights, Redeemed Christian Church of God.</span>
            All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->

  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
    ><i class="bi bi-arrow-up"></i>{{}}</a
  >
</template>
