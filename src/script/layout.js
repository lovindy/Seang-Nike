import { initHome } from './home.js';
import { initSlider } from './slider.js';
import { initBtn } from './btn.js';
import { initCarousel } from './carousel.js';

// You can also export them if needed elsewhere
export { initHome, initSlider, initBtn, initCarousel };

// Or initialize them directly if they are self-executing
initHome();
initSlider();
initBtn();
initCarousel();