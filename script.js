function myFunction() {
  window.location = "showcase.html";
}

function resetFunction() {
  window.location = " index.html";
}

// const submitBtn = document.querySelector("#submit");
// const startBtn = document.querySelector("#start");
// const resetBtn = document.querySelector("#reset");

// const divCirclesRed = document.querySelector(".red1");
// const divCirclesGreen = document.querySelector(".green1");
// const divCirclesBlue = document.querySelector(".blue1");

// const numberOfCircles = document.querySelector("#circle_num");

// let redCount = document.querySelector("#red").value;
// let greenCount = document.querySelector("#green").value;
// let blueCount = document.querySelector("#blue").value;

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const numberOfCirclesValue = numberOfCircles.value;
//   // console.log(numberOfCirclesValue);
//   for (let i = 0; i < numberOfCirclesValue; i++) {
//     const divRed = document.createElement("div");
//     divRed.classList.add("circle_red");
//     divCirclesRed.appendChild(divRed);
//     const divGreen = document.createElement("div");
//     divGreen.classList.add("circle_green");
//     divCirclesGreen.appendChild(divGreen);
//     const divBlue = document.createElement("div");
//     divBlue.classList.add("circle_blue");
//     divCirclesBlue.appendChild(divBlue);
//   }
//   startBtn.classList.remove("hidden");
//   resetBtn.classList.remove("hidden");
//   let redCount = document.querySelector("#red").value;
//   let greenCount = document.querySelector("#green").value;
//   let blueCount = document.querySelector("#blue").value;
//   console.log(redCount);
//   console.log(greenCount);
//   console.log(blueCount);
// });

// resetBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   divCirclesRed.innerHTML = "";
//   divCirclesGreen.innerHTML = "";
//   divCirclesBlue.innerHTML = "";

//   startBtn.classList.add("hidden");
//   resetBtn.classList.add("hidden");

// });

// startBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   let redCount = document.querySelector("#red").value;
//   let greenCount = document.querySelector("#green").value;
//   let blueCount = document.querySelector("#blue").value;

//   redCountInSec = redCount * 1000;
//   greenCountInSec = greenCount * 1000;
//   blueCountInSec = blueCount * 1000;

//   setTimeout(() => {
//     divCirclesRed.innerHTML = "";
//   }, redCountInSec);
//   setTimeout(() => {
//     divCirclesGreen.innerHTML = "";
//   }, redCountInSec + greenCountInSec);

//   setTimeout(() => {
//     divCirclesBlue.innerHTML = "";
//   }, redCountInSec + greenCountInSec + blueCountInSec);
// });
