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

// #2

galleryListEl.addEventListener("click", showElement)

function showElement(ent) {
  ent.preventDefault();
  const linkLargeImg = ent.target.dataset.source;
  // console.log(ent.target.dataset.source);
  const instance = basicLightbox.create(`
    <img src="${linkLargeImg}">

`)

instance.show()
}



