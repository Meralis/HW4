//1
let result = '';

for (let i = 20; i <= 30; i += 0.5) {
    result += `${i} `;
}
console.log(result);

//2
const exchangeRate = 27;
let message = '';

for (let i = 10; i <= 100; i += 10) {
    let amount = i * exchangeRate;
    message += `${i}$=${amount}грн\n`;
}
alert(message.trim());

//3
const number = +prompt('Введіть ціле число');
let results = '';

if (Number.isInteger(number)) {
    for (let i = 1; i <= 100; i++) {
        if (i ** 2 <= number) {
            results += `${i} `;
        } else break;
    }
    alert(results.trim());
} else {
    alert('Вибачте, але ви ввели не ціле число');
}

//4
const num = +prompt('Введіть ціле число');

if (!Number.isInteger(num) || num <= 1) {
    alert('Вибачте, але ви ввели не ціле число, чи число <= 1');
} else {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            alert('Це не просте число');
            isPrime = false;
            break;
        }
    }
    if (isPrime) alert('Це просте число');
}

//5
const checkNumber = 81;

let isThirdDegree = false;
let degree = null;

for (let i = 0; 3 ** i <= checkNumber; i++) {
    if (3 ** i === checkNumber) {
        degree = i;
        isThirdDegree = true;
        break;
    }
}
if (isThirdDegree) {
    console.log(`Число ${checkNumber} можна отримати зводячи 3 у ${degree} ступінь`);
} else {
    console.log(`Число ${checkNumber} не можна отримати зводячи 3 у ступінь`);
}
