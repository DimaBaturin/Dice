let restart = document.querySelector('.stop');
let btn = document.querySelector('.btn');
let btnres = document.querySelector('.restart');
let boxes= document.querySelectorAll('.box');
let audio = new Audio("dice.mp3");
let game = document.querySelector('.game-box');

for(let i = 0; i < 10; i++){
    boxes[i].textContent = Math.trunc(Math.random() * 6) + 1;
}


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!box.hasAttribute("data-active")) {
            box.style.backgroundColor = "green";
            box.setAttribute("data-active", true);
        }else {
            box.style.backgroundColor = "white";
            box.removeAttribute("data-active");
        }
        checkWin();
    });

});

function checkWin(){
    let firstBoxText = boxes[0].textContent;
    let checkBox= Array.prototype.every.call(boxes, box => box.textContent === firstBoxText);
    if (checkBox) {
        console.log("All boxes have the same text content!");
        console.log("hello");
        restart.style.display = 'inherit';
        game.style.filter = "blur(2px)";
    }};

function restarts(){
    restart.style.display='none';
    game.style.filter="blur(0px)";
    for(let i = 0; i < 10; i++){
        boxes[i].removeAttribute("data-active");
        boxes[i].textContent = Math.trunc(Math.random() * 6) + 1;
        boxes[i].style.backgroundColor = "white";
    }
}

btnres.addEventListener('click', restarts);

btn.addEventListener('click', () =>
    boxes.forEach(box => {
        if (!box.hasAttribute("data-active")) {
            box.textContent = Math.trunc(Math.random() * 6) + 1;
        }
        audio.play();
    }
))

