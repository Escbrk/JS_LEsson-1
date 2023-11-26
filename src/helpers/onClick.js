// import { common } from "../js/common";
// import { findProduct } from "./findProduct";
// import { createModal } from "./createModal";

// const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
// const cartArr = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];

// function onClick(event) {
//   event.preventDefault();
//   if (event.target.classList.contains('js-info')) {
//     const product = findProduct(event.target);
//     createModal(product);
//   }

//   if (event.target.classList.contains('js-cart')) {
//     const product = findProduct(event.target);

//     cartArr.push(product);
//     console.log(cartArr);
//     localStorage.setItem(common.KEY_CART, JSON.stringify(cartArr));
//   }

//   if (event.target.classList.contains('js-favorite')) {
//     const product = findProduct(event.target);
//     const inStorage = favoriteArr.some(({ id }) => id === product.id);
//     if (inStorage) {
//       return;
//     }

//     favoriteArr.push(product);
//     console.log(favoriteArr);
//     localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
//   }
// }

// export { onClick };
