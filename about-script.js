
/*let toggle = document.getElementsByClassName('accordion-toggle');
let content = document.getElementsByClassName('accordion-content');

toggle.addEventListener('click',function(){
content.style.visibility = 'visible';
});


let toggle = document.getElementsByClassName('accordion-toggle');
let content = document.getElementsByClassName('accordion-content');
let icon = document.getElementsByClassName('fa-solid fa-plus');

for(let i=0; i<toggles.lenght; i++){
    toggle[i].addEventListener('click', ()=>{

        if(parseInt(content[i].style.height) != content[i].scrollHeight){
            content[i].style.height = content[i].scrollHeight + "px";
            icon[i].classList.remove('fa-plus');
            icon[i].classList.add('fa-minus');
        }
        else{
            content[i].style.height = "0px";
            icon[i].classList.remove('fa-minus');
            icon[i].classList.add('fa-plus');
        }
        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                content[j].style.height = "0px";
                icon[j].classList.remove('fa-minus');
                icon[j].classList.add('fa-plus');
            }
        }
    });
}
*/

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));