$(function(){




// -------------------------------------------------------------------- Init

	// Kitchen layout slider
	$('.kitchen-slider').bxSlider({
		autoControls: false,
		controls: true,
		mode: 'fade',
		pagerCustom: '.kitchen-slider__navigation__list',
		nextSelector: '.kitchen-slider__controls__arrows--next',
		prevSelector: '.kitchen-slider__controls__arrows--prev',
	});



	// Water test slider
	$('.water-test__slider').bxSlider({
		autoControls: false,
		controls: false,
		mode: 'fade',
		pagerCustom: '.water-test-slider__navigation__list'
	});

	// Testimonial slider
	$('.testimonial-slider').bxSlider({
		autoControls: false,
		controls: false,
		pagerCustom: '.testi-people',
		// mode: 'fade',
	});



// -------------------------------------------------------------------- Navigation

	// $.scrollIt({
	//   upKey: 38,             // key code to navigate to the next section
	//   downKey: 40,           // key code to navigate to the previous section
	//   easing: 'linear',      // the easing function for animation
	//   scrollTime: 600,       // how long (in ms) the animation takes
	//   activeClass: 'active', // class given to the active nav element
	//   onPageChange: null,    // function(pageIndex) that is called when page is changed
	//   // topOffset: 55           // offste (in px) for fixed top navigation
	// });


var mainMenuProductNav = $('.navigation__product-nav');


	// main menu show product menu
	$('.navigation').on('click', function(){
		mainMenuProductNav.toggleClass("show-product-nav");
		// Stop scrolling the mouse scroll on fullpage
	    $.fn.fullpage.setAllowScrolling(false);
	    //disabling all keyboard scrolling
		$.fn.fullpage.setKeyboardScrolling(false);
		$('body').addClass("no-touch");
	});

	



function ModalOverlay(){
		// Show modal
	    $(".website-overlay").addClass("is-visible");
	}


	$('.call-modal-click--main-contact, .navigation__product-nav__nav__link--contact').click(function(){
		$('.modal--main-contact').toggleClass("is-visible");
		ModalOverlay();
		modalFurniture();
		mainMenuProductNav.removeClass("show-product-nav");

	});

	// $('.call-modal-click--main-contact, .navigation__product-nav__nav__link--contact').click(function(e){
	// 	e.preventDefault();
	// 	$('.modal--main-contact').toggleClass("is-visible");
	// 	ModalOverlay();
	// 	modalFurniture();
	// 	mainMenuProductNav.removeClass("show-product-nav");

	// });


	// // illimani modal
	// $('.call-modal-click--product-illimani').click(function(){
	// 	$('.modal--product-illimani').toggleClass("is-visible");
	// 	ModalOverlay();
	// 	modalFurniture();
	// });

	// // MiTap modal
	// $('.call-modal-click--product-mitap').click(function(){
	// 	$('.modal--product-mitap').toggleClass("is-visible");
	// 	ModalOverlay();
	// 	modalFurniture();
	// });

	// // Taofont modal
	// $('.call-modal-click--product-taofont').click(function(){
	// 	$('.modal--product-taofont').toggleClass("is-visible");
	// 	ModalOverlay();
	// 	modalFurniture();
	// });

	// Home water test modal
	$('.call-modal-click--water-test').click(function(){
		ModalOverlay();
		$('.water-test--modal').toggleClass("is-visible");
		// Stop scrolling the mouse scroll on fullpage
	    $.fn.fullpage.setAllowScrolling(false);
	    //disabling all keyboard scrolling
		$.fn.fullpage.setKeyboardScrolling(false);
		$('body').addClass("no-touch");
	});


	// Home water test modal
	$('.call-modal-click--water-quote').click(function(){
		ModalOverlay();
		$('.modal--water-quote').toggleClass("is-visible");
		$('body').addClass("no-scroll");
	});


	function modalFurniture(){
	    // Add class to body to stop scroll
	    $('body').addClass("no-scroll");

	    // Stop scrolling the mouse scroll on fullpage
	    $.fn.fullpage.setAllowScrolling(false);

	    //disabling all keyboard scrolling
		$.fn.fullpage.setKeyboardScrolling(false);
	}

	// var modalOverlay = $(".website-overlay").toggleClass("is-visible");

	// Close modal
	function closeModal(){
		// restart fullpage scrolling with mouse scroll after modal closed
		// Remove class from modal
		$(".modal,.website-overlay, .modal__close").removeClass("is-visible");
		// Hide product nav
		mainMenuProductNav.removeClass("show-product-nav");
		$.fn.fullpage.setAllowScrolling(true);
		$.fn.fullpage.setKeyboardScrolling(true);
		// Remove body scroll
		$('body').removeClass("no-scroll no-touch");
	}

	// Close modal by clicking the overlay background
	$(".website-overlay, .water-test__modal-close-button").click(function(){
		closeModal();
	});

	//Close lightbox with escape key
	$(document).keyup(function(e) { 
	  if (e.keyCode === 27) { 
	    closeModal();
	  } // esc key
	});



// -------------------------------------------------------------------- // Footer



// -------------------------------------------------------------------- Fixed sub header


// Add fixed navigation on scroll for large screens
$(window).on("resize scroll", function(){

	var scroll =      $(window).scrollTop();
	var	winHeight =   $(window).height();
	var	winWidth =    $(window).width();
	var	fixedHeader = $(".fix-sub-header");

	if (scroll >= winHeight - 65 && winWidth > 800) {
		fixedHeader.addClass("is-fixed");
	} else {
		fixedHeader.removeClass("is-fixed");
	}
});


// Skrollr init
if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false
    });
}


// Remove black box on touch on mobile
document.addEventListener("touchstart", function(){}, true);


// Link click fadeout
$('a.link-fade').click(function(event) {
	event.preventDefault();
	newLocation = this.href;
	$('body').fadeOut(1000, newpage);
});
function newpage() {
	window.location = newLocation;
}


// Wow
wow = new WOW({
    mobile: false,        // trigger animations on mobile devices (default is true)
});
wow.init();



});
