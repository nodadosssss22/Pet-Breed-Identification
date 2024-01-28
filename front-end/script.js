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

const box_title = document.getElementById("box-title");
const box_content = document.getElementById("box-content");
const square_text = document.getElementById("square-text");

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
    translateValue = 210;
  } else if (current_index === 2) {
    translateValue = 130;
  }

  if (current_index === 0) {
    image_cycling.style.height = "100%";
    image_cycling.transform = "translateY(0%)";
    /* Styles the text box relative to its position */
      square_text.style.height = "100%";
      square_text.style.transform = "translateX(0%)";
      square_text.style.paddingLeft = "10%";
      square_text.style.paddingRight = "2%";
      square_text.style.clipPath = "polygon(0% 0%, 10% 10%, 10% 90%, 0% 100%, 100% 100%, 100% 0%)";
      square_text.style.borderTopRightRadius = "5%";
      square_text.style.borderBottomRightRadius = "5%";

      square_text.style.height = "84%";
      square_text.style.width = "50%";

    box_title.innerHTML = "Choosing pets can be Confusing...";
    box_content.innerHTML = "With the variety of breeds and species of " +
                              "animals that we can choose from, it can be confusing for " + 
                              "some to pick and choose their companion.";
  }
  if (current_index === 1) {
    image_cycling.style.height = "100%";
    image_cycling.transform = "translateY(0%)";
    /* Styles the text box relative to its position */
      square_text.style.height = "100%";
      square_text.style.transform = "translateX(-45%)";
      square_text.style.borderTopLeftRadius = "5%";
      square_text.style.borderBottomLeftRadius = "5%";
      square_text.style.paddingRight = "10%";
      square_text.style.paddingLeft = "2%";
      square_text.style.clipPath = "polygon(100% 0%, 90% 10%, 90% 90%, 100% 100%, 0% 100%, 0% 0%)";
      square_text.style.height = "84%";
      square_text.style.width = "50%";

    box_title.innerHTML = "Let us help you, help pick your companion!";
    box_content.innerHTML = "With identification just a click away " +
                              "allow us to determine the breed and information of your " + 
                              "cute, potential companions!";
  }
  if (current_index === 2) {
    /* Styles everything relative to the current index */
      image_cycling.style.height = "50%";
      square_text.style.paddingRight = "10%";
      square_text.style.paddingLeft = "10%";
      square_text.style.paddingTop = "5%";
      square_text.style.height = "25%";
      square_text.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
      square_text.style.borderRadius = "0%";
      square_text.style.borderRadius = "10%";

      square_text.style.transform = "translate(-20%, 70%)";

    box_title.innerHTML = "Discover Pets the Hi-Tech Way! With Our Petpick: Pet Companion Scanner App!";
    box_content.innerHTML = "";
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
    
    if (current_index === 2) {
      image_cycling.style.transform = `translate(${translateValue}%, -40%)`;
    } else {
      image_cycling.style.transform = `translateX(${translateValue}%)`;
    }

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