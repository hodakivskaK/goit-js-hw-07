import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryListEl = document.querySelector(".gallery");

// #1
const galleryCard = createGalleryMarkup(galleryItems);
galleryListEl.insertAdjacentHTML("beforeend", galleryCard);

function createGalleryMarkup(items) {
    return  items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');

}


 galleryListEl.addEventListener("click", showElement)
function showElement(ent) {
    ent.preventDefault();
  
    new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionsDelay: 250,
    });
}
