/*
//Testing place

var width =  document.getElementById('square-home').offsetHeight;

console.log(width);

//#region navbar fading in or out if user scrolls
const navbar = document.getElementById("navbar");
let prevScrollpos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (currentScrollPos > 0) {
    navbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
};

//#endregion
*/
//#region buttton to scroll all the way up smoothly
document.getElementById('scrollToTopLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const duration = 500; // Adjust duration (in milliseconds)
    const start = window.scrollY;
    const distance = -start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth animation
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
//#endregion

//#region scroll to target div

function scrollToDiv(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 75; // Adjust this value as needed
    const elementPosition = element.getBoundingClientRect().top + window.scrollX;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }
}

//#endregion

//#region image animation

const images = [

  "front-images/content-home/c-home-cycling-images/cycling-image-1.png",
  "front-images/content-home/c-home-cycling-images/cycling-image-2.png",
  "front-images/content-home/c-home-cycling-images/cycling-image-3.png"

];

// I want this part to move the image as i like relative to the current image being displayed.
// I declared two indices to keep  track on what is the current index being displayed and perform
// Certain actions in relation to the current index.
var current_index = 0;

var circle_indicators = document.getElementById('navibar-small-dots').children;

const image_cycling = document.getElementById("cycling-image");

var lever = false;

function previous_image() {
  current_index = (current_index - 1 + images.length) % images.length;
  change_image();
}

function next_image() {
  current_index = (current_index + 1) % images.length;  
  change_image();
}

function change_image() {

  let translateValue = 0;
  if (current_index === 1) {
    translateValue = 230;
  } else if (current_index === 2) {
    translateValue = 125;
  }

  for (i = 0; i < circle_indicators.length; i++){
    var child = circle_indicators[i];

    if (current_index === i) {
      child.setAttribute("data-status","active");
    } else {
      child.setAttribute("data-status","inactive")
    }
  }

  image_cycling.style.opacity = 0;
  image_cycling.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";

  setTimeout(function () {
    image_cycling.style.transform = `translateX(${translateValue}%)`;
    image_cycling.src = images[current_index];
    image_cycling.style.opacity = 1;
  }, 200); // Adjust this delay as needed
}

// Function to automatically change image every 30 seconds
function autoChangeImage() {
  setInterval(function () {
    next_image();
  }, 30 * 1000); // 30 seconds in milliseconds
}

// Initialize with the first image
autoChangeImage();
circle_indicators[0].setAttribute("data-status","active");

//#endregion