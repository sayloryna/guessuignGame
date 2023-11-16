const randomNumber = Math.ceil(Math.random() * 10);
const maxGuesses = 3;
let guesses = 0;

function guessingGame() {
  const userNumber = parseInt(prompt("elige un numero entre 0 y 10"));

  if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
    alert("un NUMERO entre 0 y 10!");
    guessingGame();
  }
  guesses++;
  if (userNumber === randomNumber) {
    alert(
      `Chacho que bueno adivinaste que era el ${randomNumber} en ${guesses}intentos de 3 intentos que tenias fuaa que maquina.. Hazlo otra vez`
    );
  } else {
    const hint =
      userNumber < randomNumber ? "NAa es mas alto" : "te has pasao ";

    if (guesses < maxGuesses) {
      alert(`${hint} prueba otra vez`);
      guessingGame();
    } else {
      alert(`pringao... era ${randomNumber} anda prueba otra vez`);
    }
  }
}

guessingGame();
