import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

function createModal(product) {
  const instance = basicLightbox.create(`
        <div class='modal'>
            <img src='${product.img}' alt='${product.name}'>
            <h2>${product.name}</h2>
            <h3>${product.price} $</h3>
            <p>${product.description}</p>
            
            <div>
                <button class='js-favorite'>Add to favorite</button>
                <button class='js-cart'>Add to cart</button>
            </div>

        </div>
      `);

  instance.show();
}

export { createModal };
