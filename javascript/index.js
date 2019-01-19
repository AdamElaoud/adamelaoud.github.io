window.onload = alert("Just a heads up! This website is under construction!");

// scroll Effect
$(document).ready(function(){
    // add smooth scrolling to all links
    $("a").on('click', function(event) {

        // check hash has value
        if (this.hash !== "") {
            // prevent default anchor behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // num specifies time to scroll (milliseconds)
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){

                // restore hash to URL when done scrolling
                window.location.hash = hash;
            });
        }
    });
});
