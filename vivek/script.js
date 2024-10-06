console.log("https://wa.link/zcqqot");

var contact_btn = document.getElementById("contact-btn");

contact_btn.addEventListener('click', function() {

    window.open("https://wa.link/zcqqot");
});


var about_btn = document.getElementById("home-about-btn");

about_btn.addEventListener('click', function() {
 
    window.scrollTo({
        top:document.getElementById("about").offsetTop,
        behavior:'smooth'
    });
});


var insta = document.getElementById("inst-logo");
insta.addEventListener('click', function() {
    window.open("https://www.instagram.com/vivek2cold/")
});

var github = document.getElementById("github-logo");
github.addEventListener('click', function() {
    window.open("https://github.com/Vivek-k001")
});

var x = document.getElementById("x-logo");
x.addEventListener('click', function() {
    window.open("https://x.com/FrlPlayer?t=b5VtK2ilrUPrP3nl3nvoXQ&s=09")
});