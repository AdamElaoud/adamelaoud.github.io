// pop-up
window.onload = setTimeout(function() {alert("Just a heads up! The main images will be uploaded by mid February and the mobile/tablet versions of this site are under construction.");}, 1000);

// sticky navbar
window.onscroll = function() {stickyBar()};
let navbar = document.getElementById("sticky-navbar");
let position = navbar.offsetTop;

function stickyBar() {
    if (window.pageYOffset > position) {
        navbar.classList.add("stuck")
    } else {
        navbar.classList.remove("stuck");
    }
}

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
            console.log("position: " + $(hash).offset().top + ", navbar height: " + navbar.offsetHeight);

            // num specifies time to scroll (milliseconds)
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navbar.offsetHeight
            }, 1200, function(){

                // restore hash to URL when done scrolling
                // window.location.hash = hash;
            });
        }
    });
});
