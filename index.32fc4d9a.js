!function(){function t(t){return t&&t.__esModule?t.default:t}var r={};function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?v:h,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function d(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(P([])));b&&b!==e&&n.call(b,i)&&(w=b);var L=g.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return m.prototype=g,u(L,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(j.prototype),u(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new j(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}
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
var i={form:document.querySelector(".js-form"),addBtn:document.querySelector(".js-add"),list:document.querySelector(".js-list"),container:document.querySelector(".js-form-container")};function a(){return a=t(r)(t(n).mark((function e(o){var i,a,c;return t(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.map(function(){var e=t(r)(t(n).mark((function r(e){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.com/v3.1/name/".concat(e));case 2:if((o=t.sent).ok){t.next=5;break}throw new Error;case 5:return t.abrupt("return",o.json());case 6:case"end":return t.stop()}}),r)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.allSettled(i);case 3:return a=e.sent,c=a.filter((function(t){return"fulfilled"===t.status})).map((function(t){return t.value[0]})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function c(t){return u.apply(this,arguments)}function u(){return u=t(r)(t(n).mark((function e(o){var i,a,c;return t(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"ea957238804947ab8d842259230712","https://api.weatherapi.com/v1",i=o.map(function(){var e=t(r)(t(n).mark((function r(e){var o,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new URLSearchParams({key:"ea957238804947ab8d842259230712",q:e,lang:"ru"}),t.next=3,fetch("".concat("https://api.weatherapi.com/v1","/current.json?").concat(o));case 3:if((i=t.sent).ok){t.next=6;break}throw new Error(i.status);case 6:return t.abrupt("return",i.json());case 7:case"end":return t.stop()}}),r)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.allSettled(i);case 5:return a=e.sent,c=a.filter((function(t){return"fulfilled"===t.status})).map((function(t){return t.value})),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=t(r)(t(n).mark((function r(e){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.map((function(t){var r=t.current,e=r.temp_c,n=r.condition,o=n.text,i=n.icon,a=r.location,c=a.country,u=a.name;return"\n      <li>\n        <div>\n            <h2>".concat(c,"</h2>\n            <h3>").concat(u,'</h3>\n        </div>\n        <img src="').concat(i,'" alt="').concat(o,'">\n        <p>').concat(o,"</p>\n        <p>").concat(e,"</p>\n      </li>")})).join(""));case 1:case"end":return t.stop()}}),r)})))).apply(this,arguments)}i.addBtn.addEventListener("click",(function(){i.container.insertAdjacentHTML("beforeend",'<input type="text" name="country"></input>')})),i.form.addEventListener("submit",(function(e){e.preventDefault(),function(t){return a.apply(this,arguments)}(new FormData(e.currentTarget).getAll("country").filter((function(t){return t})).map((function(t){return t.trim()}))).then((o=t(r)(t(n).mark((function r(e){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.map((function(t){return t.capital[0]})),t.next=3,c(o);case 3:a=t.sent,i.list.innerHTML=s(a);case 5:case"end":return t.stop()}}),r)}))),function(t){return o.apply(this,arguments)})).catch((function(t){return console.log(t)}));var o}))}();
//# sourceMappingURL=index.32fc4d9a.js.map
