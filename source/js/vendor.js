// Swiper 8.4.7
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';

// // wowjs 1.1.3
import WOW from 'wowjs';
window.WOW = WOW;

import './vendor/iphone-inline-video';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => window.enableInlineVideo(video));
  });
});

