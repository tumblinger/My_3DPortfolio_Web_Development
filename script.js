"use strict"

//code helping to detect what kind of device is open: w/touchScreen or w/mouse:
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};
//if device has touchscreen(is mobile) add class (touch or PC) to body: 
if (isMobile.any()) {
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            })
        }
    }
} else {
    document.body.classList.add('_pc');
}

// Burger Menu:
const burger = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (burger) {
    burger.addEventListener('click', function (e) {
        //prevent page scrolling while burger menu is open:
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

//Scrolling Page Sections by Link Clicking:
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', clickOnMenu);
    });
    function clickOnMenu(e) {
        const menuLink = e.target;

        //checking if data-attribute is filled w/smth && whether this object/class exists on the page:
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoObject = document.querySelector(menuLink.dataset.goto);

            // Calculating the Object position: get Object position from top(in px) plus vertically scrolled  pixels, minus header's height
            const gotoObjectValue = gotoObject.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            //if we click on the link in burger menu we go to the section/paga and burger closes:
            if (burger.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                burger.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            //Forcing scroll to go to the Object position:
            window.scrollTo({
                top: gotoObjectValue,
                behavior: 'smooth'
            });

            //link makes scroll only , not href path
            e.preventDefault();
        }
    }
}

//Popup - About the Game Project:
const page__text = document.querySelector('.page__text');
const popup__wrap = document.querySelector('.popup-wrap');
const popup__btn = document.querySelector('.popup-btn');
const popup__closeBtn = document.querySelector('.popup-closeBtn');

popup__btn.addEventListener('click', (e)=>{
    e.preventDefault();
    popup__wrap.classList.add('active');
    page__text.classList.add('active');
    popup__btn.classList.add('closed');
});

popup__closeBtn.addEventListener('click', ()=>{
    popup__wrap.classList.remove('active');
    page__text.classList.remove('active');
    popup__btn.classList.remove('closed');
});

