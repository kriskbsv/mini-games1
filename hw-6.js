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

const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];

function startQuiz() {
    let correctAnswers = 0;

    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = prompt(
            `${quiz[i].question}\n${quiz[i].options.join("\n")}`
        );

        if (Number(userAnswer) === quiz[i].correctAnswer) {
            correctAnswers++;
        }
    }

    alert(
        `Вы ответили правильно на ${correctAnswers} из ${quiz.length} вопросов!`
    );
}

function reverseText() {
    let userInput = prompt("Введите текст для переворота:");
    let reversedText = userInput.split("").reverse().join("");
    alert(`Перевернутый текст: ${reversedText}`);
}

// Задание 1

console.log("js".toUpperCase());


// Задание 2

function filterStrings(array, startString) {
    return array.filter((item) =>
        item.toLowerCase().startsWith(startString.toLowerCase())
    );
}

console.log(filterStrings(["JavaScript", "Java", "Python", "PHP"], "ja"));


// Задание 3

const number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));


// Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


// Задание 5

function showRandomNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

showRandomNumber();


// Задание 6

function getRandomArray(num) {
    const result = [];

    for (let i = 0; i < Math.floor(num / 2); i++) {
        result.push(Math.floor(Math.random() * (num + 1)));
    }

    return result;
}

console.log(getRandomArray(10));


// Задание 7

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(3, 8));


// Задание 8

console.log(new Date());


// Задание 9

const currentDate = new Date();
const futureDate = new Date(currentDate);

futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate);


// Задание 10

function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const days = [
        "воскресенье", "понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekDay = days[date.getDay()];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.
Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));