(function () {
  "use strict";

  // Define variables
  var items = document.querySelectorAll(".timeline li");

  // Check if an element is in viewport
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function callbackFunc() {
      // Loop through each timeline item
      for (var i = 0; i < items.length; i++) {
          // Check if the timeline item is in the viewport
          if (isElementInViewport(items[i])) {
              // Add 'in-view' class to the timeline item if it's in the viewport
              items[i].classList.add("in-view");
          }
      }
  }

  // Listen for events: page load, resize, and scroll
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();


