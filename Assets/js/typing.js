if ($(".text-slider").length == 1) {

  var typed_strings =
    $(".text-slider-items").text();

  var typed = new Typed(".text-slider", {
    strings: ["<span class='wave'>👋</span> Hi, ^600 I'm Kristel!"],
    typeSpeed: 55,
    loop: false,
    backDelay: 900,
    backSpeed: 30,

  });
}
