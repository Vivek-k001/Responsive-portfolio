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




// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href*="#"]');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Immediately hide the loading screen after the page fully loads
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }

  // Create and append background overlay
  const backgroundOverlay = document.createElement('div');
  backgroundOverlay.className = 'background-overlay'; // corrected assignment
  document.body.appendChild(backgroundOverlay);

  // Remove the background overlay immediately
  backgroundOverlay.remove(); // or delay a bit if you want animation
});













const items = document.querySelectorAll('.timeline-item');
const line = document.querySelector('.line');
let lineAnimated = false;

function handleScroll() {
  let windowBottom = window.innerHeight + window.scrollY;
  let timelineTop = document.querySelector('.timeline').offsetTop;
  const lineHeight = document.querySelector('.timeline').offsetHeight;

  // Animate the line grow only once (when user scrolls to the timeline container)
  if (!lineAnimated && windowBottom > timelineTop + 100) {
    line.style.height = lineHeight + 'px';
    lineAnimated = true; // Prevents line from growing again after initial animation
  }

  // Show items with scroll
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);





document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline");
  const line = document.querySelector(".line");
  const items = document.querySelectorAll(".timeline-item");

  function revealTimeline() {
    const rect = timeline.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 1.3) {
      line.classList.add("animate");

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= window.innerHeight - 100) {
          item.classList.add("visible");
        }
      });
    }
  }

  window.addEventListener("scroll", revealTimeline);
  revealTimeline(); // Run once in case already in view
});
