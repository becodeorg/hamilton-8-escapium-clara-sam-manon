
//CAROUSEL TESTIMONIALS

const slidesContainer = document.getElementsByClassName("test");
const slide = document.querySelector(".test-slide");
const prevButton = document.getElementById("arrow-left");
const nextButton = document.getElementById("arrow-right");
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

//ACCORDION