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