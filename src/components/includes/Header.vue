<template>
  <!-- Spinner Start -->
  <div
    id="spinner"
    class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div class="spinner-grow text-primary" role="status"></div>
  </div>
  <!-- Spinner End -->

  <!-- Navbar Start -->
  <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
    <div
      class="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex"
    >
      <div class="col-lg-6 px-5 text-start">
        <small
          ><i class="fa fa-map-marker-alt me-2"></i>123 Street, New York,
          USA</small
        >
        <small class="ms-4"
          ><i class="fa fa-envelope me-2"></i>info@example.com</small
        >
      </div>
      <div class="col-lg-6 px-5 text-end">
        <small>Follow us:</small>
        <router-link class="text-white-50 ms-3" to=""
          ><i class="fab fa-facebook-f"></i>{{
        }}</router-link>
        <router-link class="text-white-50 ms-3" to=""
          ><i class="fab fa-twitter"></i>{{
        }}</router-link>
        <router-link class="text-white-50 ms-3" to=""
          ><i class="fab fa-linkedin-in"></i>{{
        }}</router-link>
        <router-link class="text-white-50 ms-3" to=""
          ><i class="fab fa-instagram"></i>{{
        }}</router-link>
      </div>
    </div>

    <nav
      class="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <router-link to="/" class="navbar-brand ms-4 ms-lg-0">
        <img src="/img/logo.png" alt="logo" class="rounded shadow img-fluid" width="70px"/>
      </router-link>
      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span> {{}}
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav m-auto p-4 p-lg-0">
          <router-link to="/" class="nav-item nav-link active"
            >Home</router-link
          >
          <router-link to="/about" class="nav-item nav-link">About</router-link>
          <router-link to="/service" class="nav-item nav-link"
            >Service</router-link
          >
          <!-- <div class="nav-item dropdown">
            <router-link
              to="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Pages</router-link
            >
            <div class="dropdown-menu m-0">
              <router-link to="service.html" class="dropdown-item"
                >Service</router-link
              >
              <router-link to="donate.html" class="dropdown-item"
                >Donate</router-link
              >
              <router-link to="team.html" class="dropdown-item"
                >Our Team</router-link
              >
              <router-link to="testimonial.html" class="dropdown-item"
                >Testimonial</router-link
              >
              <router-link to="404.html" class="dropdown-item"
                >404 Page</router-link
              >
            </div>
          </div> -->
          <!-- <router-link to="/contact" class="nav-item nav-link"
            >Contact</router-link
          > -->
        </div>
        <div class="d-none d-lg-flex ms-2">
          <router-link class="btn btn-outline-primary py-2 px-3" to="/contact">
           Contact 
            <div
              class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2"
            >
              <i class="fa fa-arrow-right"></i>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
  <!-- Navbar End -->
</template>

<script setup>
import $ from "jquery";

// (function ($) {
//   "use strict";

// Spinner
var spinner = function () {
  setTimeout(function () {
    if ($("#spinner").length > 0) {
      $("#spinner").removeClass("show");
    }
  }, 1);
};
spinner();

// Initiate the wowjs
new WOW().init();

// Fixed Navbar
$(window).scroll(function () {
  if ($(window).width() < 992) {
    if ($(this).scrollTop() > 45) {
      $(".fixed-top").addClass("bg-dark shadow");
    } else {
      $(".fixed-top").removeClass("bg-dark shadow");
    }
  } else {
    if ($(this).scrollTop() > 45) {
      $(".fixed-top").addClass("bg-dark shadow").css("top", -45);
    } else {
      $(".fixed-top").removeClass("bg-dark shadow").css("top", 0);
    }
  }
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});

// })($);
</script>
