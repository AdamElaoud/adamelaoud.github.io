// sticky navbar
window.onscroll = function() {barUpdate();};
let navbar = document.getElementById("sticky-navbar");
let navPosition = navbar.offsetTop;
let logo = document.getElementById("logo");
let aboutMe = document.getElementById("about-me");

function barUpdate() {
    // stuck class only set when > due to immediate shift when scrolling to about me section
    if (window.pageYOffset > navPosition) {
        navbar.classList.add("stuck");
        aboutMe.style.marginTop = navbar.offsetHeight + "px";
    } else {
        navbar.classList.remove("stuck");
        aboutMe.style.marginTop = "0px";
    }

    if (window.pageYOffset >= navPosition - 150) {
        logo.classList.add("navbar-logo");
    } else {
        logo.classList.remove("navbar-logo");
    }
}

// MenuSpy
let ms = new MenuSpy(navbar, {
    // menu selector
    menuItemSelector: 'a[href^="#"]',
    // CSS class for active item
    activeClass: 'nav-highlight',
    // amount of space between your menu and the next section to be activated.
    threshold: navbar.offsetHeight,
    // enable or disable browser's hash location change.
    enableLocationHash: true,
    // timeout to apply browser's hash location.
    hashTimeout: 0,
    // called every time a new menu item activates.
    callback: null
});

// scroll Effect
$(document).ready(function(){
    // add smooth scrolling to all links
    $("a").on('click', function(event) {

        // check hash has value
        if (this.hash !== "") {
            // prevent default anchor behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // num specifies time to scroll (milliseconds)
            $('html, body').animate({
                // add distance to account for navbar and 1 additional pixel for slight overlap
                scrollTop: $(hash).offset().top - navbar.offsetHeight + 1
            }, 1500, function(){

                // restore hash to URL when done scrolling
                window.location.hash = hash;
            });
        }
    });
});

// // play videos upon scrolling to them using VisSense
let videos = document.querySelectorAll(".vid-white, .vid-black");

videos.forEach(function(vid, index) {
    VisSense.VisMon.Builder(VisSense(vid, {
        fullyvisible: 0.75
    }))
    .on('fullyvisible', function() {
        vid.play();
    })
    .on('hidden', function() {
        vid.pause();
    })
    .build()
    .start();
});
