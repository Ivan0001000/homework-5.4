//Дано ціле число (ввести через 'prompt').
// З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let number = prompt("Enter an integer greater than 1:");

while (
  isNaN(number) ||
  number === null ||
  number.trim() === "" ||
  number <= 1
) {
  number = prompt(
    "You entered an invalid number. Please enter an integer greater than 1:"
  );
}

number = Number(number);

let isPrime = true;

for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`);
}
