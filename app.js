// containers
const carouselSlider = document.querySelector(".carousel-slider");
const carouselImages = document.querySelectorAll(".carousel-slider img");

// buttons
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

// counter
let counter = 1;
const size = carouselImages[0].clientWidth;

// prettier-ignore
carouselSlider.style.transform = "translateX(" + (- size * counter) + "px)";

// button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlider.style.transition = "transform 0.5s ease-in-out";
  counter++;
  // prettier-ignore
  carouselSlider.style.transform = "translateX(" + (- size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlider.style.transition = "transform 0.5s ease-in-out";
  counter--;
  // prettier-ignore
  carouselSlider.style.transform = "translateX(" + (- size * counter) + "px)";
});

carouselSlider.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last-clone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - 2;
    // prettier-ignore
    carouselSlider.style.transform = "translateX(" + (- size * counter) + "px)";
  }

  if (carouselImages[counter].id === "first-clone") {
    carouselSlider.style.transition = "none";
    counter = carouselImages.length - counter;
    // prettier-ignore
    carouselSlider.style.transform = "translateX(" + (- size * counter) + "px)";
  }
});
