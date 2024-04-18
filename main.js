const slider = document.getElementById("slider-container");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");
const backgroundColors = document.getElementById("bg-wrapper");

const images = [
  "gallery/david-valentine-IFGSEET0JtQ-unsplash.jpg",
  "gallery/david-valentine-pd-5nL33MJY-unsplash.jpg",
  "gallery/kemal-berkay-dogan-dOhoz8OA2h8-unsplash.jpg",
  "gallery/klaus-steinberg-hcjG82lNTwg-unsplash.jpg",
];

let currentIndex = 0;

function getColor() {
  let minLightness = 99;
  let range = 128;
  let red = minLightness + Math.floor(Math.random() * range);
  let green = minLightness + Math.floor(Math.random() * range);
  let blue = minLightness + Math.floor(Math.random() * range);
  return `rgb(${red}, ${green}, ${blue})`;
}
function slideShow() {
  slider.style.backgroundImage = `url(${images[currentIndex]})`;
  backgroundColors.style.backgroundColor = getColor();
}

function showNextImg() {
  if (currentIndex >= images.length - 1) {
    currentIndex = 0;
  }
  currentIndex++;
  slideShow();
}
function showPrevImg() {
  if (currentIndex === 0) {
    currentIndex = images.length;
  }
  currentIndex--;
  slideShow();
}

slideShow();
nextBtn.addEventListener("click", showNextImg);
prevBtn.addEventListener("click", showPrevImg);
