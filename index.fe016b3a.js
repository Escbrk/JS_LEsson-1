!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return i.default(e)||a.default(e)||f.default(e)||l.default()};var i=d(o("kMC0W")),a=d(o("7AJDX")),l=d(o("8CtQK")),f=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}
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
var s={start:document.querySelector(".js-start"),container:document.querySelector(".js-container")};s.start.addEventListener("click",(function(){e(u)(s.container.children).forEach((function(e){return e.textContent="🍓"}))}))}();
//# sourceMappingURL=index.fe016b3a.js.map
