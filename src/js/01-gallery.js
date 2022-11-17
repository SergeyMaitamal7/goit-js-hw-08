// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallerys = document.querySelector('.gallery');
const itemImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <a class="gallery__item" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');
gallerys.insertAdjacentHTML('beforeend', itemImg);

let gallery = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});


