import { common } from "./common";
import { createMarkup } from '../helpers/createMarkup';
import { findProduct } from "../helpers/findProduct";
import { onClick } from "../helpers/onClick";
import 'basiclightbox/dist/basiclightbox.min.css';







const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list)


list.addEventListener('click', onClick);


