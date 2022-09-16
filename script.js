let inputplayers = document.querySelectorAll("input");
let btns = document.querySelectorAll(".btn");
let outputs = document.querySelectorAll(".score");
let winnerbtn = document.querySelector(".btnWinner");
let finalWinnerdiv = document.querySelector(".output");
let displaywinner = document.querySelector(".winnerdisplay");
let playagain = document.getElementById("playagain");
let winnername = document.querySelector(".winnername");
let winnername_span =document.querySelector(".winnername_span")
let NoOfPlayerPlayed = 0;
let canvasElem =document.getElementById('canvasElem')

let record = {};
let individualScoreArray = [];
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click",()=>{
//         handleclick(i)
//     })
// }

// function handleclick(n){
//     let random =Math.floor(6*Math.random()+1)
//     outputs[n].innerText=random
//     btns[n].disabled=true;
//     record[n]=random;
//     individualScoreArray[n]=random;
// }

winnerbtn.addEventListener("click", () => {
  if (NoOfPlayerPlayed === 5) {
    let finalWinnersArray = [];
    let winnerscore = Math.max(...individualScoreArray);

    for (let i = 0; i < individualScoreArray.length; i++) {
      if (individualScoreArray[i] == winnerscore) {
        finalWinnersArray.push(inputplayers[i].value);
      }
    }
    displaywinner.style.display = "flex";
  
   
      if (finalWinnersArray.length > 1) {
        winnername_span.innerHTML += `<span>S:</span>`;
      } else {
        finalWinnersArray.innerHTML += `<span>:</span>`;
      }
    
    for (let winners of finalWinnersArray) {
      winnername.innerHTML += `<p>${winners}  </p>`;
    }
  } else {
    alert("Everyone should Play to find Winner amongst them");
  }
});

playagain.addEventListener("click", () => {
  location.reload();
});
// winnerbtn.addEventListener("click",()=>{
//     let winnerNumber=0;
//     for (let j = 0; j < Object.keys(record).length; j++) {
//         if(parseInt(record[j])>winnerNumber){
//             winnerNumber=record[j];
//         }
//     }
//     console.log(winnerNumber)
//     for (let k = 0; k < Object.keys(record).length; k++) {
//         if(winnerNumber == record[k]){
//             finalWinner.innerText += (inputplayers[k].value+" ")
//         }

//     }

// })

function rollDice(i) {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach((die) => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
    setTimeout(() => {
      outputs[i].innerText = die.dataset.roll;
    }, 2000);
    individualScoreArray[i] = die.dataset.roll;
    btns[i].disabled = true;
    NoOfPlayerPlayed++;
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (inputplayers[i].value === "") {
      alert("First enter then name of player before palying");
    } else {
      rollDice(i);
    }
  });
}
