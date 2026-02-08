$(function () {
  $(".header-menu").click(function () {
    $(".nav-mob").toggleClass("nav-mob-active");
    $("body").toggleClass("overflow-hidden");
    $(".mask").toggle();
  });
  const currentUrl = window.location.pathname;
  if (currentUrl === "/") {
    $(".nav-item")[0].classList.add("active");
    $(".nav-item-mob")[0].classList.add("nav-item-mob-active");
  }
  $(".nav-item").each(function () {
    const href = $(this).attr("href");
    if (currentUrl.includes(href)) {
      $(this).addClass("active");
    }
  });
  $(".nav-item-mob").each(function () {
    const href = $(this).attr("href");
    if (currentUrl.includes(href)) {
      $(this).addClass("nav-item-mob-active");
    }
  });
  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 10) {
      $("header").css(
        "box-shadow",
        "12px -6px 22px #323d54, 10px -3px 0px #323d54"
      );
    } else {
      $("header").css("box-shadow", "none");
    }
  });
});
