
//CAROUSEL TESTIMONIALS
document.addEventListener(function() {
  const carousel = document.querySelector("carousel");
  const left = document.getElementById("arrow-left");
  const right = document.getElementById("arrow-right");

  left.addEventListener("click", showPreviousSlideTestimonials);
  right.addEventListener("click", showNextSlideTestimonials);

  function showPreviousSlideTestimonials() {
    carousel.scrollBy({
      left: -carousel.offsetWidth,
      behavior: "smooth"
    });
  }
  function showNextSlideTestimonials() {
    carousel.scrollBy({
      left: carousel.offsetWidth,
      behavior: "smooth"
    });
  }
});