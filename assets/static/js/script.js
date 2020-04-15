"use strict";

let observer = new IntersectionObserver(show, {root: null, rootMargin: '0px', threshold: 0});

window.addEventListener("load", function (event) {
  let sections = document.querySelectorAll('section > h2:first-child');

  for (let section of sections) {
    observer.observe(section);
  }
});


function show(entries, observer) {
    for (let entry of entries) {
      if (!entry.isIntersecting) {
        entry.target.parentNode.classList.add('show');
      } else {
        entry.target.parentNode.classList.remove('show');
      }
    }
};
