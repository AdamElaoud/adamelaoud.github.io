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
            break;
        case "game":
            $("#game-category .category-title").css("color", "#000000");
            $("#game-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
            $(".game").css("display", "none");
            break;
        case "application":
            $("#application-category .category-title").css("color", "#000000");
            $("#application-category .bar").css("background-color", "rgb(145,153,160, 0.5)");
            $(".application").css("display", "none");
            break;
    }
    
    // enable selected category
    switch (ele.id) {
        case "website-category":
            type = "website";
            $("#website-category .category-title").css("color", "#7E57FF");
            $("#website-category .bar").css("background-color", "#7E57FF");
            $(".website").css("display", "flex");
            break;
        case "game-category":
            type = "game";
            $("#game-category .category-title").css("color", "#7E57FF");
            $("#game-category .bar").css("background-color", "#7E57FF");
            $(".game").css("display", "flex");
            break;
        case "application-category":
            type = "application";
            $("#application-category .category-title").css("color", "#7E57FF");
            $("#application-category .bar").css("background-color", "#7E57FF");
            $(".application").css("display", "flex");
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
