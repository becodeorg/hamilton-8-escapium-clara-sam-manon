async function addFooter() {
    const resp = await fetch("/Html/footer.html")
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterend", html);
}
addFooter();
