// pegando todas as bolinhas
const numbers = document.querySelectorAll(".number");
const generateBtn = document.querySelector("#generate");

function generateNumbers() {
  // criando uma array e definindo minimo e maximo
  const max = 60;
  const min = 1;
  const result = [];

  while (result.length < 6) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    if(!result.includes(number)) {
      result.push(number);
    }
  }

<<<<<<< HEAD
  result.sort((a, b) => a - b);

=======
>>>>>>> f79fe7abfaeef6287a729ed610ae5dbc5c59de8e
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].textContent =result[i];
  }
  console.log(result);
}

generateBtn.addEventListener("click", generateNumbers);