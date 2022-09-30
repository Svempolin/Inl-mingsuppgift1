// function guessNumber() {
//   const random = Math.floor(Math.random() * 10) + 1;

//   let number = parseFloat(prompt(" Guess a number from 1 to 10"));

//   if (number !== random) {
//     number = parseFloat(prompt(" Guess a number from 1 to 10, ones again"));
//   } else if (Number == random) {
//     console.log(" You guess the right number");
//   }
// }

// guessNumber();

let random = Math.floor(Math.random() * 10 + 1);

let guess = 1;

document.getElementById("SubmitGuess").onclick = function () {
  let randomGuess = document.getElementById("GuessRandomNumber").value;
  console.log("klick");

  if (randomGuess == random) {
    console.log("guess");
    // alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
    document.getElementById(
      "right"
    ).innerHTML = `YEY!! It only took ${guess} times to guess right!`;
  } else if (randomGuess > random) {
    console.log(" to small guess");
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    guess++;
    // document.getElementById("wrong").innerHTML = "SORRY TRY A SMALLER NR!!";
  } else {
    console.log(" to great guess");
    {
      guess++;
      alert("OOPS SORRY!! TRY A GREATER NUMBER");
      // guess++;
      // document.getElementById("wrong").innerHTML = "SORRY TRY A GREATER NR!!";
    }
  }
};

// let secret;
// let guessNumber;

// const setSecret = () => {
//   secret = Math.floor(Math.random() * 10 + 1);
// };
