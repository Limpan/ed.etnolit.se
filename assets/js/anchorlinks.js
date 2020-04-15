"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // console.log('DOM Ready...');

  let url = new URL(document.URL);
  let elements = document.querySelectorAll('h2, h3');

  for (let element of elements) {
    url.hash = element.id;  // Update the URL with the correct hash.

    // Create a new <a>-element.
    let el = document.createElement('a');
    el.className = 'anchor';
    el.href = url.href;
    el.innerHTML = '#';

    element.appendChild(el);
    //element.innerHTML = el.outerHTML + element.innerHTML;
  }
});
