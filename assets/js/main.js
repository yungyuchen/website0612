!(function ($) {
  "use strict";

  const productService = document.querySelector(".product_service");
  const productServiceSubMenu = document.querySelector(
    ".product_service_sub_menu"
  );

  productService.addEventListener("click", toggleMenu);

  function toggleMenu() {
    productServiceSubMenu.classList.toggle("show");
    productServiceSubMenu.classList.toggle("hide");
  }

  const devCenter = document.querySelector(".dev_center");
  const devCenterSubMenu = document.querySelector(".dev_center_sub_menu");
  devCenter.addEventListener("click", toggleDevCenterMenu);

  function toggleDevCenterMenu() {
    devCenterSubMenu.classList.toggle("show");
    devCenterSubMenu.classList.toggle("hide");
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // isotope and filter
  $(window).on('load', function () {
    // var qaIsotope = $(".qa-container").isotope({
    //   itemSelector: ".qa-item",
    // });

    $("#qa-filters li").on("click", function () {
      $("#qa-filters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      // qaIsotope.isotope({
      //   filter: $(this).data("filter"),
      // });

      var posts = $(".qa-item");
      var customType = $(this).data("filter");
      posts.hide();
      $(customType).show();
    });
    
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });

})(jQuery);