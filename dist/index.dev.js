"use strict";

var faders = document.querySelectorAll('.fade-in');
var appearOptions = {
  threshold: 0.5
};
var appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(function (fader) {
  appearOnScroll.observe(fader);
});