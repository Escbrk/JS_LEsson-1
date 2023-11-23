function createMarkup(arr, list) {
  const markup = arr
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

  list.innerHTML = markup;
}

export { createMarkup };