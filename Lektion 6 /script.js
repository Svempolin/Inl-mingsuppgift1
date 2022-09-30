function guessNumber() {
  const random = Math.floor(Math.random() * 10) + 1;

  let number = parseFloat(prompt(" Guess a number from 1 to 10"));

  if (number !== random) {
    number = parseFloat(prompt(" Guess a number from 1 to 10, ones again"));
  } else if (Number == random) {
    console.log(" You guess the right number");
  }
}

guessNumber();
