$(document).ready( () => {
    // programmatically set year on copywrite ------------------------------------------------------------
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("date").innerHTML = year

    // sticky navbar -------------------------------------------------------------------------------------
    let navbar = document.querySelector('.navbar');
    let logo = document.getElementById("logo");
    
    // call on scroll
    window.onscroll = () => { navScroll(navbar, logo); };

    // category hover ------------------------------------------------------------------------------------
    $("#website-category").hover(
        () => {
            $("#website-category .category-title").css("color", "#7E57FF");
            $("#website-category .bar").css("background-color", "#7E57FF");
            $("#globe").attr("src", "images/icons/globe.png");
        },
        () => {
            if (type !== "website") {
                $("#website-category .category-title").css("color", "#000000");
                $("#website-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
                $("#globe").attr("src", "images/icons/globe-gray.png");
            }
        }
    );

    $("#application-category").hover(
        () => {
            $("#application-category .category-title").css("color", "#7E57FF");
            $("#application-category .bar").css("background-color", "#7E57FF");
            $("#laptop").attr("src", "images/icons/laptop.png");
        },
        () => {
            if (type !== "application") {
                $("#application-category .category-title").css("color", "#000000");
                $("#application-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
                $("#laptop").attr("src", "images/icons/laptop-gray.png");
            }
        }
    );

    $("#game-category").hover(
        () => {
            $("#game-category .category-title").css("color", "#7E57FF");
            $("#game-category .bar").css("background-color", "#7E57FF");
            $("#gamepad").attr("src", "images/icons/gamepad.png");
        },
        () => {
            if (type !== "game") {
                $("#game-category .category-title").css("color", "#000000");
                $("#game-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
                $("#gamepad").attr("src", "images/icons/gamepad-gray.png");
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
            $("#globe").attr("src", "images/icons/globe-gray.png");
            break;
        case "game":
            $("#game-category .category-title").css("color", "#000000");
            $("#game-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
            $(".game").css("display", "none");
            $("#gamepad").attr("src", "images/icons/gamepad-gray.png");
            break;
        case "application":
            $("#application-category .category-title").css("color", "#000000");
            $("#application-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
            $(".application").css("display", "none");
            $("#laptop").attr("src", "images/icons/laptop-gray.png");
            break;
    }

    // enable selected category
    switch (ele.id) {
        case "website-category":
            type = "website";
            $("#website-category .category-title").css("color", "#7E57FF");
            $("#website-category .bar").css("background-color", "#7E57FF");
            $(".website").css("display", "flex");
            $("#globe").attr("src", "images/icons/globe.png");
            break;
        case "game-category":
            type = "game";
            $("#game-category .category-title").css("color", "#7E57FF");
            $("#game-category .bar").css("background-color", "#7E57FF");
            $(".game").css("display", "flex");
            $("#gamepad").attr("src", "images/icons/gamepad.png");
            break;
        case "application-category":
            type = "application";
            $("#application-category .category-title").css("color", "#7E57FF");
            $("#application-category .bar").css("background-color", "#7E57FF");
            $(".application").css("display", "flex");
            $("#laptop").attr("src", "images/icons/laptop.png");
            break;
    }
}

// navScroll onClick function ----------------------------------------------------------------------------
function navScroll(navbar, logo) {
    if (window.pageYOffset > 0) {
        navbar.classList.add("stuck");
        navbar.classList.add("white-nav");
        logo.src = "images/logos/logo-transparent-purple.png";
        $("#nav-icons").css("display", "flex");

    } else {
        navbar.classList.remove("stuck");
        navbar.classList.remove("white-nav");
        logo.src = "images/logos/logo-transparent-white.png";
        $("#nav-icons").css("display", "none");
    }
}

// enter onClick function --------------------------------------------------------------------------------
function enter() {
    // load website
    let siteContent = document.getElementById("site-content");
    $("#site-content").css("display", "block");
    siteContent.classList.add("fade-in");

    // fade out cover
    let cover = document.getElementById("cover");
    cover.classList.add("fade-out");

    // remove cover
    setTimeout( () => { $("#cover").css("display", "none"); }, 2000);
}
