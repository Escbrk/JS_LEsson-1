import * as basicLightbox from 'basiclightbox';

function createModal(product) {
  const instance = basicLightbox.create(
    `
        <div style='width: 600px; background-color: white;'>
            <img src='${product.img}' alt='${product.name}'>
            <h2>${product.name}</h2>
            <h3>${product.price} $</h3>
            <p>${product.description}</p>
            
            <div>
                <button class='js-favorite'>Add to favorite</button>
                <button class='js-cart'>Add to cart</button>
            </div>

        </div>
      `,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance)
        document.addEventListener('keydown', this.handler)
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    });

  instance.show();
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close()
  }
}

export { createModal };
