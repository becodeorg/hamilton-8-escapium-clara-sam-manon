async function addTestimonials() {
    const resp = await fetch("/Html/testimonials.html")
    const html = await resp.text();
    const articleTestimonials = document.getElementById("homepage_testimonials")
    articleTestimonials.insertAdjacentHTML("afterend", html);
}
addTestimonials();
