$(document).ready( () => {
    // programmatically set year on copywrite ------------------------------------------------------------
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("date").innerHTML = year

    // sticky navbar -------------------------------------------------------------------------------------   
    window.onscroll = () => { navScroll(); };

    // category hover ------------------------------------------------------------------------------------
    $("#website-category").hover(
        () => {
            $("#website-category .category-title").css("color", "#7E57FF");
            $("#website-category .bar").css("background-color", "#7E57FF");
            $("#globe-colored").css("opacity", "1");
        },
        () => {
            if (type !== "website") {
                $("#website-category .category-title").css("color", "#000000");
                $("#website-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
                $("#globe-colored").css("opacity", "0");
            }
        }
    );

    $("#application-category").hover(
        () => {
            $("#application-category .category-title").css("color", "#7E57FF");
            $("#application-category .bar").css("background-color", "#7E57FF");
            $("#laptop-colored").css("opacity", "1");
        },
        () => {
            if (type !== "application") {
                $("#application-category .category-title").css("color", "#000000");
                $("#application-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
                $("#laptop-colored").css("opacity", "0");
            }
        }
    );

    $("#game-category").hover(
        () => {
            $("#game-category .category-title").css("color", "#7E57FF");
            $("#game-category .bar").css("background-color", "#7E57FF");
            $("#gamepad-colored").css("opacity", "1");
        },
        () => {
            if (type !== "game") {
                $("#game-category .category-title").css("color", "#000000");
                $("#game-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
                $("#gamepad-colored").css("opacity", "0");
            }
        }
    );
});

// category selection onClick function -------------------------------------------------------------------

// set initial category as application
let type = "application";

function typeChange(ele) {
    // disable current category
    switch (type) {
        case "website":
            $("#website-category .category-title").css("color", "#000000");
            $("#website-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
            $(".website").css("display", "none");
            $("#globe-colored").css("opacity", "0");
            break;
        case "game":
            $("#game-category .category-title").css("color", "#000000");
            $("#game-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
            $(".game").css("display", "none");
            $("#gamepad-colored").css("opacity", "0");
            break;
        case "application":
            $("#application-category .category-title").css("color", "#000000");
            $("#application-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
            $(".application").css("display", "none");
            $("#laptop-colored").css("opacity", "0");
            break;
    }

    // enable selected category
    switch (ele.id) {
        case "website-category":
            type = "website";
            $("#website-category .category-title").css("color", "#7E57FF");
            $("#website-category .bar").css("background-color", "#7E57FF");
            $(".website").css("display", "flex");
            $("#globe-colored").css("opacity", "1");
            break;
        case "game-category":
            type = "game";
            $("#game-category .category-title").css("color", "#7E57FF");
            $("#game-category .bar").css("background-color", "#7E57FF");
            $(".game").css("display", "flex");
            $("#gamepad-colored").css("opacity", "1");
            break;
        case "application-category":
            type = "application";
            $("#application-category .category-title").css("color", "#7E57FF");
            $("#application-category .bar").css("background-color", "#7E57FF");
            $(".application").css("display", "flex");
            $("#laptop-colored").css("opacity", "1");
            break;
    }
}

// navScroll onClick function ----------------------------------------------------------------------------
function navScroll() {
    if (window.pageYOffset > 0) {
        $(".navbar").addClass("stuck");
        $(".vert-bar").addClass("vert-bar-purple");
        $("#logo").attr("src", "images/logos/logo-transparent-purple.png");
        $("#nav-icons").css("display", "flex");

    } else {
        $(".navbar").removeClass("stuck");
        $(".vert-bar").removeClass("vert-bar-purple");
        $("#logo").attr("src", "images/logos/logo-transparent-white.png");
        $("#nav-icons").css("display", "none");
    }
}

// enter onClick function --------------------------------------------------------------------------------
function enter() {
    // load website
    $("#site-content").css("display", "block");
    $("#site-content").addClass("fade-in");

    // fade out cover
    $("#cover").addClass("fade-out");

    // remove cover after waiting for fade out to complete
    setTimeout( () => { $("#cover").css("display", "none"); }, 2000);

    // init Animate On Scroll
    AOS.init();
}
