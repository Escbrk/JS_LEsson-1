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

//? ___________________________________________

// let elementWidth = '50px';

// elementWidth = Number.parseInt(elementWidth);
// console.log('element Width', elementWidth);

// let elementHeight = '200.74px';

// elementHeight = Number.parseFloat(elementHeight);
// console.log('element Height', elementHeight);

// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

//? ___________________________________________

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// console.log(base ** power);

//? ___________________________________________

// const base = Number(prompt('Введи число: '));
// console.log(base)
// const power = Number(prompt('Введи степень: '));
// console.log(power);

// console.log(base ** power);

//? ___________________________________________

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue', 'green'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);

// document.body.style.backgroundColor = color;

//? ___________________________________________

// let brand = prompt('Text brand:')
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase()
// console.log(brand)

//? ___________________________________________

// const x1 = 10;
// const x2 = 30;

// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}`, number > x2);
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, number > x1 && number < x2);
// console.log(
//     `Число ${number} попадает в отрезок до ${x1} или после ${x2}`,
//     number < x1 || number > x2
// );

// //? ___________________________________________

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Можео открыть чат? ', canOpenChat);

// //? ___________________________________________

// const sub = 'vip';
// console.log(sub);

// const canAccesContent = sub.toLowerCase() === 'pro' || sub.toLowerCase() === 'vip';
// console.log('Есть доступ?', canAccesContent);

// //? ___________________________________________

// const balance = 1000
// let message

//? ___________________________________________

// const balance = 1000;

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс'; //! Тернарный оператор

// /* Он заменяет цепочку if -> else

//     if (balance >= 0) {
//     message = 'Позитивный баланс'
//     } else {
//     message = 'Негативный баланс'
//     }

// */
// console.log(message);

//? ___________________________________________

// const stars = 1;
// let price;

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

//? ___________________________________________

// const option = 1;
// let message = ' ';

// switch (option) {
//     case 1:
//         message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
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

//? ___________________________________________

// for (let i = 0; i <= 10; i += 1) {
//     console.log(i)
// }
// console.log('qweqwe')

//? ___________________________________________

// const minSalary = 500;
// const maxSalary = 5000;

// const employees = 6;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП Работника номер ${i} - `, salary);
//     totalSalary += salary;
// }

// console.log('totalSalary: ', totalSalary);

//? ___________________________________________

// const min = 0;
// const max = 7;
// let total = 0;

// for (let i = min; i <= max; i += 1) {

//     if (i % 2 !== 0) {
//         console.log('Не четное: ', i)
//         continue
//     }

//     console.log('Четное: ', i);
//     total += i;
// }

// console.log(total);

//? ___________________________________________

// let balance = 10000;
// const payment = 2000;

// console.log(
//     `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (payment <= balance) {
//     balance -= payment;
//     console.log('Все хорошо, снимаем деньги...   Спасибо за покупку!');
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('На счету недостаточно средств для проведения операции');
// }

// console.log('Операция завершена');

//? ___________________________________________

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

/*

    ЕЩЕ ОДИН ВАРИАНТ РЕШЕНИЯ ЗАДАЧИ

if (totalSpent < 100) {
    console.log('У вас еще нет партнерской ссылки');
} else if (totalSpent >= 100 && totalSpent <= 1000) {
    console.log('Бронзовый партнер, скидка 2%');
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent <= 5000) {
    console.log('Серебряный партнер, скидка 5%');
    discount = 0.05;
} else {
    console.log('Золотой партнер, скидка 10%');
    discount = 0.1;
}

*/

// if (totalSpent >= 100 && totalSpent <= 1000) {
//     console.log('Бронзовый партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent <= 5000) {
//     console.log('Серебряный партнер, скидка 5%');
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('Золотой партнер, скидка 10%');
//     discount = 0.1;
// } else {
//     console.log('У вас еще нет партнерской ссылки');
// }

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
// console.log(payment);

// payment -= payment * discount
// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);

//? ___________________________________________

// const btnAdd = document.querySelector('button[data-add]');
// const btnReset = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEl = document.querySelector('.js-output span');

// console.log(outputEl);

// console.log(btnAdd);
// console.log(valueInput);

// let total = 0;

// console.dir(btnAdd);
// console.dir(btnAdd.textContent);
// btnAdd.textContent = 'qweqwe'

// btnAdd.addEventListener('click', function () {
//     console.log('click hehehe');

//     const value = Number(valueInput.value);

//     console.log(typeof value, value);

//     total += value;

//     // outputEl.textContent = `Сумма: ${total}`;
//     outputEl.textContent = total;
//     valueInput.value = '';
// });

// btnReset.addEventListener('click', function () {
//     total = 0
//     outputEl.textContent = total;
// });

/*  //!Еще один вариант записи функции
//*      btnAdd.addEventListener('click', () => {
//*          console.log('click hehehe');
//*      })
*/

//? ___________________________________________

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
//     // Change code below this line
//     if (totalPrice > customerCredits) {
//         message = 'Insufficient funds!';
//         console.log(message);
//     } else {
//         customerCredits -= totalPrice;
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//         console.log(message);
//     }
//     // Change code above this line
//     return message;
// }

// makeTransaction(3000, 5, 23000);

//? ___________________________________________

// const clients = ['Mango', 'Poly', 'Ajax', 'Alex'];

// console.log(clients);

// clients[0] = 'Pablo'
// clients[1] = 'Escobar'
// console.log(clients);

// console.log(clients.length);

// const lastElementIndex = clients.length - 1
// console.log(lastElementIndex);
// console.log(clients[lastElementIndex]);
//? ___________________________________________
// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);
// }

// for (const client of clients) {
//     console.log(client);
// }

// const string = 'JavaScript'

// for (const charecter of string) {
//     console.log(charecter);
// }
//? ___________________________________________
// const clientNameToFind = 'Poly'
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = 'Клиент с таким именем есть в базе данных!'
//         break
//     }
//     // message = 'Клиента с таким именем нету в базе данных!';    //* Или задать значение сразу при создании переменной или записать ее сразу после цыкла for
// }

// console.log(message);
//? ___________________________________________
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }

//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }
//? ___________________________________________

// const a = ['Mango']
// const b = a

// console.log(a);
// console.log(b);

// a.push('Poly')
// console.log(a);
// console.log(b);

// a.push('Ajax')
// console.log(a);
// console.log(b);

//? ___________________________________________

// const name = 'Mango'
// console.log((name.split('')));

// const message = 'JavaScript это интересно';
// console.log(message.split(' '));

// const words = ['JavaScript', 'это', 'интересно'];

// console.log(words.join(''));
// console.log(words.join(' '));
// console.log(words.join('-'));

//? ___________________________________________

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.indexOf('Poly'));
// console.log(clients.indexOf('Monkong'));

// console.log(clients.includes('Poly'));
// console.log(clients.includes('Monkong'));

//? ___________________________________________

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is a red fruit`);
// }

//? ___________________________________________

// const numbers = []

// numbers.push(1)
// console.log(numbers)

// numbers.push(2);
// console.log(numbers);

// numbers.push(3);
// console.log(numbers);

// numbers.push(4);
// console.log(numbers);

// numbers.push(5);
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

//? ___________________________________________

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3));
// console.log(clients.slice());
// console.log(clients.slice(1));
// console.log(clients.slice(2));

//? ___________________________________________

// const scores = [1, 2, 3, 4, 5];

// const deletedScores = scores.splice(0, 3)

// console.log(scores);
// console.log(deletedScores);

//? ___________________________________________

// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple');
// console.log(colors);
// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors);

//? ___________________________________________

// const languages = ['C', 'C++', 'Java', 'JavaScript'];
// console.log(languages);

// languages.splice(1, 1, 'Python')
// console.log(languages);

// languages.splice(2, 1, 'C#', 'Swift', 'Go')
// console.log(languages);

//? ___________________________________________
//! Метод concat()

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients)
// console.log(allClientsWithOldFirst);

// const allClientsWithNewFirst = newClients.concat(oldClients)
// console.log(allClientsWithNewFirst);

// console.log(oldClients);
// console.log(newClients);

//? ___________________________________________
//! Функции

// function multiply(x, y, z) {
//     console.log('Код до return выполняется как обычно');

//     return x * y * z;

//     console.log('Этот лог никогда не выполнится, он стоит после return');
// }

// let result = multiply(2, 3, 5);
// console.log(result)

// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
// }

// console.log('Лог до вызова функции multiply');
// multiply(2, 3, 5); // Результат умножения равен 30
// console.log('Лог после вызова функции multiply');

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1
// count(3, 6)

//? ___________________________________________
//! Псевдомассив arguments

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120
// console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//? ___________________________________________
//! Преобразование псевдомассива

// function fn() {
//     const args = Array.from(arguments);
// }

// function fn(...args) {
//     console.log(args);
// }

// fn(1, 2, 3, 4, 'text')

// console.log(fn);

//? ___________________________________________
//! Паттерн «Ранний возврат»
//* Вот это:

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log('Для проведения операции введите сумму больше нуля');
//     } else if (amount > balance) {
//         console.log('Недостаточно средств на счету');
//     } else {
//         console.log('Операция снятия средств проведена успешно');
//     }
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

//*Можно зпменить вот этим:

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log('Для проведения операции введите сумму больше нуля');
//         return;
//     }

//     if (amount > balance) {
//         console.log('Недостаточно средств на счету');
//         return;
//     }

//     console.log(`Операция снятия средств проведена: -${amount}, у вас осталось: ${balance - amount} кредитов`);
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);
// withdraw(155, 200)
// withdraw(200, 200);

//? ___________________________________________
//! Функциональное выражение

//* Объявление функции (function declaration):
// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
// }

// multiply(2, 5, 6)

//* Функциональное выражение (function expression):
// const multiply = function (x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
// }

// multiply(5, 6, 10)

//? ___________________________________________
//! Стек вызовов

// function fnA() {
//     console.log("Лог внуртри функции fnA до вызова fnB");
//     fnB()
//      console.log("Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//     console.log("Лог внутри функции fnB");
// }

// console.log("Лог перед вызовом fnA");
// fnA();
// console.log("Лог после вызова fnA");

//? ___________________________________________

// function bar() {
//     console.log('bar');
// }

// function baz() {
//     console.log('baz');
// }

// function foo() {
//     console.log('foo');
//     bar();
//     baz();
// }

// foo();

//? ___________________________________________
//! Массивы

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// console.table(friends)
// // console.log(friends.length);
// console.log(friends[2]);

// friends[1] = 'qweqwe'
// friends[4] = 'qweqweqwe'
// console.table(friends);

// const lastIndex = friends.length - 1
// console.log(lastIndex);

//? ___________________________________________
//! Передача по значению

// let a = 10
// let b = a

// console.log(a);
// console.log(b);

// a = 20

// console.log(a);
// console.log(b);

//! Передача по ссылке

// const a = [1, 2, 3]
// const b = a

// console.log('a', a);
// console.log('b', b);

// a[0] = 500

// console.log('a', a);
// console.log('b', b);
// console.log(a === b); // true

// console.log([1, 2, 3] === [1, 2, 3]); // false

//? Перебор массива:

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// // console.table(friends);

// for (let i = 0; i < friends.length; i += 1) {
//     // console.log(friends[i]);
//     friends[i] += `-${i + 1}`
// }

// for (const friend of friends) {
//     console.log(friend);
// }

// console.table(friends);

//? ___________________________________________

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// // for (let i = 0; i < cart.length; i += 1) {
// //     console.log(cart[i]);

// //     total += cart[i]
// // }
// //* Задачка без налога:
// // for (const value of cart) {
// //     total += value
// // }

// //* Задачка + такс:
// for (let i = 0; i < cart.length; i += 1) {
//     // cart[i] = Math.round(cart[i] * 1.05)
//     cart[i] *= 1.05

//     total += cart[i]
// }

// console.log('Total $:', total.toFixed(2));

//? ___________________________________________

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// // for (let i = 0; i < numbers.length; i += 1) {
// //     // console.log(numbers[i]);
// //     if (numbers[i] % 2 === 0) {
// //         console.log('Четное');

// //         total += numbers[i]
// //     }
// // }

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(`${number} - четное`);
//         total += number;
//     }
// }
// //* Логика от обратного:
// // for (const number of numbers) {
// //     if (number % 2 !== 0) {
// //         console.log(`${number} - нечетное`);
// //         continue;
// //     }

// //     total += number;
// //     console.log(`${number} - четное`);
// // }

// console.log('Total:', total);

//? ___________________________________________

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1) {
//     if (logins[i] === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

//* ___________________________________________

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

//* ___________________________________________

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;

// console.log(message);

//? ___________________________________________
//! Найти самое маленькое число в массиве:

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0]

// for (const number of numbers) {

//     if (smallestNumber > number) {
//         smallestNumber = number
//     }
// }

// console.log(smallestNumber);

//! Найти самое большое число в массиве:

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (smallestNumber < number) {
//         smallestNumber = number;
//     }
// }

// console.log(smallestNumber);

//? ___________________________________________
//! Метод join():

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// // let string = '';

// // for (const friend of friends) {
// //     string += friend + ','
// // }
// // string = string.slice(0, string.length - 1);

// const string = friends.join(', ')
// console.log(string);

//? ___________________________________________

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // if (letter === letter.toLowerCase()) {
//     //     invertedString += letter.toUpperCase()
//     // } else {
//     //     invertedString += letter.toLowerCase()
//     // }

//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString:', invertedString);

//? ___________________________________________

// const title = 'Top 10 benefits of React framework';

// //* Старый метод:

// // const normalizedTitle = title.toLowerCase()
// // console.log(normalizedTitle.split(' ').join('-'));

// //*Цепочка вызова:

// const slug = title.toLowerCase().split(' ').join('-')

// console.log(slug);

//? ___________________________________________
//! Метод concat() :

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// //* Сшитие двух массивов:
// const numbers = array1.concat(array2)

// let total = 0

// for (const number of numbers) {
//     total += number
// }

// console.log(total);

//? ___________________________________________

// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
// console.table(cards);

// //* Удаление элемента в массиве (по индексу), метод (indexOf):

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// // console.log(cards.splice(index, 1)); // ['Карточка-3'] - удаленный элемент
// cards.splice(index, 1)
// console.log(index);

// console.table(cards);
// console.log(cards);

//* Добавление элемента в массиве (по индексу):

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.table(cards);

//* Обновление элемента в массиве (по индексу):

// const cardToUpdate = 'NEW Карточка-4';
// const index = 3;

// cards.splice(index, 1, cardToUpdate);

// console.table(cards);

//? ___________________________________________
//! ФУНКЦИИ
//? ___________________________________________

// const add = function (x, y) {
//     return x + y;
// };

// const r1 = add(2, 6);
// console.log('r1:', r1);
// const r2 = add(5, 10);
// console.log('r2:', r2);

//? ___________________________________________

// const fn = function (value) {
//     if (value < 50) {
//         return 'Меньше чем 50';
//     }
//     return 'Больше чем 50';
// };

// console.log('Result:', fn(48));
// console.log('Result:', fn(482));

//? ___________________________________________
/* 
    //*!    * - Стэк вызовов
    //*!    * - Stack trace и поиск ошибок
*/

// const fnA = function () {
//     console.log('Выполняется функция A');
// fnB();

// }

// const fnB = function () {
//     console.log('Выполняется функция B');
// fnC();

// };

// const fnC = function () {
//     console.log('Выполняется функция C');
//     console.log(value);
// };

// fnA()
// fnB()
// fnC()

//? ___________________________________________

// const calculateTotalPrice = function (items) {
//     console.log(items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

//? ___________________________________________

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

//? ___________________________________________

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// // const loginToFind = 'poly1scute';
// // let message = `Пользователь ${loginToFind} не найден`;

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`;

//     //! ___________________________________________

//     // for (const login of allLogins) {
//     //     if (login === loginToFind) {
//     //         return `Пользователь ${loginToFind} найден`;
//     //     }
//     // }

//     // return `Пользователь ${loginToFind} не найден`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

//? ___________________________________________

// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// };

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

//? ___________________________________________

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//     }

//     return invertedString;
// };

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));

//? ___________________________________________

// const title = 'Top 10 benefits of React framework';

// const slugify = function (string) {
//     return string.toLowerCase().split(' ').join('-')
// }

// console.log(slugify('qweqwe qweqwe qweqwe'));
// console.log(slugify('Hello my name is'));
// console.log(slugify('QweEQ aOLIIPki POKJ'));

//? ___________________________________________

// const fn = function () {
//     console.log(arguments);

// const args = Array.from(arguments)

//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//! ___________________________________________

// const fn = function (a, b, ...args) {
//     console.log(`${a} ${b}`);
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//? ___________________________________________

// const add = function (...args) {
//     console.log(args);

//     let total = 0

//     for (const arg of args) {
//         total += arg
//     }

//     return total
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

//? ___________________________________________

// const filterNumbers = function (array, ...args) {
//     console.log(array);
//     console.log(args);

//     const uniqueElements = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElements.push(element);
//             console.log(`${element} есть везде!`);
//         }
//     }

//     return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

//? ___________________________________________
//! Объекты
//? ___________________________________________

// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     isPublic: true,
//     rating: 8.38,
// };

// console.log(book);

// const user = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: {
//         country: 'Jamaica',
//         city: 'Ocho Rios',
//     },
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// console.log(user);

//? ___________________________________________
//! Свойства
//? ___________________________________________

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// playlist.price = 200;
// playlist.array = [1, 2, 3];
// playlist.location = {
//     country: 'Canada',
//     province: 'AB',
//     city: 'Calgary',
// };

// console.log(playlist);
// console.log(playlist);

// console.log(playlist.rating);
// console.log(playlist.name);
// console.log(playlist.trackCount);
// console.log(playlist.tracks);

const propertyName = 'tracks';

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

//! Короткая запись сво-тв:

// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//     username,
//     email,
// };

// console.log(signupData);

//! Вычисляемые св-ва

//* <input name='color' value='tomato' ></input>

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerDate = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerDate);

//! Ссылочный тип {} === {}

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.c = 100;

// console.log(a);
// console.log(b);

//! Массивы и функции это объекты

// const a = [1, 2, 3];

// a.hello = ':)'

// console.log(a);

// const fn = function () {
//     console.log('hello');
// };

// fn.hello = ':)'

// // console.log(fn);
// console.dir(fn);
// console.log(fn.hello);

//? ___________________________________________

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     // getName: function () {
//     //     console.log('This is the getName');
//     // },
//     // getName() {
//     //     console.log('This is the getName');
//     // },

//     changeName(newName) {
//         console.log('this inside changeName', this);

//         this.name = newName;
//     },

//     addTrack(track) {
//         this.tracks.push(track);
//     },

//     updateRating(newRating) {
//         this.rating = newRating;
//     },

//     getTrackCount() {
//         return this.tracks.length;
//     },
// };
// // playlist.getName();
// console.log(playlist);

// playlist.changeName('New cool name');

// playlist.addTrack('new track');
// console.log(playlist);

// playlist.updateRating(10);
// console.log(playlist);

//? ___________________________________________
//! Перебор через for...in и Object.keys | values | entries

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback)

// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]); // Доступ к значению

// }

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     console.log(value);
//     totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

// const keys = [];
// const values = [];
// const advert = {
//     service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line

//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key)
//         values.push(apartment[key])
//     }

//     // Change code above this line
// }

// console.log(keys);
// console.log(values);
//? ___________________________________________

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend.name);

//     friend.newprpo = 555;
// }

// console.table(friends);

//* Ищем друга по имени

// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         if (friend.name === name) {
//             return 'НАШЛИ';
//         }
//     }
//     return 'НЕ НАШЛИ';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

//? ___________________________________________

// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         // console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names;
// };

// console.log(getAllNames(friends));

//? ___________________________________________

// const getOnlineFriends = function (allFriends) {

//     const onlineFriends = []

//     for (const friend of allFriends) {

//         if (friend.online)
//            onlineFriends.push(friend)
//     }
//     return onlineFriends
// };

// console.log(getOnlineFriends(friends));

//? ___________________________________________

// const getOfflineFriends = function (allFriends) {

//     const offlineFriends = [];

//     for (const friend of allFriends) {
//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }

//     }
//     return offlineFriends
// };

// console.log(getOfflineFriends(friends));

//? ___________________________________________

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         }
//         friendsByStatus.offline.push(friend);
//     }

//     return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

//? ___________________________________________

// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// };

// console.log(Object.keys(x));
// console.log(Object.keys(x).length);

//? ___________________________________________
/* //! Операция spread (распыление)
 * //! Arrey.prototype.concat() и аналог через spread
 */

// const numbers = [1,2,3].concat([4,5,6], [7,8,9])

// const numbers = [0,5,10, ...[1, 2, 3], 4, 5];
// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

// console.log(numbers);

/*
 * //! Поиск самой малекьеой температуры (числа)
 */

// const temps = [18, 14, 12, 21, 17, 29, 24];
//!________________________________________

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log(a);
// console.log(b);

// a[0].x = 1000

// console.log(a);
// console.log(b);

//? ___________________________________________
//! Сшиваем несколько массивов в один через concat() и spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps) //* Метод concat()

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps]    //* Метод spread

// console.log(allTemps);

//? ___________________________________________
/* //! Распыление объектов
 * //! -Object.prototype/assign() и spread
 */

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b)  //* старый метод

// const c = {
//     ...a,
//     ...b,
// };

// console.log(c);

// const defaultSettings = {
//     theme: 'light',
//     showNotifications: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     // theme: 'dark',
//     showNotifications: false,
//     hideSidebar: true,
// };

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings
// }

// console.log(finalSettings);

//? ___________________________________________
/* //! Деструктуризация объекта
 * //! - Значение по умолчанию
 * //! - Имя переменной отличное от имени свойства
 */

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     // trackCount: 3,
// };

// const {
//     name,
//     rating,
//     tracks,
//     trackCount: numberOfTracks = 2,
//     author = 'unknown'
// } = playlist;

// // console.log(name, rating, tracks, numberOfTracks);
// console.log(numberOfTracks);
// console.log(author);

/*
 * //! Глубокая деструктуризация
 */

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'http//s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
// } = profile;

// console.log(followers);

//? ___________________________________________
//! Деструктуризация массивов

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;
// const [red, , blue] = rgb; // пропуск свойства
// console.log(red, blue);

// console.log(red, green, blue);

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// // const ratings = Object.values(authors)
// // console.log(Math.max(...ratings));

// const entries = Object.entries(authors);

// for (const /*entry*/ [name, rating] of entries) {
//     // const [name, rating] = entry

//     // const name = entry[0];
//     // const rating = entry[1];

//     console.log(name, rating);
// }

//? ___________________________________________
//! Операция rest (сбор)

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'http//s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// // const { name, tag, location, ...restProps } = profile;

// // console.log(profile);
// // console.log(restProps);

// const showProfileInfo = function (userProfile) {
//     const {
//         name,
//         tag,
//         location,
//         // avatar,
//         // stats: { followers, views, likes },
//         ...restProps
//     } = userProfile;

//     console.log(userProfile);
//     console.log(restProps);
// };

// showProfileInfo(profile);

//? ___________________________________________
//! EXAMPLE

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'http//s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const makeProfileMarkup = function (userProfile) {
//     const {
//         avatar = 'http://i.pravatar.cc/400?img=6',
//         name,
//         tag,
//         location = 'Planet Earth',
//         stats: { followers, views, likes },
//     } = userProfile;

//     return `<div>
//             <img src="${avatar}" alt="user avatar">
//             <p>
//                 ${name}
//                 <span>@${tag}</span>
//             </p>
//             <p>Location: ${location}</p>
//             <ul>
//                 <li>Followers: ${followers}</li>
//                 <li>Views: ${views}</li>
//                 <li>Likes: ${likes}</li>
//             </ul>
//         </div>`;
// };

// const markup = makeProfileMarkup(profile)

// console.log(markup);

// document.body.insertAdjacentHTML('afterbegin', markup)

//? ___________________________________________

//! CART_____________________

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             console.log(items[i]);
//             const { name } = items[i];

//             if (productName === name) {
//                 console.log('hello', productName);

//                 items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const { items } = this;

//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity
//             console.log(total);
//         }

//         return total;
//     },
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());
// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍐', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// cart.remove('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());
// // console.table(cart);

//! CART_____________________

//? ___________________________________________



// Декларативный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]