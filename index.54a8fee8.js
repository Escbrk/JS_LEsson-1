!function(){
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
var t={movieList:document.querySelector(".movie-list"),loadMore:document.querySelector(".js-load"),target:document.querySelector(".js-guard"),BASE_URL:"https://api.themoviedb.org/3/",ENDPOINT:"trending/movie/day",API_KEY:"d0f00e3970f1028763a1388502d0f412"},e=1,n=new IntersectionObserver((function(n,c){console.log(n),n.forEach((function(n){n.isIntersecting&&r(e+=1).then((function(e){t.movieList.insertAdjacentHTML("beforeend",o(e.results)),e.page===e.total_pages&&c.unobserve(t.target)})).catch((function(t){return console.error(t)}))}))}),{root:null,rootMargin:"300px",threshold:1});function o(t){return t.map((function(t){var e=t.poster_path,n=t.title,o=t.overview;return'<li>\n        <img src="https://image.tmdb.org/t/p/w400/'.concat(e,'" alt="').concat(n,'" />\n        <h2>').concat(n,"</h2>\n        <p>").concat(o,"</p>\n      </li>")})).join(" ")}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("".concat(t.BASE_URL).concat(t.ENDPOINT,"?api_key=").concat(t.API_KEY,"&page=").concat(e)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}r().then((function(e){t.movieList.insertAdjacentHTML("beforeend",o(e.results)),n.observe(t.target)})).catch((function(t){return console.error(t)}))}();
//# sourceMappingURL=index.54a8fee8.js.map
