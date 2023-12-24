var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,b=function(){return c.Date.now()};function p(t,e,n){var o,r,i,f,u,c,a=0,p=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function j(e){var n=o,i=r;return o=r=void 0,a=e,f=t.apply(i,n)}function g(t){return a=t,u=setTimeout(h,e),p?j(t):f}function O(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-a>=i}function h(){var t=b();if(O(t))return S(t);u=setTimeout(h,function(t){var n=e-(t-c);return d?s(n,i-(t-a)):n}(t))}function S(t){return u=void 0,v&&o?j(t):(o=r=void 0,f)}function x(){var t=b(),n=O(t);if(o=arguments,r=this,c=t,n){if(void 0===u)return g(c);if(d)return u=setTimeout(h,e),j(c)}return void 0===u&&(u=setTimeout(h,e)),f}return e=m(e)||0,y(n)&&(p=!!n.leading,i=(d="maxWait"in n)?l(m(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==u&&clearTimeout(u),a=0,o=c=r=u=void 0},x.flush=function(){return void 0===u?f:S(b())},x}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==a.call(t)}(t))return NaN;if(y(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=y(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=o.test(t);return u||r.test(t)?i(t.slice(2),u?2:8):n.test(t)?NaN:+t}var d=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,g=/^0o[0-7]+$/i,O=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,S="object"==typeof self&&self&&self.Object===Object&&self,x=h||S||Function("return this")(),N=Object.prototype.toString,w=Math.max,T=Math.min,$=function(){return x.Date.now()};function q(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function M(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==N.call(t)}(t))return NaN;if(q(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=q(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var n=j.test(t);return n||g.test(t)?O(t.slice(2),n?2:8):v.test(t)?NaN:+t}
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
const k={},D={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textArea:document.querySelector(".feedback-form textarea"),formBtn:document.querySelector('button[type="submit"]')};updForm(),D.form.addEventListener("input",(t=>{k[t.target.name]=t.target.value,console.log(k),localStorage.setItem("formData",JSON.stringify(k))}));
//# sourceMappingURL=index.dd49e9f3.js.map
