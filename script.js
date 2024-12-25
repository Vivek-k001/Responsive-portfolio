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



document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href*="#"]');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView();
    });
  });
});


const loadingScreen = document.getElementById('loading-screen');

window.addEventListener("load", function() {
setTimeout(function() {
document.getElementById("loading-screen").style.display = "none";
}, 1000); // Wait for 3 seconds before hiding the loading screen
});


// Create the background overlay element
const backgroundOverlay = document.createElement('div');
(div) = 'background-overlay';
document.body.appendChild(backgroundOverlay);

// Remove the background overlay after the animation is complete
setTimeout(() => {
    backgroundOverlay.remove();
}, 2000); // 3000ms = 3s

