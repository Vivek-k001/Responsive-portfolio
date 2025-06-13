// Logs the WhatsApp link to the console (can be removed in production)
console.log("https://wa.link/zcqqot");

// Grabs the contact button by its ID
var contact_btn = document.getElementById("contact-btn");

// Adds a click event to the contact button to open a WhatsApp link
contact_btn.addEventListener('click', function() {
    window.open("https://wa.link/zcqqot");
});

// Grabs the "About" button by its ID
var about_btn = document.getElementById("home-about-btn");

// Smooth scroll to the "education" section when the about button is clicked
about_btn.addEventListener('click', function() {
  var educationTop = document.getElementById("education").offsetTop; // Get the top offset of the education section
  var scrollDuration = 1000; // Duration of the scroll in milliseconds
  var scrollStart = performance.now(); // Start time of the scroll

  // Scroll step function
  function scrollStep() {
    var progress = (performance.now() - scrollStart) / scrollDuration;
    window.scrollTo(0, educationTop * progress); // Scrolls proportionally to the progress
    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue scrolling until complete
    }
  }

  scrollStep(); // Start the scrolling
});

// Instagram logo click: Opens Instagram profile
var insta = document.getElementById("inst-logo");
insta.addEventListener('click', function() {
    window.open("https://www.instagram.com/vivek2cold/");
});

// LinkedIn logo click: Opens LinkedIn profile
var linkedin = document.getElementById("linkedin-logo");
linkedin.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/vivek-k-b098a732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app");
});

// GitHub logo click: Opens GitHub profile
var github = document.getElementById("github-logo");
github.addEventListener('click', function() {
    window.open("https://github.com/Vivek-k001");
});

// X (Twitter) logo click: Opens X profile
var x = document.getElementById("x-logo");
x.addEventListener('click', function() {
    window.open("https://x.com/FrlPlayer?t=b5VtK2ilrUPrP3nl3nvoXQ&s=09");
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href*="#"]'); // Select all anchor links
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default jump
      const target = document.querySelector(link.getAttribute('href')); // Get the target element
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to target
      }
    });
  });
});

// Immediately hide the loading screen after the page fully loads
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.display = "none"; // Hide loading screen
  }

  // Create and append background overlay
  const backgroundOverlay = document.createElement('div');
  backgroundOverlay.className = 'background-overlay'; // Set class
  document.body.appendChild(backgroundOverlay); // Add to body

  // Remove the background overlay immediately
  backgroundOverlay.remove(); // Can delay for effect if desired
});


// TIMELINE SCROLL ANIMATION SECTION
const items = document.querySelectorAll('.timeline-item'); // Select all timeline items
const line = document.querySelector('.line'); // The vertical timeline line
let lineAnimated = false; // To ensure the animation happens only once

function handleScroll() {
  let windowBottom = window.innerHeight + window.scrollY; // Bottom position of viewport
  let timelineTop = document.querySelector('.timeline').offsetTop; // Top of timeline
  const lineHeight = document.querySelector('.timeline').offsetHeight; // Height of timeline

  // Animate the line to grow when the timeline is scrolled into view
  if (!lineAnimated && windowBottom > timelineTop + 100) {
    line.style.height = lineHeight + 'px';
    lineAnimated = true; // Prevent future animation
  }

  // Show each item with fade-in as they appear in viewport
  items.forEach(item => {
    const rect = item.getBoundingClientRect(); // Get position
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('visible'); // Make it visible
    }
  });
}

// Listen to scroll and load events to trigger animation
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// ALTERNATE VERSION (in case it's needed again for consistency)
document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline");
  const line = document.querySelector(".line");
  const items = document.querySelectorAll(".timeline-item");

  function revealTimeline() {
    const rect = timeline.getBoundingClientRect(); // Get timeline position
    if (rect.top <= window.innerHeight / 1.3) {
      line.classList.add("animate"); // Trigger animation

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= window.innerHeight - 100) {
          item.classList.add("visible"); // Reveal items
        }
      });
    }
  }

  window.addEventListener("scroll", revealTimeline);
  revealTimeline(); // Run on load too
});
