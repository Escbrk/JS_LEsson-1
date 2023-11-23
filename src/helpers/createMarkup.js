function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
     markup = arr
      .map(
        ({ id, img, name }) => `
        <li data-id='${id}' class='js-card'>
            <img src=${img} alt=${name} width=300>
            <h2>${name}</h2>
            <a href='#' class='js-info'>More info</a>
            <div>
                <button class='js-favorite'>Add to favorite</button>
                <button class='js-cart'>Add to cart</button>
            </div>
        </li>`
      )
      .join(' ');
  } else {
   markup = `
        <li >
            <img src="https://picsum.photos/id/1029/600/400" alt='404' width=600>
        </li>`;
  }

  list.innerHTML = markup;
}

export { createMarkup };
