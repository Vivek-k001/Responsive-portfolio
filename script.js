console.log("https://wa.link/zcqqot");

var contact_btn = document.getElementById("contact-btn");

contact_btn.addEventListener('click', function() {

    window.open("https://wa.link/zcqqot");
});


var about_btn = document.getElementById("home-about-btn");
about_btn.addEventListener('click', function() {
  var educationTop = document.getElementById("education").offsetTop;
  var scrollDuration = 1000;
  var scrollStart = performance.now();
  function scrollStep() {
    var progress = (performance.now() - scrollStart) / scrollDuration;
    window.scrollTo(0, educationTop * progress);
    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }
  scrollStep();
});
var insta = document.getElementById("inst-logo");
insta.addEventListener('click', function() {
    window.open("https://www.instagram.com/vivek2cold/")
});

var linkedin = document.getElementById("linkedin-logo");
linkedin.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/vivek-k-b098a732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
});

var github = document.getElementById("github-logo");
github.addEventListener('click', function() {
    window.open("https://github.com/Vivek-k001")
});

var x = document.getElementById("x-logo");
x.addEventListener('click', function() {
    window.open("https://x.com/FrlPlayer?t=b5VtK2ilrUPrP3nl3nvoXQ&s=09")
});