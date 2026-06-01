function randomNumber() {

    const secretNumber = Math.floor(Math.random() * 100) + 1;

    let guess = Number(prompt("Угадайте число от 1 до 100"));

    while (guess !== secretNumber) {

        if (guess < secretNumber) {
            alert("Загаданное число больше");
        } else if (guess > secretNumber) {
            alert("Загаданное число меньше");
        }

        guess = Number(prompt("Попробуйте снова"));
    }

    alert("🎉 Вы угадали число!");
}

function playMathGame() {

    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    let operators = ['+', '-', '*', '/'];

    let randomOperator =
        operators[Math.floor(Math.random() * operators.length)];

    let userAnswer = Number(
        prompt(`Сколько будет ${num1} ${randomOperator} ${num2}?`)
    );

    let correctAnswer;

    switch (randomOperator) {

        case '+':
            correctAnswer = num1 + num2;
            break;

        case '-':
            correctAnswer = num1 - num2;
            break;

        case '*':
            correctAnswer = num1 * num2;
            break;

        case '/':
            correctAnswer = Number((num1 / num2).toFixed(2));
            break;
    }

    if (userAnswer === correctAnswer) {
        alert("Правильно! 🎉");
    } else {
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
}

const button = document.getElementById("game-2");

button.addEventListener("click", () => {
    playMathGame();
});

// Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);

    if (arr1[i] === 10) {
        break;
    }
}


// Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4));


// Задание 3
const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '));


// Задание 4
const arr4 = [];

for (let i = 0; i < 3; i++) {
    const innerArr = [];

    for (let j = 0; j < 3; j++) {
        innerArr.push(1);
    }

    arr4.push(innerArr);
}

console.log(arr4);


// Задание 5
const arr5 = [1, 1, 1];

arr5.push(2, 2, 2);

console.log(arr5);


// Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];

arr6.sort();
arr6.pop();

console.log(arr6);


// Задание 7
const arr7 = [9, 8, 7, 6, 5];

const userNumber = Number(prompt('Угадайте число'));

if (arr7.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}


// Задание 8
const str = 'abcdef';

console.log(str.split('').reverse().join(''));


// Задание 9
const arr9 = [[1, 2, 3], [4, 5, 6]];

console.log(arr9.flat());


// Задание 10
const arr10 = [2, 5, 7, 1, 9];

for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}


// Задание 11
function getSquares(numbers) {
    return numbers.map(number => number ** 2);
}

console.log(getSquares([1, 2, 3, 4]));


// Задание 12
function getWordLengths(words) {
    return words.map(word => word.length);
}

console.log(getWordLengths(['hello', 'world', 'js']));


// Задание 13
function getNegativeNumbers(numbers) {
    return numbers.filter(number => number < 0);
}

console.log(getNegativeNumbers([1, -2, 3, -4, 5]));


// Задание 14
const randomNumbers = [];
const evenNumbers = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomNumbers.push(randomNumber);

    if (randomNumber % 2 === 0) {
        evenNumbers.push(randomNumber);
    }
}

console.log(randomNumbers);
console.log(evenNumbers);


// Задание 15
const arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}

const sum = arr15.reduce((total, number) => total + number, 0);
const average = sum / arr15.length;

console.log(arr15);
console.log(average);