// Перший спосіб: за допомогою циклу
const someNumbers = [1, 324, 11, -4, -85];
let maxNumber = someNumbers[0]; 
let minNumber = someNumbers[0];

for (let i = 1; i < someNumbers.length; i++) {
if (someNumbers[i] > maxNumber) {
maxNumber = someNumbers[i]; 
}
if (someNumbers[i] < minNumber) {
minNumber = someNumbers[i]; 
}
}

console.log("Найбільше значення (перший спосіб):", maxNumber);
console.log("Найменше значення (перший спосіб):", minNumber);


// Другий спосіб: використання вбудованих методів
const maxNumber2 = Math.max(...someNumbers); 
const minNumber2 = Math.min(...someNumbers);

console.log("Найбільше значення (другий спосіб):", maxNumber2);
console.log("Найменше значення (другий спосіб):", minNumber2);
