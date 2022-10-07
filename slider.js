// Swiper initialisation:
new Swiper('.image-slider', {
    //Arrows:
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Navigation / Bullets, pagination, progressbar:
    pagination: {
        el: '.swiper-pagination',
        //Bullets:
        // type: 'bullets',
        // clickable: true,

        // //Dynamic Bullets:
        dynamicBullets: true,
        clickable: true,

        // //Custom bullets with numbers on them:
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },

        //Fraction:
        // type: 'fraction',
        // //Custom Fraction:
        // renderFraction: function (currentClass, totalClass) {
        //     return 'Work <span class = "' + currentClass + '"></span>' + ' from ' + '<span class="' + totalClass + '"></span>'
        // },

        //Progressbar:
        // type: 'progressbar'
    },

    //Scroll:
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     //Moving scrollbar:
    //     draggable: true
    // },

    // Dragging images on PC:
    simulateTouch: true,
    //Dragging sensitivity 0...1 ...:
    touchRatio: 1,
    //Dragging Angle:
    touchAngle: 90,
    //Hand cursor for PC:
    grabCursor: true,

    //Keaboard swiping:
    keyboard: {
        enabled: true,
        //only when slider is in viewport:
        onlyInViewport: true,
        pageUpDown: false,
    },

    //Mouse Wheel swiping:
    // mousewheel: {
    //     sensitivity: 1,
    //     //Class area when mouse-swiping works: !!If we have several sliders with the same class -> all will swipe ->remove this setting:
    //     eventsTarget: '.image-slider',
    // },

    autoHeight: false,

    //The quantity of sliders to show (numbers, incl.floating point, or 'auto):
    slidesPerView: 3,

    //If slides' quantity is less than needed in slidesPerView, we can turn off the functionality:
    watchOverflow: true,

    //gap between sliders:
    spaceBetween: 35,

    //How many slides we swipe in once:
    slidesPerGroup: 1,

    //First slide is centered:
    centeredSlides: true,

    //Starting Slide starting from [0]:
    initialSlide: 0,

    //Multirows (autoHeight => false ! + styles css + slidesPerView not = auto):
    slidesPerColumn: 1,

    //Endless swipe (doesn't work w/multirows, w/scrollbar):
    loop: true,
    //Doubled Slides (= slidesPerView):
    loopedSlides: 0,

    //Free mode (swiping or dragging is not regulated):
    freeMode: true,

    //Auto Scroll:
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    //     //off when hand-swiping:
    //     disableOnInteraction: false,
    // },

    speed: 800,

    // direction: 'vertical',

    //==============================EFFECTS======================================
    //Sliding (default):
    // effect: 'slide',
    // ----------------------

    //Opacity Changing (1 slide per view):
    // effect: 'fade',
    // //both images /parallel:
    // fadeEffect: {
    //     crossFade: true,
    // },

    //Rotating horizontally (1 slide per view):
    // effect: 'flip',
    // flipEffect: {
    //     sledeShadow: true,
    //     //active slide only:
    //     limitRotation: true,
    // },

    //3d cube + css styles:
    // effect: 'cube',
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 10,
    //     shadowScale: 0.94,
    // },

    //3d cover flow (slicePerView 3 ++): 
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        stretch: 110,
        slideShadow: true,
        depth: 120,
        modifier: 1,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        580: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },

    //Zooming:
    zoom: {
        maxRatio: 3,
        minRatio: 1,
    },

});

