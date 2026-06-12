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

function playRockPaperScissors() {

    let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

    const choices = ["камень", "ножницы", "бумага"];

    if (!choices.includes(userChoice)) {
    alert("Некорректный ввод! Нужно ввести: камень, ножницы или бумага");
    return;
   }

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    alert(`Компьютер выбрал: ${computerChoice}`);

    if (userChoice === computerChoice) {
        alert("Ничья!");
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        alert("Вы выиграли! 🎉");
    } else {
        alert("Вы проиграли. Попробуйте снова!");
    }
}

// Задание 1

const peopleForSort = [
    { name: "Глеб", age: 29 },
    { name: "Анна", age: 17 },
    { name: "Олег", age: 7 },
    { name: "Оксана", age: 47 }
];

console.log(peopleForSort.sort((a, b) => a.age - b.age));


// Задание 2

function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === "male";
}

function filter(array, ruleFunction) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: "Глеб", gender: "male" },
    { name: "Анна", gender: "female" },
    { name: "Олег", gender: "male" },
    { name: "Оксана", gender: "female" }
];

console.log(filter(people, isMale));


// Задание 3

const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, 30000);


// Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log("Привет, Глеб!");
});


// Задание 5

function delayForSecondTask5(cb) {
    setTimeout(() => {
        console.log("Прошла одна секунда");

        if (cb) {
            cb();
        }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecondTask5(() => {
    sayHi("Глеб");
});