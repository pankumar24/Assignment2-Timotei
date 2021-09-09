'use strict';

const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav__list');
const rating = document.querySelectorAll(".rating");

rating.forEach((el) => {
  const ratingVal = parseInt(el.getAttribute("data"));
  const newWidth = ratingVal * 20;
  el.style.width = `${newWidth}px`;
});

function toggle(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);
    } 
    else{
        el.classList.add(className);
    }
}

menuIcon.addEventListener('click', function() {
    toggle(navList, 'active');
    toggle(navList, 'overlay');
});

