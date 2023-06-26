async function addHeader() {
    const resp = await fetch("Html/header.html")
    const html = await resp.text();
    const respjs = await fetch("Javascript/hamburger.js")
    document.body.insertAdjacentHTML("afterbegin", html);
    //I added manually the jscode for the burger menu as we haven't seen another way to do this more efficiently yet
    let burgerBtn = document.getElementById("burger")
    let body = document.body
    let menu = document.getElementById("menu")


    burgerBtn.addEventListener('click', () => {
        if (body.classList.contains("opacity-7")) {
            body.classList.remove("opacity-7")
        } else {
            body.classList.add("opacity-7")
        }
        
        if (menu.classList.contains("left-0")) {
            menu.classList.remove("left-0")
        } else {
            menu.classList.add("left-0")
        }
        
        if (burgerBtn.classList.contains("on-click")) {
            burgerBtn.classList.remove("on-click")
        } else {
            burgerBtn.classList.add("on-click")
        }
    })
    }
    
    addHeader();