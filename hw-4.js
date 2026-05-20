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

//задание 1 

function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

//задание 2
 
function isEven(n) {
    if (n % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}

//задание 3

function showSquare(number) {
    console.log(number * number);
}

showSquare(5); 

function getSquared(number) {
    return number * number;
}

let result = getSquared(5);
console.log(result);

//задание 4

function userAge() {
    let age = Number(prompt("Введите ваш возраст"));

    if (age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}

userAge();

//задание 5

function multiplyNumbers(a, b) {
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        return "Одно или оба значения не являются числом";
    }

    return a * b;
}

console.log(multiplyNumbers(5, 3));
console.log(multiplyNumbers("2", "4"));
console.log(multiplyNumbers("hello", 5));

//задание 6

function isItNumber(num) {
    let number = Number(num);

    if (isNaN(number)) {
        return "Переданный параметр не является числом";
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
}

console.log(isItNumber(3));
console.log(isItNumber("5"));
console.log(isItNumber("abc"));

//задание 7

const circle1 = {
    radius: 5,

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());