// задание 1 

let password = 'пароль';

let userInput = prompt('Введите пароль:');

if (userInput === password) {
    alert('Пароль верный!');
} else {
    alert('Пароль введен неправильно!');
} 

// задание 2

let c = 7;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 3

let d = 5;
let e = 10;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// задание 5

let monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Некорректный номер месяца');
}