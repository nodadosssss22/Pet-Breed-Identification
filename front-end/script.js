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
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
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

let currentIndex = 0;
const imageElement = document.getElementById("image");
const imageElement2 = document.getElementById("image2");

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  setImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  setImage();
}

function setImage() {
  const nextImage = new Image();
  nextImage.src = images[currentIndex];
  nextImage.onload = function() {
    const previousVisible = document.querySelector(".visible");
    const nextVisible = previousVisible === imageElement ? imageElement2 : imageElement;

    nextVisible.src = nextImage.src;
    previousVisible.classList.remove("visible");
    nextVisible.classList.add("visible");
  };
}

// Initialize with the first image
setImage();

//#endregion