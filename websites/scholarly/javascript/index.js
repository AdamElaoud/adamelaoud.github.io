// wait for load
$(document).ready(function() {
	// load article content
	function loadArticle() {
		// unimplemented
	}

	// initiate hover dropdown menu plugin -------------------------------------
	$.fn.bootstrapDropdownHover({
	  // no specifications needed
	});

	// animating sticky navbar -------------------------------------------------
	window.onscroll = function() {navScroll();};
	let navbar = document.querySelector('.navbar');
	let logo = document.getElementById("logo");
	let featured = document.getElementById("featured-articles"); // unimplemented

	function navScroll() {
	    // stuck class only set when > due to immediate shift when scrolling to featured section
	    if (window.pageYOffset > 0) {
	        navbar.classList.add("shrunk");
			logo.src = "visual/images/logo-library-light.png";
	        // featured.style.marginTop = navbar.offsetHeight + "px";
	    } else {
	        navbar.classList.remove("shrunk");
			logo.src = "visual/images/logo-library.png";
	        // featured.style.marginTop = "0px";
	    }
	}

	// sidebar setup -----------------------------------------------------------
	$("#suggested").click(function() {
		$(this).css("font-weight", "bold");
		$("#suggested-underline").css("display", "inline-block");
		$("#popular").css("font-weight", "normal");
		$("#popular-underline").css("display", "none");
	})

	$("#popular").click(function() {
		$(this).css("font-weight", "bold");
		$("#popular-underline").css("display", "inline-block");
		$("#suggested").css("font-weight", "normal");
		$("#suggested-underline").css("display", "none");
	})

	// sidebar category update
	function sidebarUpdate() {
		// unimplemented
	}

	// bookmark updates ---------------------------------------------------------
	$(".fa-bookmark").on({
		click: function() {
			if ($(this).hasClass("far"))
				$(this).removeClass("far").addClass("fas").css("color", "#FAC72B");
			else
				$(this).removeClass("fas").addClass("far").css("color", "#FFFFFF");
		}
	});

	// user survey thumbs updates ----------------------------------------------
	// $(".fa-thumbs-up").on({
	// 	mouseenter: function() {
	// 		$(this).removeClass("far").addClass("fas");
	// 	},
	// 	mouseleave: function() {
	// 		$(this).removeClass("fas").addClass("far");
	// 	}
	// });
	//
	// $(".fa-thumbs-down").on({
	// 	mouseenter: function() {
	// 		$(this).removeClass("far").addClass("fas");
	// 	},
	// 	mouseleave: function() {
	// 		$(this).removeClass("fas").addClass("far");
	// 	}
	// });

	// jquery comments plugin---------------------------------------------------
	$("#commenting").comments({
	    profilePictureURL: "visual/images/account-icon-updated.png",
		highlightColor: "#2D2D2D",
	    getComments: function(success, error) {
	        var commentsArray = [];
	        success(commentsArray);
	    }
	});

	// comment count
	// $(".send.save.highlight-background").click(function() {
	// 	$("#commenting").comments();
	// });

	function updateCount(count, array) {
		if (array.length > count) {
			alert("count updated to: " + count);
			$("#comment-count").clear().append(count);
		}

		return array.length;
	}

});
