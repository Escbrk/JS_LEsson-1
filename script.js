// const shouldRenew = confirm('Wanna continue subscription?');
// console.log(shouldRenew);

// let quantity = prompt('количество товара: ')
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity)

// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// // salary = Number(salary);
// // console.log(salary.toFixed());
// console.log(salary);
// console.log(typeof salary);

// console.log(Math.PI.toFixed(2));

// const base = 2;
// const power = 5;

// // const result = Math.pow(base, power)
// console.log(base ** power);

// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// let power = prompt('Давай степень')

// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);25

// console.log(parseInt(Math.random() * (50 - 30) + 30));
// console.log(Math.random() * (max - min) + min);

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = `${firstName} ${lastName}`;

// console.log(fullName);

// const room = 716;
// const type = 'VIP';

// // const welcomeMsg = 'Гость ' + fullName + ' поселяется в ' + type + ' номер' + room;
// const welcomeMsg = `Гость ${fullName} поселяется в ${type} номер ${room}`;

// console.log(welcomeMsg);

// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();

// let brand = 'Samsung';
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'samSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// const blacklistedWorld1 = 'спам';
// const blacklistedWorld2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой неделе, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.toLowerCase().includes(blacklistedWorld1, blacklistedWorld2));
// console.log(string2.toLowerCase().includes(blacklistedWorld2, blacklistedWorld2));
// console.log(string3.toLowerCase().includes(blacklistedWorld2, blacklistedWorld2));

// console.log(4 && 'hello');
// console.log(false || 0 || null || 5 || 10);
// console.log(!true);

// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, number > x1 && number < x2);
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, number < x1 || number > x2);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат?', canOpenChat);

// const sub = 'pro';
// const canAccesContent = sub === 'pro' || sub === 'vip';
// console.log('Есть доступ к контенту?', canAccesContent);

// if (5 > 30) {
//     console.log('qweqwe');
// }

// if (5 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }

// const salary = 1500;

// if (salary <= 500) {
//     console.log('Level 1')
// } else if(salary > 500 && salary <= 1500) {
//     console.log('Level 2')
// } else if (salary > 1500 && salary <= 3000) {
//     console.log('Level 3');
// } else {
//     console.log('Level 4');
// }

// const balance = 1000;
// // let message;

// // if (balance > 0) {
// //     message = 'Позитивный баланс';
// // } else {
// //     message = 'Негативный баланс';
// // }

// // console.log(message);

// const message = balance > 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(message);

// const b = 10;

// if (true) {
//     console.log(b)

//     var a = 5;
// }

// console.log(a);

// const stars = 1;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;

//     case 3:
//         price = 50;
//         break;

//     case 4:
//         price = 70;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;

//     case 3:
//     case 4:
//         price = 30;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// const options = 1;
// let message;

// switch (options) {
//     case 1:
//         message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе';
//         break;

//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//         break;

//     case 3:
//         message = 'Посылка будет отправлена сегодня';
//         break;

//     default:
//         message = 'Вам перезвонит менеджер';
// }

// console.log(message);

// for (let i = 0; i <= 10; i += 1) {
//     console.log(i);
// }

// console.log();

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let a = 10;
// const b = a++;

// console.log(a)
// console.log(b);

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     totalSalary += salary;

// }
//     console.log('totalSalary: ', totalSalary);

// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//         console.log('Четное: ', i);
//         total += i;
//     }
// }

// console.log('total: ', total);

// let balance = 10000;
// const payment = 2000;

// console.log(
//     `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (balance >= payment) {
//     console.log('ok');
//     balance -= payment;

//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена!');

// 🍎
// 🍒

// const apple = '🍎';
// const appleQuantity = 8;
// const applePrice = 34;
// const appleMessage = `У нас есть ${appleQuantity} ${apple}, cost: ${applePrice * appleQuantity}`;
// console.log(appleMessage);

// const cherry = '🍒';
// const cherryQuantity = 3;
// const cherryPrice = 72;
// const cherryMessage = `У нас есть ${cherryQuantity} ${cherry}, cost: ${cherryPrice * cherryQuantity}`;
// console.log(cherryMessage);

// const totalMinutes = 1441;
// const hrs = Math.floor(totalMinutes / 60);
// const mins = totalMinutes % 60;

// const result = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
// console.log(result);

// const incomingValue = 0;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// const value = 10;

// if (value === 10) {
//     console.log('value is 10!!');
// }

// if (value === 10) {
//      console.log('value is 10!!');
// } else {
// console.log("value is't 10!");
// }

// const value = 10;

// if (value === 1) {
//     console.log('1');
// } else if (value >= 10 && value <= 20) {
//     console.log('2!');
// } else {
//     console.log('3');
// }

// const value = 4;

// switch (value) {
//     case 1:
//         console.log(1);
//         break;

//     case 2:
//         console.log(2);
//         break;

//     case 3:
//         console.log(3);
//         break;

//     case 4:
//         console.log(4);
//         break;

//     default:
//         console.log('default');
//         break;
// }

// const age = 25;
// let msg = age >= 18 && age <= 30 ? 'Вы допущены!' : 'Вы не допущены!';

// console.log(msg);

// let number = 10;

// if (true) {
//     let number = 20;
//     if (true) {
//         number = 30;
//     }
// }

// console.log(number);

// for (let i = 1; i <= 10; i += 1) {
//     // if (i === 5) {
//     //     continue;
//     //     // break;
//     // }
//     // if (i === 8) {
//     //     continue;
//     // }

//     // if (i % 2 === 0) {
//     //     console.log(i);
//     // }
// }

// const PASSWORD = '12345';
// let userPassword = prompt('Enter a password');

// // if (PASSWORD === userPassword) {
// //     alert('Welcome')
// // } else {
// //     alert('Wrong password')
// // }

// while (PASSWORD !== userPassword) {
//     userPassword = prompt('Wrong password! Try again!!!');
// }
// alert('Welcome');

// let i = 0;

// do {
//     console.log(i);
//     i += 1;
// } while (i <= 10);

// const message = prompt('Enter color').toLowerCase();
// // const color = Number(message);
// let action;

// switch (message) {
//     case 'red':
//         action = 'STOP';
//         break;

//     case 'yellow':
//         action = 'Ready';
//         break;
//         action = '';

//     case 'green':
//         action = 'Go';
//         break;

//     default:
//         action = 'Be careful';
//         break;
// }

// console.log(action);

// function check(question, answer) {
//     console.log(question, answer);
//     const userAnswer = prompt(question).toLowerCase();
//     return userAnswer === answer;
// }

// console.log(check('Хотя не самолет, а крылатый, без крыльев не может работать!', 'ветряк'));

// console.log(check('Через воду он проводит, а сам с места век не сходит!', 'мост'));

// console.log('1' != 1);

// console.log('P'.charCodeAt());
// console.log('a'.charCodeAt());

// const quantity = Number(prompt('text your variant'));22
// console.log(quantity);
// console.log(typeof quantity);

// ___________________________________________

// let elementWidth = '50px';

// elementWidth = Number.parseInt(elementWidth);
// console.log('element Width', elementWidth);

// let elementHeight = '200.74px';

// elementHeight = Number.parseFloat(elementHeight);
// console.log('element Height', elementHeight);

// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

// ___________________________________________

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// console.log(base ** power);

// ___________________________________________

// const base = Number(prompt('Введи число: '));
// console.log(base)
// const power = Number(prompt('Введи степень: '));
// console.log(power);

// console.log(base ** power);

// ___________________________________________

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue', 'green'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);

// document.body.style.backgroundColor = color;

// ___________________________________________

// let brand = prompt('Text brand:')
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase()
// console.log(brand)

// ___________________________________________

const x1 = 10;
const x2 = 30;

const number = 50;

console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1);
console.log(`Число ${number} попадает в отрезок после ${x2}`, number > x2);
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, number > x1 && number < x2);
console.log(
    `Число ${number} попадает в отрезок до ${x1} или после ${x2}`,
    number < x1 || number > x2
);

// ___________________________________________

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;

console.log('Можео открыть чат? ', canOpenChat);

// ___________________________________________

const sub = 'vip';
console.log(sub);

const canAccesContent = sub.toLowerCase() === 'pro' || sub.toLowerCase() === 'vip';
console.log('Есть доступ?', canAccesContent);

// ___________________________________________

const balance = 1000
let message

