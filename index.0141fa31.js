!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var i=o("l5bVx"),u="Expected a function",f=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,b=d||p||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,j=function(){return b.Date.now()};function g(e,t,n){var r,o,i,f,c,a,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(u);function b(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function v(e){return l=e,c=setTimeout(h,t),s?b(e):f}function g(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-l>=i}function h(){var e=j();if(g(e))return S(e);c=setTimeout(h,function(e){var n=t-(e-a);return d?y(n,i-(e-l)):n}(e))}function S(e){return c=void 0,p&&r?b(e):(r=o=void 0,f)}function N(){var e=j(),n=g(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return v(a);if(d)return c=setTimeout(h,t),b(a)}return void 0===c&&(c=setTimeout(h,t)),f}return t=O(t)||0,x(n)&&(s=!!n.leading,i=(d="maxWait"in n)?m(O(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),N.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=a=o=c=void 0},N.flush=function(){return void 0===c?f:S(j())},N}function x(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(x(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var r=a.test(e);return r||l.test(e)?s(e.slice(2),r?2:8):c.test(e)?NaN:+e}i=o("l5bVx");var h=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,w=/^0o[0-7]+$/i,T=parseInt,$="object"==typeof e&&e&&e.Object===Object&&e,_="object"==typeof self&&self&&self.Object===Object&&self,q=$||_||Function("return this")(),M=Object.prototype.toString,D=Math.max,E=Math.min,F=function(){return q.Date.now()};function k(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function I(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==M.call(e)}(e))return NaN;if(k(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=k(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var r=N.test(e);return r||w.test(e)?T(e.slice(2),r?2:8):S.test(e)?NaN:+e}
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
var V={},L={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textArea:document.querySelector(".feedback-form textarea"),formBtn:document.querySelector('button[type="submit"]')};updForm(),L.form.addEventListener("input",(function(e){V[e.target.name]=e.target.value,console.log(V),localStorage.setItem("formData",JSON.stringify(V))}))}();
//# sourceMappingURL=index.0141fa31.js.map
