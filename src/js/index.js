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
//! CALLBACK

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100)
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
//   }

// fnA('qweqwe', fnB);

//? ___________________________________________
//! Функция doMath(a, b, callback)

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// doMath(2, 3, function (x, y) {
//     return x + y;
// });
// doMath(10, 8, function (x, y) {
//     return x - y;
// });

//? ___________________________________________
//! Отложеный вызов: регистрация событий

// const buttonRef = document.querySelector('.js-button');

// buttonRef.addEventListener('click', function () {
//     console.log('Клик по кнопке');
// });

// function addEventListener(eventType, callback) {
//     // Если
//     if (eventType === event) {
//         callback();
//     }
// }

//! Отложеный вызов: геолокация

// const onGetPositionSucces = function (position) {
//     console.log('Это вызов: onGetPositionSucces');
//     console.log(position);
// }

// const onGetPositionError = function (error) {
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSucces, onGetPositionError);

//! Отложеный вызов: интервалы

// const callback = function () {
//     console.log('Через 2 секунды внутри колбека в таймауте');
// }

// console.log('В коде перед таймаутом');

// setTimeout(callback, 2000)

// console.log('В коде после таймаута');

/* //! Отложеный вызов: http-запрос
 * //! - API URL: https://pokeapi.co/api/v2/pokemon
 */

// const onRequestSucces = function (response) {
//     console.log('Успешный запрос');
//     console.log(response);
// }

// fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()).then(onRequestSucces);

// console.log('перед fetch');
// console.log('после fetch');

//! Фильтр

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);
//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     console.log(filteredArray);
//     return filteredArray;
// };

// filter([1, 2, 3, 4, 5], function (value) {
//     return value >= 3;
// });
// filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 4;
// });

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// filter(fruits, function (fruit) {
//     return fruit.quantity >= 120;
// });

//! ЗАМЫКАНИЕ

// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(777);

// fnB();

// console.log(fnB);

//! Поварёнок (пример)

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);

//     };

//     return makeDish;
// };

// const mango = makeSheff('Mango')
// const poly = makeSheff('Poly')

// console.dir(mango);
// console.log(mango);

// mango('котлеты')
// poly('чай')

//! Округлятор 🤷‍♂️

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// // const rounder = function (number, places) {
// //     return Number(number.toFixed(places));
// // };

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder3(3.4567));
// console.log(rounder2(6.4567));

// rounder2(floatingPoint); //  3.46
// rounder3(floatingPoint); //  3.457

//! Приватные данные и функции - скрытие реализации, интерфейс

// const salatyManagerFactory = function (employeeName, baseSalary) {
//     let salaty = baseSalary;

//     return {
//         raise(amount) {
//             salaty += amount
//         },
//         lower(amount) {
//             salaty -= amount;
//         },
//         current() {
//             return `Текущая зарплата ${employeeName} - ${salaty}`;
//         },
//     };
// }
// const salaryManager = salatyManagerFactory('Mango', 5000)

// console.log(salaryManager.raise(222));
// console.log(salaryManager.current());

//? ___________________________________________

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//     value += num
// }

//     return {
//         add,
//         getValue() {
//             return value
//         }
//     };
// };

// const myLib = myLibFactory()

// console.log(myLib);

// console.log(myLib.getValue());
// myLib.add(10)
// console.log(myLib.getValue());

//? ___________________________________________
/*//! Стрелочные функции
 * //!      - Объявление
 * //!      - Явный и неявный возврат
 * //!      - Аргементы
 * //!      - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//     console.log(arguments);
//     console.log(a, b, c);
//     return a + b + c;
// };

// const addArrow = (...args) => {
//     console.log(args);
//     // return a + b + c;
// };

// const addArrow1 = (a, b, c) => 5 + 10 + 15;
// console.log(addArrow1());

// // console.log(add(5, 10, 15));

// console.log(addArrow(5, 10, 15));

//? ___________________________________________

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());

//? ___________________________________________

// const onGetPositionSucces = (position) => {
//     console.log('Это вызов: onGetPositionSucces');
//     console.log(position);
// }

// const onGetPositionError = (error) => {
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSucces, onGetPositionError);

//? ___________________________________________

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);
//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// };

// filter([1, 2, 3, 4, 5], value => value >= 3);
// filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// filter(fruits, fruit => fruit.quantity >= 120)

//? ___________________________________________

/*  //!  Синтаксис стрелочной функции
 *  //!     - с параметрами
 *  //!     - с одним параметром
 *  //!     - без параметров
 */

// const add = (a, b) => a + b;
// const logMessage = a => a;
// const great = () => 'Hello';

// console.log(add(5, 20));
// console.log(logMessage('Привет'));
// console.log(great());

// const showThis = () => {
//     console.log('this in showThis: ', this);
// }

// showThis()

// const user = { name: 'Mango' }
// user.showContext = showThis
// user.showContext();

//? ___________________________________________

// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullName);

//         const inner =  () => {
//             console.log('this in inner: ', this);
//         }

//         inner()
//     }

// }

// user.showName()

//? ___________________________________________

//? ___________________________________________

//! Явный и неявный возврат
//! Псевдомассив arguments

//!_____________
// const fn = feets => {
//     const daySpeed = 7
//     const nightSpeed = 2

//     let total = 0
//     let days = 0

//     while (total < feets) {
//         total += daySpeed
//         days += 1

//         if (total < feets) {
//             total -= nightSpeed
//         }
//     }

//     console.log(days);
//     return days
// }

// fn(128)
// fn(42);
// fn(31);

//!_______

// const objA = {
//     x: 5,
//     showX() {
//         console.log(this.x);

//         const objB = {
//             y: 10,
//             showThis() {
//                 console.log('this в objB.showThis: ', this);
//             }
//         }
//         objB.showThis()
//     }
// }

// objA.showX()

//!_______

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2)
// console.log(greaterThenTwo);

// const multByTwo = greaterThenTwo.map(num => num * 3)
// console.log(multByTwo);

// const sorted = multByTwo.sort((a, b) => a - b)
// console.log(sorted);

// const res = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b)

//     console.log(res);

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, isOnline: false, rank: 800 },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, isOnline: true, rank: 600 },
//     { id: 'player-4', name: 'Kiwi', timePlayed: 230, points: 48, isOnline: true, rank: 400 },
//     { id: 'player-3', name: 'Ajax', timePlayed: 150, points: 71, isOnline: false, rank: 100 },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, isOnline: true, rank: 400 },
// ];

// // const updatedPlayers = players.map(player => ({
// //     ...player,
// //     points: player.points + player.points * 0.1,
// // }));

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player =>
//     player.id === playerIdToUpdate ? { ...player, timePlayed: player.timePlayed + 50 } : player
// );

// console.table(updatedPlayers);

//? ___________________________________________
/*
 *  Методы массивов:
 *      - forEach
 *      - map
 *      - filter
 *      - find
 *      - every и some
 *      - reduce
 *      - sort
 *   - Чейнинг методов
 */

//!--------------------------------

/*
 *      Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 *          - Поэлементно перебирает оригинальный массив
 *          - Ничего не возвращает
 *          - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//     console.log('number', number);

//     array[index] = 20;
// });

// console.log(numbers);

/*
 *      Array.prototype.map()
 *          - Поэлементно перебирает оригинальрный массив
 *          - Не изменяет оригинальный массив
 *          - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubleNums = numbers.map(number => number * 2);

// console.log('doubleNums', doubleNums);

//? ___________________________________________

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false, rank: 800 },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true, rank: 600 },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true, rank: 400 },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false, rank: 100 },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true, rank: 400 },
// ];
// console.table(players);

//! Получаем массив имён всех игроков

// const playersNames = players.map(player => player.name);
// console.log('playersNames', playersNames);

// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

//! Увеличиваем кол-во поинтов каждого игрока на 10%

// const updatedPlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,
//     type: 'Gamer',
// }));
// console.table(updatedPlayers);

//! Увеличиваем кол-во часов игрока по ID

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player =>
//     // Тернарник
//     playerIdToUpdate === player.id ? { ...player, timePlayed: (player.timePlayed += 300) } : player
// );

// console.log(updatedPlayers);

/*
 *      Array.prototype.filter()
 *          - Поэлементно перебирает оригинальный массив
 *          - Возвращает новый массив (с элементами или пустой)
 *          - Добавляет в возвращаемый массив элементы которые удовлетворяют условию callback - функции
 *              - если callback вернул true элемент добавляется в возвращаемый массив
 *              - если callback вернул false элемент НЕ добавляется в возвращаемый массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const filterNumbers = numbers.filter(number => number < 15);
// console.log(filterNumbers);

// //! Получаем массив всех online игроков

// const onlinePlayers = players.filter(({ online }) => online);
// console.table(onlinePlayers);

// //! Получаем массив всех offline игроков

// const offlinePlayers = players.filter(({ online }) => !online);
// console.table(offlinePlayers);

// //! Получаем список хардкорных игроков с временем больше 250

// const hardcorePlayers = players.filter(({ timePlayed }) => timePlayed > 250)
// console.table(hardcorePlayers);

/*
 *      Array.prototype.find()
 *          - Поэлементно перебирает оригинальный массив
 *          - Возвращает первый элемент удовлетворяющий условию или undefined
 */
// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 10)
// console.log(number);

// const players = [
//     {
//         id: 'player-1',
//         name: 'Mango',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//         rank: 800,
//     },
//     {
//         id: 'player-2',
//         name: 'Poly',
//         timePlayed: 470,
//         points: 92,
//         online: true,
//         rank: 600,
//     },
//     {
//         id: 'player-3',
//         name: 'Kiwi',
//         timePlayed: 230,
//         points: 48,
//         online: true,
//         rank: 400,
//     },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//         rank: 100,
//     },
//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,
//         points: 48,
//         online: true,
//         rank: 400,
//     },
// ];

//! Ищем игрока по ID

// const playerIdToFind = 'player-3';

// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// // console.log(playerWithId);

// const findPlayerById = (allPlayers, playerId) => allPlayers.find(({ id }) => id === playerId);

// console.log(findPlayerById(players, 'player-1'));
// console.log(findPlayerById(players, 'player-4'));

//! Ищем игрока по имени

// const playerNameToFind = 'Mango';
// const playerWithName = players.find(({ name }) => name === playerNameToFind);
// console.log(playerWithName);

/*
 *      Array.prototype.every()
 *          - Поэлементно перебирает оригинальный массив
 *          - Возвращает true если все элементы массива удовлетворяют условию
 */

// const isAllOnline = players.every(({ online }) => online);
// console.log('isAllOnline', isAllOnline);

/*
 *      Array.prototype.some()
 *          - Поэлементно перебирает оригинальный массив
 *          - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

// const isAnyOnline = players.some(({online}) => online)
// console.log('isAnyOnline', isAnyOnline);

// const anyHardcorePlayers = players.some(({ timePlayed }) => timePlayed > 400)
// console.log('anyHardcorePlayers', anyHardcorePlayers);

/*
 *      Array.prototype.reduce()
 *          - Поэлементно перебирает оригинальный массив
 *          - Возвращает что угодно 🤯
 *          - Заменяет все на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total);

//? ___________________________________________
//! Считаем общую зарплату

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//     (total, value) => total + value
// );
// console.log('totalSalary', totalSalary);

//! Считаем общее кол-во часов

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//     (totalTime, player) => totalTime + player.timePlayed,
//     0
// );
// console.log('totalTimePlayed', totalTimePlayed);

//! Считаем общую сумму товаров корзины

// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//     (total, {price, quantity}) =>  total + price * quantity,
//     0
// );

// console.log(totalAmount);

//? ___________________________________________
//! Собираем все тего из твитов

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// tags.push(...tweet.tags);
// return tags;

//! Ведем статистику тегов

//! #1
// console.log(allTags);
// const tagsStats = allTags.reduce((acc, tag) => {

//     if (acc[tag]) {
//         acc[tag] += 1

//         return acc
//     }

//     acc[tag] = 1

//     return acc
// }, {})
// console.log(tagsStats);

//! #2
// console.log(allTags);
// const tagsStats = allTags.reduce((acc, tag) => {

//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});
// console.log(tagsStats);

//! #3
// console.log(allTags);
// const tagsStats = allTags.reduce((acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
// }), {});
// console.log(tagsStats);

//? ___________________________________________

/*
 *      Array.prototype.sort(callback(currentEl, nextEl){})
 *          - Сортитрует и ИЗМЕНЯЕТ оригинальный массив
 *          - По умолчанию:
 *              - сортирует по возрастанию
 *              - приводит элементы к строке и сортирует по [Unicode](http://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort()
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort()
// console.log('letters', letters);

/*
 *      compareFunction - функция сравнения (callback)
 *      Элементы массива сортируются в соответствии с её возвращенным значением
 *          - если compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *          - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *          - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на
 *          неизмененными по отношению друг к другу, но отсортирует их по отношению
 *          ко всем другим элементам
 */

// numbers.sort((currentEl, nextEl) => {
//     return currentEl - nextEl
// })

// console.log(numbers);

/*
 *      Как сделать копию массива, чтобы не сортировать оригинальный
 *          - Array.prototype.slice()
 *          - Операция spread
 */

// const copy = [...numbers]
// copy.sort()

// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);

// console.log([1, 2, 3, 4, 5].reverse());  // .reverse()

// console.log('ascSortedNumbers', ascSortedNumbers); // console.log('copy', copy);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('numbers', numbers);

//! Кастомная сортировка сложных типов

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, online: true },
// ];

//! По игровому времени
// const sortedByBestPlayer = [...players].sort(
//     (prevPlayer, nextPlayer) =>nextPlayer.timePlayed - prevPlayer.timePlayed
// );
// console.table(sortedByBestPlayer);
// console.log(sortedByBestPlayer);

// const sortedByWorstPlayer = [...players].sort(
//     (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );
// console.table(sortedByWorstPlayer);
// console.log(sortedByWorstPlayer);

// const sortedByName = [...players].sort((a, b) => {
//     const res = a.name[0] < b.name[0]

//     if (res) {
//         return -1
//     }
//     if (!res) {
//         return 1
//     }
// })
// console.table(sortedByName);
// console.log(sortedByName);

/*
 *      Array.prototype.flat(depth)
 *          - Разглаживает массив до указанной глубины
 *          - По умолчанию глубина 1
 */

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array);
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(3));

/*
 *      Array.prototype.flatMap(callback)
 *          - Комбинация map + flat
 */

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// //!_____________________________________________
// // const tags = tweets.map(t => t.tags).flat()

//! Цепочка
// const tags = tweets
//     .flatMap(tweet => tweet.tags)
//     .reduce(
//         (acc, tag) => ({
//             ...acc,
//             [tag]: acc[tag] ? acc[tag] + 1 : 1,
//         }),
//         {}
//     );
// console.log(tags);
// //!_____________________________________________

// const stats = tags.reduce(
//     (acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {}
// );
// console.log(stats);

//? ___________________________________________

/*
 *      Цепочки вызовов - chaining
 */

// const numbers = [1, 5, 2, 4, 3];

//! 💩способ____________
// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

//! Цепочка предыдущих трех
// const sorted = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);

// console.log(sorted);

/*
 *      Сортируем тех кто online по рангу
 *          - сначала фильтруем
 *          - потом сортируем
 */

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
//     { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
// ];

// const onlineAndSorter = players
//     .filter(player => player.isOnline)
//     .sort((prevPlayer, nextPlayer) => nextPlayer.rank - prevPlayer.rank);
// console.log(onlineAndSorter);

/*
 *      Chaining в методах объекта как jQuery
 */

// const element = {
//     class: '',
//     hovered: false,
//     chsngeClass(cls) {
//         this.class = cls;

//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;

//         return this;
//     },
// };

// element.toggleHovered().chsngeClass('open');
// console.log(element);

/*
 *      Lodash
 */

//! isEmpty()

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

/*
 *      get()
 *
 *          - user && user.location && obj.location.city
 *          - user?.location?.city
 */

// const user = {
//     name: 'mango',
//     location: {
//         coords: [1, 2],
//         city: 'Lviv',
//     },
// };

// console.log(_.get(user, 'location.city',  ));

//! Новый синтаксис
// console.log(user?.location?.city);

/*
 *      union()
 */

// console.log(_.union([1, 2, 3], [3, 4, 5]));

/*
 *      range()
 */

// console.log(_.range(3, 8, 1));

/*
 *      sortBy()
 */

// const users = [
//     { user: 'fred', age: 48 },
//     { user: 'barney', age: 36 },
//     { user: 'fred', age: 40 },
//     { user: 'barney', age: 34 },
// ];

// console.log(_.sortBy(users, user => user.age));

/*
 *      sum() и sumBy()
 */

// console.log(_.sum([1, 2, 3, 4, 5]));

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, online: true },
// ];

// console.log(_.sumBy(players, player => player.timePlayed));

/*
 *     uniq() и uniqBy()
 *     sortedUniq() и sortedUniqBy()
 */

/*
 *      random()
 */

/*
 *      min() и max()
 *      minBy() и maxBy()
 */

// console.log(_.minBy(players, player => player.timePlayed).name);

/*
 *      camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

// console.log(_.kebabCase('a b c'));

//?______________________________
// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37,
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34,
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24,
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21,
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27,
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38,
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39,
//     },
// ];

/*
 *      Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function () {} === function () {}: ',
//     function () {} === function () {}
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 *      Контекст (this)
 *          - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст
 *          - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно
 */

/*
 *      Как метод объекта. В контексте объекта
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag()

/*
 *      Вызов без контекста
 *          - В строгом режиме = undefined
 *          - Не в строгом режиме = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/*
 *      Как метод объекта, но объявлена как внешняя функция.
 *      В контексте объекта.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// showTag()

// const user = {
//     tag: 'Mango',
// };

// console.log('user', user);

// user.showUserTag = showTag;

// user.showUserTag();

/*
 *      Вызов без контекста, но объявнена как метод объекта
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 *      Вызов в callback-функциях
 */

// const xyz = user.showTag

// console.log(xyz);

// xyz()

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag)

/*
 *      Тренировка 1
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn();

/*
 *      Тренировка 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     }
// }

// book.showThis()
// const outerSHowThis = book.showThis
// outerSHowThis()

// const outerShowTitle = book.showTitle
// book.outerShowTitle()

// book.showTitle()

/*
 *      Тренировка 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     changeColor()

//     const sweater = {
//         color: 'teal'
//     }

//     sweater.updateColor = changeColor

//     sweater.updateColor('red')

//     return sweater.updateColor
// };

// const swapColor = makeChangeColor()
// swapColor('blue')

/*
 *      Тренировка 4
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         this.color = color;
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// // updateColor('yellow')

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// hat.updateColor('orange')
// console.log(hat);

/*
 *      Тренировка 5
 */

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

/*
 *      При передачи методов объектов как callback'ов - КОНТЕКСТ НЕ СОХРАНЯЕТСЯ          //!НЕТ АВТОМАТИЧЕСКОЙ ПРИВЯЗКИ КОНТЕКСТА
 *          //! counter.increment / counter.decrement как аргумент -> 💩  (не сохраняет контекст)
 */
// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

/*
 *      Методы:
 *                  call и apply - вызывают функцию сдесь и сейчас
 */

// const showThis = function (a, b, array) {
//     console.log(a, b, array);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// // showThis.call(objA, 12, 20, 30, 35);
// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);
// showThis.call(objA);

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// // changeColor.call(hat, 'orange');

// // console.log(hat);

// const sweater = {
//     color: 'green',
// };

// // changeColor.call(sweater, 'blue');
// // console.log(sweater);

// /*
//  *      bind - позволяет сделать копию функции с привязаным контекстом
//  */

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater)

// // console.log(changeHatColor());
// changeHatColor()
// changeSweaterColor()

/*
 *      counter
 */

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);

// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

//! Счетчик

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на -');

//     counter.decrement();
//     console.log(counter);

//     valueEl.textContent = counter.value
// });

// incrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на +');

//     counter.increment();
//     console.log(counter);

//     valueEl.textContent = counter.value;
// });

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

// decrementBtn.textContent = 'adawdawdadaw'

/*      //! План занятия:
 *      - Прототипное наследование
 *      - Прототип объекта и Object.create()
 *      - Создание объектов через new - функция-конструктор
 *      - Статические методы и свойства
 */

/*
 *      Прототип объекта
 *
 *          - Object.create()
 *          - [[Prototype]] и __proto__
 *          - Object.getPrototypeOf()
 *          - Собственные свойства и Object.prototype.hasOwnProperty()
 *          - Цепочка прототипов
 */

// const objC = {
//     z: 5,
// };
// console.log('objC', objC);

// const objB = Object.create(objC)
// objB.y = 2
// console.log('objB', objB);

// const objA = Object.create(objB)
// objA.x = 1
// console.log('objA', objA);

/*
 *      Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 *      Функции-конструкторы
 *          - Именование
 *          - Оператор new
 *          - Свойство Function.prototype
 */

//!     1. Если функция вызывается через new, создаётся пустой объект
//!     2. Функция вызывается в контексте созданного объекта,
//!         то есть в this записывается ссылка на него
//!     3. В свойство this.__proto__ записывается ссылка на объект Car.prototype
//!         то есть Car.prototype это ПРОТОТИП будущего объекта (экземпляра)
//!     4. Ссылка на объект возвращается в место вызова new Car

// const Car = function ({ brand, model, price } = {}) {
//     // const { brand, model, price } = config;

//     this.brand = brand;
//     this.model = model;
//     this.price = price;

// };

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :) ');
// }

// Car.prototype.changePrice = function (newPrice) {
//         this.price = newPrice;
//     };

// console.log(Car.prototype);

// Car.description = 'Класс описывающий автомобиль';

// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });
// console.log(myCar);
// myCar.sayHi();
// myCar.changePrice(10000)
// console.log(myCar);

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'Q3',
//     price: 50000,
// });
// console.log(myCar2);

// const myCar3 = new Car({
//     brand: 'Audi',
//     model: 'A6',
//     price: 65000,
// });
// console.log(myCar3);

//? ___________________________________________

// const User = function ({ email, password } = {}) {
//     (this.email = email), (this.password = password);
// };

// User.prototype.changeEmail = function (newEmail) {
//     this.email = newEmail;
// };
// User.prototype.changePassword = function (newPassword) {
//     this.password = newPassword;
// };

// const mango = new User({ email: 'mango@mail.com', password: 1111111 });
// // console.log(mango);

// mango.changeEmail('pahancheg@icloud.com');
// // console.log(mango);

// mango.changePassword('qweqwe123');

// console.log(mango);

//? ___________________________________________

//!     1. У каждого объекта есть свойство __proto__
//!     2. В этом свойстве лежит ссылка на его ПРОТОТИ, то есть другой объект
//!     3. При создании литерала объекта, в свойство __proto__ записывается ссылка на Функция.prototype

// const objA = {
//     x: 5,
// };

// console.log(objA.__proto__ === Object.prototype);    //! true

//!     4. Функция-конструктор это просто функция :)
//!     5. Всю магию делает оператор new
//!     6. Если функция вызывается через new, создаётся пустой объект
//!     7. Функция вызывается в контексте созданного объекта
//!     8. В свойство this.__proto__ записывается ссылка на объект Функция.prototype
//      this = Object.create(User.prototype)

//!     9. Ссылка на объект возвращается в место вызова new Функция()

//? ___________________________________________

/*
 *      Статические свойства и методы
 *          - Статические свойства и методы доступны только на самом конструкторе
 *          - В статических методах не нужен this
 */

// User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипах'

// User.logInfo = function (obj) {
//     console.log('User.logInfo -> obj', obj);
//     console.log('Почта: ', obj.email);
//     console.log('Пароль: ', obj.password);

// }

// User.logInfo(mango)

// console.dir(User);
// console.log(Math.round(5.1));
// console.log(Math.PI);

//? ___________________________________________

// const CounterPlugin = function ({
//     rootSelector,
//     initialValue = 0,
//     step = 1,
// } = {}) {
//     this._value = initialValue;
//     this._step = step;

//     this._refs = this._getRefs(rootSelector);
//     this._bindEvents();
//     this.updateValueUI()
// };
// CounterPlugin.prototype._getRefs = function (rootSelector) {
//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.incrementBtn = refs.container.querySelector('[data-increment]');
//     refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//     refs.value = refs.container.querySelector('[data-value]');

//     return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//     this._refs.incrementBtn.addEventListener('click', () => {
//         this.increment();
//         this.updateValueUI();
//     });

//     this._refs.decrementBtn.addEventListener('click', () => {
//         this.decrement();
//         this.updateValueUI();
//     });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//     this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
//     this._value += this._step;
// };
// CounterPlugin.prototype.decrement = function () {
//     this._value -= this._step;
// };

// new CounterPlugin({ rootSelector: '#counter1', step: 10, initialValue: 100 });
// new CounterPlugin({ rootSelector: '#counter2', step: 2 });

//? ___________________________________________

/*
 *      Классы
 *          - объявление
 *          - конструктор
 *          - методы
 *          - static
 *          - приватные свойства
 *          - синтаксис публичных свойств и методы классов
 *          - геттеры и сеттеры
 */

// class Car {
//     static description = 'Класс описывающий автомобиль';

//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }
//     // #test = 'test';
//     mySuperPublicField = 555;

//     constructor({ brand, model, price } = {}) {
//         console.log('выполняется конструктор');

//         this._brand = brand;
//         this._model = model;
//         this._price = price;
//     }

//     get price() {
//         return this._price;
//     }
//     set price(newPrice) {
//         this._price = newPrice;
//     }

//     get model() {
//         return this._model;
//     }
//     set model(newModel) {
//         this._model = newModel;
//     }

//     // changePrice(newPrice) {
//     //     this.price = newPrice;

//     //     // console.log(this.#test);
//     // }

//     set model(newModel) {
//         this._model = newModel;
//     }
//     // setModel(newModel) {
//     //     this.model = newModel;
//     // }

//     get model() {
//         return this._model;
//     }
//     // getModel() {
//     //     return this.model
//     // }
// }

// console.dir(Car);

// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance);

// carInstance.price = 20;

// console.log(carInstance);

// carInstance.model = 'Q7'
// console.log(carInstance);

/*
 *      Наследование
 *          - extends
 *          - super()
 */

// class Hero {
//     constructor({ name = 'Hero', xp = 0 } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }
//     gainXp(amount) {
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount;
//     }
// }

// // const mango = new Hero({ name: 'mango', xp: 1000 });

// class Warrior extends Hero {
//     constructor({ weapon, ...restProps } = {}) {
//         super(restProps);

//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} атакует используя ${this.weapon}`);
//     }
// }

// class Berserk extends Warrior {
//     constructor({ warcry, ...restProps } = {}) {
//         super(restProps);

//         this.warcry = warcry;
//     }

//     babyRage() {
//         console.log(this.warcry);
//     }
// }

// const ajax = new Berserk({
//     name: 'Ajax',
//     xp: 5000,
//     weapon: 'Axe',
//     warcry: 'Waaaaaaah!!',
// });
// console.log(ajax);
// ajax.babyRage();
// ajax.attack()
// ajax.gainXp(4000)

// class Mage extends Hero {
//     constructor({ spells = [], ...restProps } = {}) {
//         super(restProps);

//         this.spells = spells;
//     }

//     cast() {
//         console.log(`${this.name} что-то там кастует используя ${this.spells}`);
//     }
// }

// const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'Алебарда' });
// console.log(mango);

// mango.attack();

// const poly = new Mage({
//     name: 'Poly',
//     xp: 500,
//     weapon: ['Магический посох', 'FireBall'],
// });
// console.log(poly);
// poly.cast();
// poly.gainXp(19500);
// console.log(poly);

//? ___________________________________________

// console.log((document.querySelector('[data-value]').textContent = 'hi'));
// console.log(document.querySelector('div'));

// document.querySelector('[data-increment').textContent = 'Уменьшить';
// document.querySelector('[data-decrement]').textContent = 'Увеличить';

// // document.querySelector('[data-increment').innerHTML =
// //     '<div><a href="">Уменьшить</a></div>';

// // document.querySelector('div').remove();
// document.querySelector('div').append('hello');

//? ___________________________________________

/*
 *      План:
 *          - Объекты window и document
 *          - Поиск DOM-узлов с querySelector и querySelectorAll
 *          - Свойство textContent
 *          - Свойство "навигации" по DOM-узлам
 *          - Работа с classList и атрибутам
 *          - Создание узлов
 *          - Вставка узлов: appendChild, insertBefore, append, prepend и т.д.
 *          - Парс строки: innerHTML и insertAdjacentHTML
 */

/*
 *      document.querySelector(selector) и document.querySelectorAll(selector)
 *          selector - любой валидный CSS-селектор
 *
 *      Что возвращают?
 */

/*
 *      Document.querySelector* и Element.querySelector*
 */

// console.log(document.querySelector('.site-nav'));

// const navEl = document.querySelector('.site-nav');

// const navLinksEl = navEl.querySelectorAll('.site-nav__link');
// console.log(navEl);
// console.log(navLinksEl);

/*
 *      Свойства элемента (hero)
 *          - Изображение
 *          - Текст и textContent
 *      http://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const imageEl = document.querySelector('.hero__image');

const magicBtn = document.querySelector('.js-magic__btn');

// console.log('imageEl', imageEl);
// console.log(imageEl.src);
// imageEl.src =
//     'http://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// imageEl.alt = 'Это новый котик';

// const heroTitleEL = document.querySelector('.hero__title');
// console.log('heroTitleEL', heroTitleEL);

// heroTitleEL.textContent = 'Я сладкий пирожочек!';

/*
 *      Атрибуты
 *          - get( имя-атрибута )
 *          - set( имя-атрибута )
 *          - remove( имя-атрибута )
 *          - has( имя-атрибута )
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 *      Data-атрибуты
 */

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[0].dataset.action);

// magicBtn.addEventListener('click', () => {
//     const inputEl = document.querySelector('.js-input');
//     console.log(inputEl.valuel);
//     // inputEl.value = 'qweqweq'
// })

// console.log(new Date());

/*
 *      Интерфейс classList
 *          - add( класс )
 *          - remove( класс )
 *          - toggle( класс )
 *          - replace( старыйКласс, новыйКласс)
 *          - contains( класс )
 */

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// // navEl.classList.toggle('supep-cool')
// navEl.classList.add('qwe');
// navEl.classList.remove('site-nav');
// navEl.classList.replace('qwe', 'qweqwe');

// magicBtn.addEventListener('click', () => {
//     navEl.classList.toggle('supep-cool');
// });

// const currentPageUrl = '/index.html';

// const linkEl = document.querySelector(
//     `.site-nav__link[href='${currentPageUrl}']`
// );
// linkEl.textContent = 'hello'

// console.log(linkEl);

// linkEl.classList.add('site-nav__link--current');

/*
 *      Свойства "навигации" по DOM-узлам (взять список)
 */

// const navEl = document.querySelector('.site-nav');

// // const firstNavItemEl = navEl.querySelector('.site-nav__item')
// console.log(firstNavItemEl);

// console.log(navEl.firstElementChild);

/*
 *      Создание элементов
 *          - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 *      Создаем заголовок
 */
// const heroEl = document.querySelector('.hero');
// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Это заголовок страницы';
// console.log(titleEl);
// heroEl.insertBefore(titleEl, heroEl.firstElementChild);

/*
 *      Создаем изображение
 *          https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 *          valais-alpine-mountains-glacier
 */

/*
 *      Создаем и добавляем новый пункт меню
 */

// const imageEl = document.createElement('img');

// imageEl.src =
//     'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
// imageEl.alt = 'valais-alpine-mountains-glacier';
// imageEl.width = 340;
// // console.log(imageEl);

// // heroEl.appendChild(titleEl)
// // heroEl.appendChild(imageEl)
// heroEl.append(titleEl, imageEl);

// document.body.appendChild(imageEl);

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Личный кабинет';
// navLinkEl.href = '/profile';

// console.log(navItemEl);
// console.log(navLinkEl);

// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

// const navEl = document.querySelector('.site-nav');

// // navEl.appendChild(navItemEl)

// navEl.insertBefore(navItemEl, navEl.firstElementChild);

/*
 *      Создаем и добавляем коллекцию
 */

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'gray', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// console.log(buttonEl);
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color

//? ___________________________________________

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

//     elements.push(buttonEl)
// }

// console.log(elements);

// colorPickerContainerEl.append(...elements)

//? ___________________________________________

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
// });

// colorPickerContainerEl.append(...elements)

/*
 *      Пишем функцию для создания разметки колорпикера
 */

// const makeColorPickerOptions = options => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;

//         return buttonEl;
//     })
// }

// const elements = makeColorPickerOptions(colorPickerOptions)
// colorPickerContainerEl.append(...elements);

/*
 *      Создаем карточку продукта
 *          - В классе продукта может быть product--on-sale product--not-available
 */

// const product = {
//     name: 'Сервоприводы',
//     description:
//         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ut harum perspiciatis, mollitia consequuntur, dolor nam nihil, quidem porro adipisci facere excepturi eum culpa dolores!',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

/*
 *
 *
 *
 *
 *
 */

// const productContainerEl = document.querySelector('.js-products');

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2')
// nameEl.classList.add('product__name');
// nameEl.textContent = product.name

// const descrEl = document.createElement('p')
// descrEl.textContent = product.description
// descrEl.classList.add('product__descr')

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${product.price} кредитов`;
// priceEl.classList.add('product__price');

/*
 *      Пишем функцию для создания карточки продукта
 */

// productEl.append(nameEl, descrEl, priceEl)

// console.log(productEl);

/*
 *      События
 *          - Создание и удаление слушателей
 *          - Именование колбеков для слушателей
 *              - handle*: handleEvent или handleSubjectEvent
 *              - *Handler: eventHandler или subjectEventHandler
 *              - on*: onEvent или onSubjectEvent
 *          - Ссылочная идентичность колбеков
 *          - Объект события
 */

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//     console.log('Click');
// });

// function handleClick() {
//     console.log('Click');
// }

// function logMessage() {
//     console.log('Клик по целевой кнопке');
// }

// addListenerBtn.addEventListener('click', () => {
//     console.log('Вешаю слушателя на целевую кнопку');

//     // targetBtn.addEventListener('click', () => {
//     //     console.log('Клик по целевой кнопке');
//     // });

//     targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', () => {
//     console.log('Снимаю слушателя с целевой кнопки');

//     // targetBtn.removeEventListener('click', () => {
//     //     console.log('Клик по целевой кнопке');
//     // });

//     targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick() {
//         console.log('Клик по целевой кнопке');

// }

/*
 *      - Свойство submit
 *      - Действия браузера по умолчанию
 *      - Свойство elements
 *      - Класс FormData - http://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formElements = event.currentTarget.elements;

//     console.dir(formElements);

//     const mail = formElements.email.value;
//     const password = formElements.password.value;
//     const subscription = formElements.subscription.value;

//     const formData = new FormData(event.currentTarget)

//     console.log(formData);

//     formData.forEach((value, name) => {
//         console.log(value, name);
//     })
// }

/*
 *      Паттерн "Объект ссылок"
 *
 *      События
 *          - focus и blur
 *          - input и change
 *          - Чекбоксы и свойство checked
 */

// const refs = {
//     input: document.querySelector('.js-input'),
//     nameLabel: document.querySelector('.js-button > span'),
//     licenseCheckbox: document.querySelector('.js-license'),
//     btn: document.querySelector('.js-button'),
// };

// refs.input.addEventListener('focus', onInputFocus)
// refs.input.addEventListener('blur', onInputBlur)
// refs.input.addEventListener('change', onInputChange)
// refs.input.addEventListener('input', onInputChange);

// refs.input.addEventListener('input', onInputChange)

// function onInputFocus() {
//     console.log('Input получил фокус - событие focus');
// }

// function onInputBlur() {
//     console.log('Input потерял фокус - событие blur');
// }

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//     refs.nameLabel.textContent = event.currentTarget.value
// }

// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onLicenseChange(event) {
//     refs.btn.disabled = !event.currentTarget.checked
// }

/*
 *      Типы событий: keypress, keydown, keyup
 *          - Ограничения keypress
 *          - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress)
// refs.clearBtn.addEventListener('click', onClearOutput)

// function onKeypress(event) {
//     // console.log(event);
//     // console.log('event.key: ', event.key);
//     // console.log('event.code: ', event.code);

//     refs.output.textContent += event.key
// }

// function onClearOutput(event) {
//     refs.output.textContent = ' '
// }

/*
 *      События мыши
 *          - mouseenter и mouseleave (это ховер)
 *          - mouseover и mouseout
 *          - mousemove (chatty event - болтливое событие)
 *          - Долмат по координатам: http://nerdparadise.com/programming/javascriptmouseposition
 *          - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

//? ___________________________________________

/*
 *      1. Открыть и закрыть по кнопке: onModalOpen и onModalClose
 *      2. Закрыть по клику в бекдроп: onBackDropClick
 *      3. Закрыть по ESC: onEscapeKeypress
 *
 *      В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

// const refs = {
//     openModalBtn: document.querySelector('[data-action="open-modal"]'),
//     closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//     backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackDropClick);

// function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyPress);
//     document.body.classList.add('show-modal');
// }
// function onCloseModal() {
//     window.removeEventListener('keydown', onEscKeyPress);
//     document.body.classList.remove('show-modal');
// }

// // function onOpen_CloseToggle() {
// //     document.body.classList.toggle('show-modal');
// // }

// function onBackDropClick() {
//     if (event.target === event.currentTarget) {
//         onCloseModal();
//     }
//     // console.log(event.currentTarget);
//     // console.log(event.target);
// }

// function onEscKeyPress(event) {
//     if (event.code === 'Escape') {
//         onCloseModal();
//     }
// }

/*
 *      Всплытие событий
 *          event.target - целевой (исходный) элемент
 *          event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

// const refs = {
//     parent: document.querySelector('#parent'),
//     child: document.querySelector('#child'),
//     innerChild: document.querySelector('#inner-child'),
// };

// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.innerChild.addEventListener('click', onInnerChildClick);

// function onParentClick(evt) {
//     console.log('onParentClick');
//     console.log('onParentClick -> evt.target', evt.target);
//     console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
// }

// function onChildClick(evt) {
//     console.log('onChildClick');
//     console.log('onChildClick -> evt.target', evt.target);
//     console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
// }

// function onInnerChildClick(evt) {
//     console.log('onInnerChildClick');
//     console.log('onInnerChildClick -> evt.target', evt.target);
//     console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
// }

/*
 *      Делегирование событий
 *          - общий слушатель
 *          - фильтр цели клика
 */

// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     console.log(event.target.textContent);
// }

// /*
//  *      Код добавления кнопок
//  */

// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6

// addBtn.addEventListener('click', onAddBtnClick)

// function onAddBtnClick() {
//     const btn = document.createElement('button')
//     btn.textContent = `Кнопка ${labelCounter}`
//     btn.type = 'button'

//     container.appendChild(btn)
//     labelCounter += 1
// }

/*
 *      Делегирование
 *          - один из многих
 *          - несколько из многих и Set
 */

// const tags = document.querySelector('.js-tags');
// let selectedTag = null

// tags.addEventListener('click', onClick);

// function onClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return
//     }

//     const currentActiveBtn = document.querySelector('.tags__btn-active');

//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove('tags__btn-active');
//     }

//         // currentActiveBtn?.classList.remove('tags__btn-active');

//     const nextActiveBtn = evt.target
//     nextActiveBtn.classList.add('tags__btn-active');
//     selectedTag = nextActiveBtn.dataset.value
//     console.log(selectedTag);
// }

//? ___________________________________________

// const tags = document.querySelector('.js-tags');
// const selectedTags = new Set();

// tags.addEventListener('click', onClick);

// function onClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const btn = evt.target;
//     const isActive = btn.classList.contains('tags__btn-active');

//     if (isActive) {
//         selectedTags.delete(btn.dataset.value);
//     } else {
//         selectedTags.add(btn.dataset.value);
//     }

//     // selectedTags.push(evt.target.dataset.value);

//     btn.classList.toggle('tags__btn-active');

//     // if (btn.classList.contains('tags__btn-active')) {
//     //     btn.classList.remove('tags__btn-active');
//     // }
//     console.log(selectedTags);
// }

//? ___________________________________________
// import colorCardTpl from '../templates/color-card.hbs'
// console.log(colorCardTpl)

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#e91e63', rgb: '233,30,99' },
//     { hex: '#9c27b0', rgb: '156,39,176' },
//     { hex: '#673ab7', rgb: '103,58,183' },
//     { hex: '#3f51b5', rgb: '63,81,181' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#00bcd4', rgb: '0,188,212' },
//     { hex: '#009688', rgb: '0,150,136' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ff3b3b', rgb: '255,235,59' },
//     { hex: '#ff9800', rgb: '255,152,0' },
//     { hex: '#795548', rgb: '121,85,72' },
//     { hex: '#607d8b', rgb: '96,125,139' },
// ];

// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// function createColorCardsMarkup(colors) {
//     return colors
//         .map(({ hex, rgb }) => {
//             return `
//             <div class="color-card">
//                 <div class="color-swatch" data-hex="${hex}" data-rgb="${rgb}" style="background-color: ${hex};"></div>
//                 <div class="color-meta">
//                     <p>HEX: ${hex}</p>
//                     <p>RGB ${rgb}</p>
//                 </div>
//             </div>
//             `;
//         })
//         .join('');
// }

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function onPaletteContainerClick(e) {
//     const isColorSwatch = e.target.classList.contains('color-swatch');
//     if (!isColorSwatch) {
//         return;
//     }

//     const swatchEl = e.target;
//     const parentColorCard = swatchEl.closest('.color-card');

//     removeActiveCardStatus();
//     addActiveCardClass(parentColorCard)
//     setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//     document.body.style.backgroundColor = color;
// }

// function removeActiveCardStatus() {
//     const currentActiveCard = document.querySelector('.color-card.is-active');

//     if (currentActiveCard) {
//         currentActiveCard.classList.remove('is-active');
//     }
// }

// function addActiveCardClass(card) {
//     card.classList.add('is-active');
//  }

//? ___________________________________________

/*
 *      Chatty events (болтливые события)
 *      Приёмы throttle и debounce с lodash
 *      [Ленивая загрузка изображений] (https://web.dev/native-lazy-loading/)
 *          - Нативная с атрибутом loading
 *          - Бибиотека lazysizes
 */

/*
 *      Chatty events
 *      Приемы throttling и debouncing с Lodash
 */

/*
 *      Mousemove и throttle
 */

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// // window.addEventListener('mousemove', _.throttle(onMouseMove, 500))

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `
//     Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
//     x: ${event.clientX},
//     y: ${event.clientY}`;
// }

/*
 *      input и debounce
 */

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 2000));

// function onInputChange(event) {
//     inputCbInvocationCounter += 1

//     outputRef.textContent = `
//     Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
//     Значение: ${event.target.value}
// `;
// }

// ?____________________________________________

// const tech = [
//     { label: 'HTML' },
//     { label: 'CSS' },
//     { label: 'JavaScript' },
//     { label: 'Node.js' },
//     { label: 'React' },
//     { label: 'Vue' },
//     { label: 'Next.js' },
//     { label: 'Mobx' },
//     { label: 'Redux' },
//     { label: 'React Router' },
//     { label: 'GraphQl' },
//     { label: 'PostgreSQL' },
//     { label: 'MongoDB' },
// ];

// const refs = {
//     list: document.querySelector('.js-list'),
//     input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.debounce(onFilterChange, 500));

// const listItemsMarkup = createListItemsMarkup(tech);

// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// }

// populateList(listItemsMarkup);

// function onFilterChange(e) {
//     const filter = e.target.value.toLowerCase();

//     const filteredItems = tech.filter(t =>
//         t.label.toLowerCase().includes(filter)
//     );

//     const listItemsMarkup = createListItemsMarkup(filteredItems);
//     populateList(listItemsMarkup);
// }

// function populateList(markup) {
//     refs.list.innerHTML = markup;
// }

// ?____________________________________________

/*
 *      Ленивая загрузка изображений (концепция)
 *          - нативная поддержка
 *          - событие загрузки изображений
 */

// const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// console.log(lazyImages);

// lazyImages.forEach(image => {
//     image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
//     console.log('Картинка загрузилась');

//     e.target.classList.add('appear');
// }

/*
 *      Библеотека lazysizes
 *          - feature detection
 */

// const lazyImages = document.querySelectorAll('img[data-src]');

// console.log(lazyImages);

// lazyImages.forEach(image => {
//     image.addEventListener('load', onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
//     e.target.classList.add('appear');
// }

//? ___________________________________________

// if ('loading' in HTMLImageElement.prototype) {
//     addSrcLazyImages();
// } else {
//     addLAzySizeScript();
// }

// function addLAzySizeScript() {
//     const script = document.querySelector('script');
//     script.src =
//         'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
//     script.integrity =
//         'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
//     script.src =
//         'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
//     script.crossOrigin = 'anonymous';
//     script.referrerpolicy = 'no-referrer';

//     document.body.appendChild(script);
// }
// function addSrcLazyImages() {
//     const lazyImages = document.querySelectorAll('img[loading="lazy"]');
//     lazyImages.forEach(img => (img.src = img.dataset.src));
// }

//? ___________________________________________

// function fn(arr, line) {
//     const obj = {};
//     for (let i = 1; i <= line; i += 1) {
//         obj[i] = 0;
//     }
//     arr.forEach(buyer => {
//         const values = Object.values(obj);
//         const minValue = Math.min(...values);
//         const currentLine = value.indexOf(minValue) + 1;
//         obj[currentLine] += buyer;
//     });
//     return obj;
// }

// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));

// const gallery = new SimpleLightbox('.gallery a');

//? _________________________________________

//! setItem() - Добавить значение
//! getItem() - Получить значение
//! removeItem() - Удалить значение
//! clear() - очистить все

// import { createMarkup } from '../helpers/createMarkup';
// import { createModal } from '../helpers/createModal';
// import { findProduct } from '../helpers/findProduct';
// import { instruments } from '../helpers/instruments';
// import { onClick } from '../helpers/onClick';

// const search = document.querySelector('.js-search');
// const list = document.querySelector('.list');

// createMarkup(instruments, list);
// list.addEventListener('click', onClick);

// try {
//   console.log(tet_value);
// } catch (error) {
//   console.log(error);
// }

// console.log('after error');

// const favorite = document.querySelector('.js-favotire');
// const cart = document.querySelector('.js-cart');

// favorite.addEventListener('click',)
// cart.addEventListener('click', )

//? _________________________________________

//!  Ассинхронный JS

/*
 *    https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
 *    https://www.jscamp.app/ru/docs/javascript25/
 */

// for (let i = 3; i > 3; i--) {
//     const delay = i * 1000

//     setTimeout(() => console.log(i), delay)
// }

// console.log('start');

// setTimeout(() => { console.log('async') }, 0)

// console.log('end');

//? _________________________________________

// console.time('test async')

// console.log('start');

// setTimeout(() => { console.log('async') }, 0)

// for (let i = 0; i < 100000; i += 1) {
//     console.log('value', i);
// }

// console.timeEnd('test async')

//? _________________________________________

// const date = new Date()
// const currentDate = Date.now()

// console.log(date);
// console.log(currentDate);

// const date = new Date()
// console.log(date);

// const date = new Date();
// console.log('Date: ', date);

// // Повертає день місяця від 1 до 31
// console.log('getDate(): ', date.getDate());

// // Повертає день тижня від 0 до 6
// console.log('getDay(): ', date.getDay());

// // Повертає місяць від 0 до 11
// console.log('getMonth(): ', date.getMonth());

// // Повертає рік з 4 цифр
// console.log('getFullYear(): ', date.getFullYear());

// // Повертає години
// console.log('getHours(): ', date.getHours());

// // Повертає хвилини
// console.log('getMinutes(): ', date.getMinutes());

// // Повертає секунди
// console.log('getSeconds(): ', date.getSeconds());

// // Повертає мілісекунди
// console.log('getMilliseconds(): ', date.getMilliseconds());

//? _________________________________________

// const date = new Date();
// console.log('Date: ', date);

// // Повертає день місяця від 1 до 31
// console.log('getUTCDate(): ', date.getUTCDate());

// // Повертає день тижня від 0 до 6
// console.log('getUTCDay(): ', date.getUTCDay());

// // Повертає місяць від 0 до 11
// console.log('getUTCMonth(): ', date.getUTCMonth());

// // Повертає рік з 4 цифр
// console.log('getUTCFullYear(): ', date.getUTCFullYear());

// // Повертає години
// console.log('getUTCHours(): ', date.getUTCHours());

// // Повертає хвилини
// console.log('getUTCMinutes(): ', date.getUTCMinutes());

// // Повертає секунди
// console.log('getUTCSeconds(): ', date.getUTCSeconds());

// // Повертає мілісекунди
// console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds());

//? _________________________________________

// const date = new Date("March 16, 2030 14:25:00");

// console.log(date.setMinutes(50));
// // "Sat Mar 16 2030 14:50:00 GMT+0200"

// console.log(date.setFullYear(2040, 4, 8));
// // "Tue May 08 2040 14:50:00 GMT+0300"

//? _________________________________________

// const date = new Date("March 16, 2030 14:25:00");

// console.log(date.toString());
// // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// console.log(date.toTimeString());
// // "14:25:00 GMT+0200 (Eastern European Standard Time)"

// console.log('Должно быть время в PM/AM: ', date.toLocaleTimeString());
// // "2:25:00 PM"

// console.log(date.toUTCString());
// // "Sat, 16 Mar 2030 12:25:00 GMT"

// console.log(date.toDateString());
// // "Sat Mar 16 2030"

// console.log(date.toISOString());
// // "2030-03-16T12:25:00.000Z"

// console.log(date.toLocaleString());
// // "3/16/2030, 2:25:00 PM"

// console.log(date.getTime());
// // 1899894300000

//? _________________________________________

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");

//? _________________________________________

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//? _________________________________________

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

//? _________________________________________

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });

//? _________________________________________

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer('Mango', onFetchSuccess, onFetchError);

//? _________________________________________

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve('success value');
//       } else {
//         reject('error');
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

//? _________________________________________

// function multiply(a, b) {
//   return a * b;
// }

// function square(n) {
//   return multiply(n, n);
// }

// function printSquare(n) {
//     var squared = square(n)
//     console.log(squared);
// }

// printSquare(4)

//? _________________________________________

// function loop() {
//     setTimeout(loop, 0)
// }

// loop()

//? _________________________________________

// Promise.resolve().then(() => console.log('Hey!'))
// console.log('Yo!');

//? _________________________________________

// console.log(new Date());
// const date = new Date();
// console.log(date.getMonth());
// console.log(date.getDay());

// const namesOfMonth = [
//   'Январь',
//   'Февраль',
//   'Март',
//   'Апрель',
//   'Май',
//   'Июнь',
//   'Июль',
//   'Август',
//   'Сентябрь',
//   'Октябрь',
//   'Ноябрь',
//   'Декабрь',
// ];

// const namesOfDays = [
//   'Воскресенье',
//   'Понедельник',
//   'Вторник',
//   'Среда',
//   'Четверг',
//   'Пятница',
//   'Суббота',
// ];

// console.log(namesOfMonth[date.getMonth()]);
// console.log(namesOfDays[date.getDay()]);

//? _________________________________________

// const refs = {
//   box: document.querySelector('.js-box'),
//   timer: document.querySelector('.js-timer'),
// };

// let counter = 11;

// setTimeout(() => {
//   refs.box.style.display = 'block';
//     const id = setInterval(() => {

//       counter -= 1;
//       refs.timer.textContent = counter;

//     if (!counter) {
//         clearInterval(id);
//         refs.box.style.display = 'none'

//         // refs.timer.textContent = 'X'
//         // refs.timer.addEventListener('click', onClick)
//     }
//   }, 1000);

//   return;
// }, 1000);

// function onClick() {
//   refs.box.style.display = 'none';
// }

//? _________________________________________

// const refs = {
//   day: document.querySelector('.date-day'),
//   date: document.querySelector('.date'),
//   month: document.querySelector('.date-month'),
//   year: document.querySelector('.date-year'),
//   digitalClock: document.querySelector('.date-time'),

//   //!____________________________

//   clockHours__arrow: document.querySelector('.clock-hours__arrow'),
//   clockMinutes__arrow: document.querySelector('.clock-minutes__arrow'),
//   clockSeconds__arrow: document.querySelector('.clock-seconds__arrow'),
// };

// const namesOfMonth = [
//   'Январь',
//   'Февраль',
//   'Март',
//   'Апрель',
//   'Май',
//   'Июнь',
//   'Июль',
//   'Август',
//   'Сентябрь',
//   'Октябрь',
//   'Ноябрь',
//   'Декабрь',
// ];

// const namesOfDays = [
//   'Воскресенье',
//   'Понедельник',
//   'Вторник',
//   'Среда',
//   'Четверг',
//   'Пятница',
//   'Суббота',
// ];

// setInterval(() => {
//   const currentDate = new Date();

//   refs.day.textContent = namesOfDays[currentDate.getDay()];
//   refs.date.textContent = currentDate.getDate();
//   refs.month.textContent = namesOfMonth[currentDate.getMonth()];
//   refs.year.textContent = currentDate.getFullYear();
//   const currentTime = {
//     hours: currentDate.getHours().toString().padStart(2, 0),
//     minutes: currentDate.getMinutes().toString().padStart(2, 0),
//     seconds: currentDate.getSeconds().toString().padStart(2, 0),
//   };

//   const clock = {
//     hours: (360 / 12) * currentTime.hours + (360 / 12 / 60) * currentTime.minutes,
//     minutes: (360 / 60) * currentTime.minutes,
//     seconds: (360 / 60) * currentTime.seconds,
//   };

//   // console.log(clock.minutes)
//   const formatTime = `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`;

//   refs.digitalClock.textContent = formatTime;

//   refs.clockSeconds__arrow.style.transform = `rotate(${clock.seconds}deg)`;
//   refs.clockMinutes__arrow.style.transform = `rotate(${clock.minutes}deg)`;
//   refs.clockHours__arrow.style.transform = `rotate(${clock.hours}deg)`;
// }, 1000);

//? _________________________________________
//! CLOCK !

// setInterval(() => {
//   const currentDate = new Date();
//   const targetDate = new Date('2023/11/30');

// refs.digitalClock.textContent = convertMs(targetDate - currentDate);
// }, 1000);

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   // return { days, hours, minutes, seconds };

//   return `${days} Day(s) and ${hours.toString().padStart(2, 0)}:${minutes
//     .toString()
//     .padStart(2, 0)}:${seconds.toString().padStart(2, 0)} hrs`;
// }

//!__________________________________________
//? _________________________________________

/*
 *      Микро процессы имеют больший приоритет чем макро
 *
 *      Микро процессы:
 *          1. Promise
 *          2. Observer
 *
 *      Макро процессы:
 *          1. setTimeout()
 *          2. setInterval()
 *          3. setImmediate()
 *          4. requestAnimationFrame()
 */

// console.log('1');

// setTimeout(() => console.log('2'), 0);

// Promise.resolve('3').then(value => console.log(value))

// console.log('4')

//? _________________________________________

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const val = Math.random();

//     if (val > 0.2) {
//       res('Yeeees');
//     } else {
//       rej('Noooo');
//     }
//   }, 3000);
// });
// console.log(promise);

// promise
//   .then(value => {
//     return value + ' Yeah';
//   })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log('after');
//   });

//? _________________________________________

// const promise = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

// console.log(promise);

// promise
//   .then(resp => resp.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err))
//   .finally(() => {
//     console.log('good');
//   });

//? _________________________________________

// const refs = {
//   start: document.querySelector('.js-start'),
//   container: document.querySelector('.js-container'),
// };

// refs.start.addEventListener('click', onStart);

//?____

// function onStart() {
//   const result = [];
//   [...refs.container.children].forEach(box => (box.textContent = ''));
//   [...refs.container.children].forEach((box, i) => {
//     createPromise(i)
//       .then(smile => {
//         box.textContent = smile;
//         result.push('1');
//       })
//       .catch(smile => {
//         box.textContent = smile;
//       })
//       .finally(() => {
//         setTimeout(() => {
//           if (i === refs.container.children.length - 1) {
//             if (!result.length || result.length === 3) {
//               alert('WInner');
//             } else {
//               alert('Lost money');
//             }
//           }
//         }, 500);
//       });
//   });
// }

// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();

//       if (random > 0.5) {
//         res('🤑');
//       } else {
//         rej('😈');
//       }
//     }, 1000 * delay);
//   });
// }

//?_____

// function onStart() {
//   let counter = 0;

//   [...refs.container.children].forEach(box => (box.textContent = ''));

//   const promises = [...refs.container.children].map((_, i) => createPromise(i));

//   Promise.allSettled(promises).then(items => {
//     items.forEach((item, i) => {
//       setTimeout(() => {
//         if (item.status === 'fulfilled') {
//           counter += 1;
//         }
//         refs.container.children[i].textContent = item.value || item.reason;

//         if (refs.container.children.length - 1 === i) {
//           setTimeout(() => {
//             if (counter === refs.container.children.length || !counter) {
//               alert('Winner!');
//             } else {
//               alert('Lost money');
//             }
//           }, 500);
//         }
//       }, i * 1000);
//     });
//   });
// }

// function createPromise() {
//   return new Promise((res, rej) => {
//     const random = Math.random();
//     if (random > 0.5) {
//       res('🤑');
//     } else {
//       rej('😈');
//     }
//   });
// }

//? _________________________________________

// console.log('Request data...');

// const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log('Prepairing data...');
//     const backendData = {
//       server: 'qwe',
//       port: 2000,
//       status: 'working',
//     };
//     res(backendData);
//   }, 2000);
// });

// p.then(data => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       data.modified = true;
//       res(data);
//       // console.log('Data received', backendData);
//     }, 2000);
//   });
// })
//   .then(clientData => {
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then(data => {
//     console.log('Modified data', data);
//   })
//   .catch(err => console.error('Error: ', err))
//   .finally(() => console.log('Finaly'));

//? _________________________________________

// const sleep = ms => new Promise(res => setTimeout(() => res(), ms));

// // sleep(2000).then(() => console.log('after 2 sec'))
// // sleep(3000).then(() => console.log('after 3 sec'))

// Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('All promises'));

// Promise.race([sleep(2000), sleep(5000)]).then(() =>
//   console.log('Race promises')
// );

//? _________________________________________

// const promise = fetch('https://api.sampleapis.com/countries/countries');

// promise
//   .then(data => data.json())
//   .then(countries => countries)
//   .catch(err => console.error(err))

//? _________________________________________

// const coffee = new Promise((res, rej) => {
//   setTimeout(() => {
//       // rej(Error ('Your coffee is ready!'));
//       res('Your coffee is ready!');
//   }, 1500);
// });

// coffee.then(data => console.log(data)).catch(err => console.error(err))

//? _________________________________________

// const family = [
//   { member: 'Mother', id: 111, coffee: 'Latte' },
//   { member: 'Father', id: 222, coffee: 'Espresso' },
//   { member: 'Son', id: 333, coffee: 'Cappuchino' },
// ];

// const getCoffee = member => {
//   const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
//   return coffeePromise.then(data =>
//     data.json().then(list => {
//       const coffee = list.find(drink => drink.title === member.coffee);
//       console.log(coffee);
//       return {
//         ...member,
//         coffee,
//       };
//     })
//   );
// };

// const getFamilyMEmber = id => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const member = family.find(result => result.id === id);
//       if (member) {
//         res(member);
//       } else {
//         rej(Error("This member wasn't found!"));
//       }
//     }, 1500);
//   });
// };

// getFamilyMEmber(111)
//   .then(data => getCoffee(data))
//   .then(newMember => console.log('new member', newMember))
//   .catch(err => console.error(err));

//? _________________________________________

// const makeCoffee = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('Your coffee is ready!');
//     }, 500);
//   });
// };

// const makeToast = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('Your toasts are ready!');
//     }, 2500);
//   });
// };

// const coffeePromise = makeCoffee();
// const toastPromise = makeToast();

// // coffeePromise.then(data => console.log(data))
// // toastPromise.then(data => console.log(data));

// Promise.all([coffeePromise, toastPromise]).then(
//   ([coffeePromise, toastPromise]) => console.log(coffeePromise, toastPromise)
// );

//? _________________________________________

// const beers = fetch('https://api.sampleapis.com/beers/ale');
// const wines = fetch('https://api.sampleapis.com/wines/reds');

// Promise.all([beers, wines])
//   .then(data => Promise.all(data.map(result => result.json())))
//   .then(finalData => console.log(finalData))
//   .catch(err => console.error(err));

//? _________________________________________

// function getWeather(city, days) {
//   const API_KEY = 'ea957238804947ab8d842259230712';
//   const BASE_URL = 'https://api.weatherapi.com/v1';
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: city,
//     days,
//     lang: 'ru',
//   });

//   return fetch(
//     `${BASE_URL}/forecast.json?${params}`
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }

//     return resp.json();
//   });
// }

// const refs = {
//   form: document.querySelector('[action="submit"]'),
//   submitBtn: document.querySelector('[type="submit"]'),
//   jsList: document.querySelector('.js-list'),
// };

// refs.form.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const { query, days } = e.currentTarget.elements;

//   getWeather(query.value, days.value)
//     .then(
//       data => (refs.jsList.innerHTML = createMarkup(data.forecast.forecastday))
//     )
//     .catch(err => console.log(err));
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { text, icon },
//         },
//       }) =>
//         return `<li>
//             <img src="${icon}" alt="${text}">
//             <p>${text}</p>
//             <h2>${date}</h2>
//             <h3>${avgtemp_c}</h3>
//         </li>`
//     )
//     .join(' ');
// }

//? _________________________________________

// const refs = {
//   BASE_URL: 'https://the-one-api.dev/v2',
//   endpoint_HERO: '/character',
//   API_KEY: 'xeEdJIsN_UjM6SWwSduu',
// };

// function getCharacter() {
//   const param = new URLSearchParams({
//     limit: 30,
//     page: 1,
//   });

//   const options = {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${refs.API_KEY}`
//     }
//   }

//   fetch(`${refs.BASE_URL}${refs.endpoint_HERO}?${param}`, options).then(resp =>
//     console.log(resp)
//   );
// }

// getCharacter()

//? _________________________________________

// const refs = {
//   movieList: document.querySelector('.movie-list'),
//   loadMore: document.querySelector('.js-load'),

//   BASE_URL: 'https://api.themoviedb.org/3/',
//   ENDPOINT: 'trending/movie/day',
//   API_KEY: 'd0f00e3970f1028763a1388502d0f412',
// };

// let options = {
//   root: null,
//   rootMargin: '200px',
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);
// function callback(evt) {
//   console.log(evt);
// }

// const target = document.querySelector('.js-guard');

// let currentPage = 1;

// refs.loadMore.addEventListener('click', onLoad);

// function onLoad(e) {
//   e.preventDefault();
//   currentPage += 1;

//   getTrending(currentPage)
//     .then(data => {
//       refs.movieList.insertAdjacentHTML(
//         'beforeend',
//         createMarkup(data.results)
//       );
//       if (data.page === data.total_pages) {
//         refs.loadMore.hidden = true;
//       }
//     })
//     .catch(err => console.error(err));
// }

// function getTrending(page = 1) {
//   return fetch(
//     `${refs.BASE_URL}${refs.ENDPOINT}?api_key=${refs.API_KEY}&page=${page}`
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });
// }

// getTrending()
//   .then(data => {
//     refs.movieList.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     observer.observe(target);

//     if (data.page !== data.total_pages) {
//       refs.loadMore.hidden = false;
//     }
//   })
//   .catch(err => console.error(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title, overview }) =>
//         `<li style='list-style: none'>
//         <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
//         <h2>${title}</h2>
//         <p>${overview}</p>
//       </li>`
//     )
//     .join(' ');
// }

//? _________________________________________

// let counter = 0;

// const refs = {
//   movieList: document.querySelector('.movie-list'),
//   loadMore: document.querySelector('.js-load'),
//   target: document.querySelector('.js-guard'),

//   BASE_URL: 'https://api.themoviedb.org/3/',
//   ENDPOINT: 'trending/movie/day',
//   API_KEY: 'd0f00e3970f1028763a1388502d0f412',
// };

// let currentPage = 1;
// let options = {
//   root: null,
//   rootMargin: '300px',
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(onLoad, options);

// function onLoad(entries, observer) {
//   console.log(entries)
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       getTrending(currentPage)
//         .then(data => {
//           refs.movieList.insertAdjacentHTML(
//             'beforeend',
//             createMarkup(data.results)
//           );

//           if (data.page === data.total_pages) {
//             observer.unobserve(refs.target);
//           }
//         })
//         .catch(err => console.error(err));
//     }
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title, overview }) =>
//         `<li>
//         <img src="https://image.tmdb.org/t/p/w400/${poster_path}" alt="${title}" />
//         <h2>${title}</h2>
//         <p>${overview}</p>
//       </li>`
//     )
//     .join(' ');
// }

// function getTrending(page = 1) {
//   return fetch(
//     `${refs.BASE_URL}${refs.ENDPOINT}?api_key=${refs.API_KEY}&page=${page}`
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });
// }

// getTrending()
//   .then(data => {
//     refs.movieList.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     observer.observe(refs.target);
//   })
//   .catch(err => console.error(err));

//? _________________________________________

/*
 *      axios
 *
 *      CRUD
 *          C - POST
 *          R - GET
 *          U - PUT / PATCH
 *          D -
 */

import axios from 'axios';

//* GET

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

//* POST

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json',
//   },
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 12,
//   }),
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }
//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// const refs = {
//   addPost: document.querySelector('.js-add'),
//   posts: document.querySelector('.js-posts'),
//   formWrapper: document.querySelector('.js-form'),
//   ERROR: document.querySelector('.js-error'),
// };

// refs.addPost.addEventListener('click', handlerAddPost);

// function handlerAddPost() {
//   refs.formWrapper.innerHTML = `
//     <form action="submit" class='js-form-add' style="display: flex; flex-direction: column">
//         <input type="text" name="title">
//         <textarea name="body" cols="30" rows="10"></textarea>
//         <button>Add post</button>
//     </form>
//     `;

//   const form = document.querySelector('.js-form-add');
//   form.addEventListener('submit', handlerFormSubmit);
// }

// function handlerFormSubmit(e) {
//   e.preventDefault();

//   //!____________________________________________ ---> вариант 1

//   const { title, body } = e.currentTarget.elements;

//   const data = {
//     title: title.value,
//     body: body.value,
//   };

//   //!____________________________________________

//   //!____________________________________________ ---> вариант 2

//   //   const {
//   //     name: { value: title },
//   //     description: { value: body },
//   //   } = e.currentTarget.elements;

//   //     const data = { title, body };

//   //!____________________________________________

//   /*
//         !____________________________________________

//             !---> вариант 3 (НЕ ВСЕШДА РАБОТАЕТ) -> ГУГЛИ ДОКУМЕНТАЦИЮ ДЛЯ FormData()

//    */
//   // const data = new FormData(e.currentTarget)
//   // data.forEach(el => console.log(el))

//   //!____________________________________________

//   addPostService(data)
//     .then(obj => {
//       refs.posts.insertAdjacentHTML('beforeend', createPostMarkup(obj));
//     })
//     .catch(() => {
//       refs.ERROR.innerHTML = 'Невозможно добавить пост';
//     })
//     .finally(() => {
//       refs.formWrapper.innerHTML = '';
//       setTimeout(() => {
//         refs.ERROR.innerHTML = '';
//       }, 2000);
//     });
// }

// function createPostMarkup({ id, title, body }) {
//   return `
//     <li data-id="'${id}">
//         <h2>${title}</h2>
//         <p>${body}</p>
//     </li>`;
// }

// function addPostService(data) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   };
//   return fetch('https://jsonplaceholder.typicode.com/posts', options).then(
//     resp => {
//       if (!resp.ok) {
//         throw new Error(resp.status);
//       }
//       return resp.json();
//     }
//   );
// }

//* PUT / PATCH

// const options = {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'cat',
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options).then(resp =>
//   resp.json()
// ).then(data => console.log(data))

//!____________________________________________

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify({
//     id: 1,
//     title: 'cat',
//     body: 'Hello dear cat',
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//   .then(resp => resp.json())
//   .then(data => console.log(data)).catch(err => console.error(err))

//* DELETE

// const options = {
//   method: 'DELETE',
//   // body: JSON.stringify({
//   //   id: 1,
//   // }),
// };
// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//   .then(resp => resp.json())
//   .then(data => console.log(data));

//!____________________________________________

/*
 *          async / await
 */

// async function getCapital(countrie) {
//   // !!!! Только в том случае, когда с данными работаем в середине функции !!!!
//   try {
//     const URL = 'https://restcountries.com/v3.1/name/';
//     const resp = await fetch(`${URL}${countrie}`);
//     if (!resp.ok) {
//       throw new Error(resp.statusText)
//     }

//     const data = await resp.json();
//     console.log(data)
//   } catch (e) {
//     console.log(e);
//   }
// }

// getCapital('canada');

//!____________________________________________

// async function getCapital(countrie) {
//     // !!!! Только в том случае, когда с данными работаем за пределами функции !!!!
//   const URL = 'https://restcountries.com/v3.1/name/';
//   const resp = await fetch(`${URL}${countrie}`);
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   return resp.json();
// }

// getCapital('canada').then(data => console.log(data)).catch(e => console.error(e))

//!____________________________________________

// async function foo() {

// }
// console.log(foo())

//!____________________________________________

// async function getCapital() {
//   const URL = 'https://restcountries.com/v3.1/name/';
//   const arr = ['Canada', 'U4SA', 'Mexico'];

//   const responses = arr.map(async ctr => {
//     const resp = await fetch(`${URL}${ctr}`);
//     if (!resp.ok) {
//       throw new Error('Nott Found!');
//     }
//     return resp.json();
//   });

//   const prom = await Promise.allSettled(responses);
//   return prom;
// }

// getCapital()
//   .then(data => {
//     const res = data.filter(({ status }) => status === 'fulfilled').map(({value}) => value[0])
//     const rej = data.filter(({ status }) => status === 'rejected');
//     console.log(res);
//     console.log(rej);
//   })
//   .catch(e => console.log(e));

//!____________________________________________

// const refs = {
//   form: document.querySelector('.js-form'),
//   addBtn: document.querySelector('.js-add'),
//   list: document.querySelector('.js-list'),
//   container: document.querySelector('.js-form-container'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// refs.addBtn.addEventListener('click', handlerAddInput);
// refs.clearBtn.addEventListener('click', onClear);

// function onClear() {
//   refs.list.innerHTML = '';
// }

// function handlerAddInput() {
//   const markup = '<input type="text" name="country">';
//   refs.container.insertAdjacentHTML('beforeend', markup);
// }

// refs.form.addEventListener('submit', handlerForm);

// function handlerForm(evt) {
//   evt.preventDefault();
//   const data = new FormData(evt.currentTarget);
//   const arr = data
//     .getAll('country')
//     .filter(item => item)
//     .map(item => item.trim());

//   getCountries(arr)
//     .then(async resp => {
//       const capitals = resp.map(({ capital }) => capital[0]);
//       const weatherService = await getWeather(capitals);
//       refs.list.innerHTML = createMarkup(weatherService);
//     })
//     .catch(e => console.log(e))
//     .finally(() => {
//       refs.form.reset();
//       refs.container.innerHTML = '<input type="text" name="country">';
//     });
// }

// async function getCountries(arr) {
//   const resps = arr.map(async item => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`);
//     if (!resp.ok) {
//       throw new Error();
//     }
//     return resp.json();
//   });

//   const data = await Promise.allSettled(resps);

//   const countryObj = data
//     .filter(({ status }) => status === 'fulfilled')
//     .map(({ value }) => value[0]);
//   return countryObj;
// }

// async function getWeather(arr) {
//   const API_KEY = 'ea957238804947ab8d842259230712';
//   const BASE_URL = 'https://api.weatherapi.com/v1';

//   const resps = arr.map(async city => {
//     const params = new URLSearchParams({
//       key: API_KEY,
//       q: city,
//       lang: 'ru',
//     });

//     const resp = await fetch(`${BASE_URL}/current.json?${params}`);

//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }
//     return resp.json();
//   });

//   const data = await Promise.allSettled(resps);
//   const objs = data
//     .filter(({ status }) => status === 'fulfilled')
//     .map(({ value }) => value);

//   return objs;
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         current: {
//           temp_c,
//           condition: { text, icon },
//         },
//         location: { country, name },
//       }) => `
//       <li>
//         <div>
//             <h2>${country}</h2>
//             <h3>${name}</h3>
//         </div>
//         <img src="${icon}" alt="${text}">
//         <p>${text}</p>
//         <p>${temp_c}</p>
//       </li>`
//     )
//     .join('');
// }

//!____________________________________________

// import throttle from 'lodash.throttle';
// import debounce from 'lodash.debounce';
// import '../css/localStorage.css';

// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: 'mango', age: 2 }));

// const savedData = localStorage.getItem('my-data');

// console.log(savedData);
// console.log(JSON.parse(savedData));

// const STORAGE_KEY = 'message';
// const formData = {};

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form input'),
//   textArea: document.querySelector('.feedback-form textarea'),
//   formBtn: document.querySelector('button[type="submit"]'),
// };

// populateTextArea()
// updForm();

// refs.form.addEventListener('submit', onSubmit)
// refs.textArea.addEventListener('input', throttle(onInput, 200));

// function onSubmit(e) {
//     e.preventDefault()

//     e.target.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

// function onInput(e) {
//     const message = e.target.value
//     localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextArea(e) {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if (savedMessage) {
//         refs.textArea.value = savedMessage
//     }
// }

// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);

//   localStorage.setItem('formData', JSON.stringify(formData));
// });

// function updForm(e) {
//   const data = localStorage.getItem('formData');
//   const parsedData = JSON.parse(data);

//   console.log(data);
//   console.log(parsedData);

//   if (data) {
//     refs.input.value = parsedData.name;
//     // refs.textArea.value = parsedData.comments;
//   }
// }

//!____________________________________________
// import Handlebars from 'handlebars';
//!____________________________________________

//!____________________________________________
//!____________________________________________
