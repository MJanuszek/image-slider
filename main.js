const slider = document.getElementById("slider-container");
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");

const images = [
  "gallery/david-valentine-IFGSEET0JtQ-unsplash.jpg",
  "gallery/david-valentine-pd-5nL33MJY-unsplash.jpg",
  "gallery/kemal-berkay-dogan-dOhoz8OA2h8-unsplash.jpg",
  "gallery/klaus-steinberg-hcjG82lNTwg-unsplash.jpg",
];

let currentIndex = 0;
function slideShow() {
  slider.style.backgroundImage = `url(${images[currentIndex]})`;
}

function showNextImg() {
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  currentIndex++;
  slideShow();
  console.log("next", currentIndex);
}
function showPrevImg() {
  if (currentIndex === 0) {
    currentIndex = images.length;
  }
  currentIndex--;
  slideShow();
  console.log("prev", currentIndex);
}

slideShow();
nextBtn.addEventListener("click", showNextImg);
prevBtn.addEventListener("click", showPrevImg);
