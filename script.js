let btnRef = document.querySelectorAll(".btn");
let popupRef = document.querySelector(".result");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("msg");

let winningPattern = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [6, 7, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]];
let xTurn = true;
let count = 0;

const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
};

const enableButtons=()=>{
    btnRef.forEach(element=>{
        element.innerText="";
        element.disabled=false;
    });
    popupRef.classList.add("hide");
};



const winFunction = (letter) => {
    disableButtons();
    if(letter=="X")
    {
        msgRef.innerHTML="😍🥳<br>'X' Wins";

    }
    else{
        msgRef.innerHTML="😍🥳<br>'0' Wins"
    }
};
const drawFunction=()=>
{
    disableButtons();
    msgRef.innerHTML="😎🥲<br>Draw the Match"
}
newgameBtn.addEventListener("click",()=>{
    count=0;
    enableButtons();

})
restartBtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
})

const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if (element1 != " " && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
};
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.innerText === "") { // Check if the button has not been clicked
            element.innerText = xTurn ? "X" : "O";
            xTurn = !xTurn;
            element.disabled = true;
            count += 1;
    
            winChecker(); // Check for a win after each move
    
            if (count === 9) {
                drawFunction();
            }
        }
    });
    
})

window.onload=enableButtons;