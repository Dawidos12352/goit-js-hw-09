// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryArray = [];

galleryItems.forEach(event => {
const galleryItem = document.createElement("a");
galleryItem.className = "gallery__item";
galleryItem.href = event.original;

const galleryImage = document.createElement("img");
galleryImage.className = "gallery__image";
galleryImage.src = event.preview;
galleryImage.alt = event.description;

galleryItem.append(galleryImage);
galleryArray.push(galleryItem);
});

gallery.append(...galleryArray);

new SimpleLightbox('.gallery a', { captionDelay: 250 });