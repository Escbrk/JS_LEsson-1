import { common } from "./common";
import { createMarkup } from '../helpers/createMarkup';


const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list)

list.addEventListener('click', onClick)

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);

  return instruments.find(({ id }) => id === productId);
}
