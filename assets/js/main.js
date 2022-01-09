$(".nav-link").on("click", function () {
    $("a").removeClass("active");
    $(this).addClass("active");
  });