
$(document).ready(function($) {
// Full page scroll on working only on 480px above

/* ****** !!!  Add window resize and init and kill the full page scroll !!! ************/ 
if(screen.width < 480) { 
// do any 480 width stuff here, or simply do nothing
return;
} else {
$('#full-page-scroll').fullpage({

    //Navigation
    anchors:['illimani', 'mitap', 'taofont','pure-water','clients'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['illimani', 'MiTap', 'TaoFont', 'Water', 'Clients'],
    showActiveTooltip: false,


    // //Scrolling
    css3: true,
    scrollingSpeed: 1200,
    autoScrolling: true,
    fitToSection: true,

    // Test the scroll bar on IE
    scrollBar: true,
    easing: 'easeInOutExpo',
    easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: null,
    scrollOverflow: false,
    touchSensitivity: 5,
    normalScrollElementTouchThreshold: 5,



    // //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,

    // //Design
    controlArrows: true,
    verticalCentered: false,
    resize : false,
    paddingTop: '3em',
    paddingBottom: '10px',
    sectionsColor: ['#151515', '#172220', '#151515', '151515', '#151515'],
    responsiveWidth: 0,
    responsiveHeight: 0,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction){
        if(index == 1){
            $('.nav__link--illimani').removeClass("is-active");
        }else if(index == 2){
            $('.nav__link--mitap').removeClass("is-active");
        }
    },

    afterLoad: function(anchorLink, index){
        if(index == 1){
            $('.nav__link--illimani').addClass("is-active");
        }else if(index == 2){
            $('.nav__link--mitap').addClass("is-active");
        }
    },
    afterRender: function(){},
    afterResize: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

    });
}


});
