// Global variables
let tooltipsModal = document.getElementById("tooltips");

// Function to shuffle array items each reload
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// Define number of items that will be used for tooltops
// Shuffle the given tooltips
shuffle(tooltips);
// Connect html item that will display tooltips
let tooltipSlides = document.querySelector(".slides");
// Loop to populate container with tooltip items
for (let i = 0; i < tooltips.length; i++) {
  let tooltipName = document.createElement("div");
  tooltipName.setAttribute("class", `tooltip-slide ${tooltips[i].type}`);
  tooltipName.textContent = tooltips[i].name;
  tooltipSlides.appendChild(tooltipName);
}

// Handle tooltip slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("tooltip-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

(function triggerTooltip() {
  //   Watch intro video button on tooltip modal
  let hideTooltip = document.getElementById("tooltipHidder");
  //   Video menu - show tooltip modal
  let showTooltips = document.getElementById("tooltipShower");
  //   Video menu - tooltip reference children / use loop if they increase above 3
  let videoLegend = document.getElementById("videoLegend");

  if (!tooltipsModal.classList.value.includes("hidden")) {
    videoLegend.classList.add("active");
  }

  //   Show tooltip screen
  showTooltips.addEventListener("click", function () {
    tooltipsModal.classList.toggle("hidden");
    videoLegend.classList.toggle("active");
  });

  //   Show video screen
  hideTooltip.addEventListener("click", function () {
    tooltipsModal.classList.toggle("hidden");
    videoLegend.classList.toggle("active");
  });
})();

window.addEventListener("keydown", function (e) {
  if (e.which == 84 && tooltipsModal.classList.value.includes("hidden")) {
    tooltipsModal.classList.remove("hidden");
    videoLegend.classList.add("active");
  }
});
