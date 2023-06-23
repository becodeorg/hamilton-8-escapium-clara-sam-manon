const selectors = Array.from(document.querySelectorAll('.roomsMain__filter__btn'));

const hardRooms = Array.from(document.querySelectorAll('.hardRoom'));

const easyRooms = Array.from(document.querySelectorAll('.easyRooms'));

const normalRooms = Array.from(document.querySelectorAll('.normalRoom'));

const roomsGrid = document.querySelector('.roomsMain__grid');

const roomsGridItems = roomsGrid.childNodes;

const btnHard = document.querySelector('.hard');

const btnEasy = document.querySelector('.easy');

const btnNormal = document.querySelector('.normal');

const btnAll = document.querySelector('.all');



selectors.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'Hard':
                hardRooms.forEach(function (hardRoom) {
                    hardRoom.style.display = "flex";
                })
                easyRooms.forEach(function (easyRoom) {
                    easyRoom.style.display = "none";
                })
                normalRooms.forEach(function (normalRoom) {
                    normalRoom.style.display = "none";
                })
                break;
        
            case 'Easy':
                hardRooms.forEach(function (hardRoom) {
                    hardRoom.style.display = "none";
                })
                easyRooms.forEach(function (easyRoom) {
                    easyRoom.style.display = "flex";
                })
                normalRooms.forEach(function (normalRoom) {
                    normalRoom.style.display = "none";
                })
                break;
            
            case 'Normal':
                hardRooms.forEach(function (hardRoom) {
                    hardRoom.style.display = "none";
                })
                easyRooms.forEach(function (easyRoom) {
                    easyRoom.style.display = "none";
                })
                normalRooms.forEach(function (normalRoom) {
                    normalRoom.style.display = "flex";
                })
                break;

            case 'All':
                hardRooms.forEach(function (hardRoom) {
                    hardRoom.style.display = "flex";
                })
                easyRooms.forEach(function (easyRoom) {
                    easyRoom.style.display = "flex";
                })
                normalRooms.forEach(function (normalRoom) {
                    normalRoom.style.display = "flex";
                })
                break;

            default:
                hardRooms.forEach(function (hardRoom) {
                    hardRoom.style.display = "flex";
                })
                easyRooms.forEach(function (easyRoom) {
                    easyRoom.style.display = "flex";
                })
                normalRooms.forEach(function (normalRoom) {
                    normalRoom.style.display = "flex";
                })

                break;
        }
    })
})


// function filterHard() {
    
    
// };

// btnHard.addEventListener("click", () => {
//     hardRooms.hidden = false;
//     easyRooms.hidden = true;
//     normalRooms.hidden = true;
// });