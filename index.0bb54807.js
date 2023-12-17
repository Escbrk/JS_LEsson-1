//! Метод concat()
//! Функции
//! Псевдомассив arguments
//! Преобразование псевдомассива
//! Паттерн «Ранний возврат»
//! Функциональное выражение
//! Стек вызовов
//! Массивы
//! Передача по значению
//! Передача по ссылке
//! Найти самое маленькое число в массиве:
//! Найти самое большое число в массиве:
//! Метод join():
//! Метод concat() :
//! ФУНКЦИИ
//! ___________________________________________
//! Объекты
//! Свойства
document.querySelector(".js-magic__btn");
//! Короткая запись сво-тв:
//! Вычисляемые св-ва
//! Ссылочный тип {} === {}
//! Массивы и функции это объекты
//! Перебор через for...in и Object.keys | values | entries
//!________________________________________
//! Сшиваем несколько массивов в один через concat() и spread
//! Деструктуризация массивов
//! Операция rest (сбор)
//! EXAMPLE
//! CART_____________________
//! CART_____________________
//! CALLBACK
//! Функция doMath(a, b, callback)
//! Отложеный вызов: регистрация событий
//! Отложеный вызов: геолокация
//! Отложеный вызов: интервалы
//! Фильтр
//! ЗАМЫКАНИЕ
//! Поварёнок (пример)
//! Округлятор 🤷‍♂️
//! Приватные данные и функции - скрытие реализации, интерфейс
//! Явный и неявный возврат
//! Псевдомассив arguments
//!_____________
//!_______
//!_______
//!--------------------------------
//! Получаем массив имён всех игроков
//! Увеличиваем кол-во поинтов каждого игрока на 10%
//! Увеличиваем кол-во часов игрока по ID
//! Ищем игрока по ID
//! Ищем игрока по имени
//! Считаем общую зарплату
//! Считаем общее кол-во часов
//! Считаем общую сумму товаров корзины
//! Собираем все тего из твитов
//! Ведем статистику тегов
//! #1
//! #2
//! #3
//! Кастомная сортировка сложных типов
//! По игровому времени
//! Цепочка
//! 💩способ____________
//! Цепочка предыдущих трех
//! isEmpty()
//! Новый синтаксис
//! Счетчик
//!     1. Если функция вызывается через new, создаётся пустой объект
//!     2. Функция вызывается в контексте созданного объекта,
//!         то есть в this записывается ссылка на него
//!     3. В свойство this.__proto__ записывается ссылка на объект Car.prototype
//!         то есть Car.prototype это ПРОТОТИП будущего объекта (экземпляра)
//!     4. Ссылка на объект возвращается в место вызова new Car
//!     1. У каждого объекта есть свойство __proto__
//!     2. В этом свойстве лежит ссылка на его ПРОТОТИ, то есть другой объект
//!     3. При создании литерала объекта, в свойство __proto__ записывается ссылка на Функция.prototype
//!     4. Функция-конструктор это просто функция :)
//!     5. Всю магию делает оператор new
//!     6. Если функция вызывается через new, создаётся пустой объект
//!     7. Функция вызывается в контексте созданного объекта
//!     8. В свойство this.__proto__ записывается ссылка на объект Функция.prototype
//!     9. Ссылка на объект возвращается в место вызова new Функция()
const t={form:document.querySelector(".js-form"),addBtn:document.querySelector(".js-add"),list:document.querySelector(".js-list"),container:document.querySelector(".js-form-container")};t.addBtn.addEventListener("click",(function(){t.container.insertAdjacentHTML("beforeend",'<input type="text" name="country"></input>')})),t.form.addEventListener("submit",(function(n){n.preventDefault();const e=new FormData(n.currentTarget);(async function(t){const n=t.map((async t=>{const n=await fetch(`https://restcountries.com/v3.1/name/${t}`);if(!n.ok)throw new Error;return n.json()})),e=await Promise.allSettled(n);return e.filter((({status:t})=>"fulfilled"===t)).map((({value:t})=>t[0]))})(e.getAll("country").filter((t=>t)).map((t=>t.trim()))).then((async n=>{const e=n.map((({capital:t})=>t[0])),r=await async function(t){const n="ea957238804947ab8d842259230712",e="https://api.weatherapi.com/v1",r=t.map((async t=>{const r=new URLSearchParams({key:n,q:t,lang:"ru"}),a=await fetch(`${e}/current.json?${r}`);if(!a.ok)throw new Error(a.status);return a.json()})),a=await Promise.allSettled(r);return a.filter((({status:t})=>"fulfilled"===t)).map((({value:t})=>t))}(e);t.list.innerHTML=async function(t){return t.map((({current:{temp_c:t,condition:{text:n,icon:e},location:{country:r,name:a}}})=>`\n      <li>\n        <div>\n            <h2>${r}</h2>\n            <h3>${a}</h3>\n        </div>\n        <img src="${e}" alt="${n}">\n        <p>${n}</p>\n        <p>${t}</p>\n      </li>`)).join("")}(r)})).catch((t=>console.log(t)))}));
//# sourceMappingURL=index.0bb54807.js.map
