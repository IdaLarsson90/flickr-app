const galleryElem = document.querySelector('.gallery');
const searchInputElem = document.querySelector('#search-input');
import {showLightbox} from './lightbox.js';
import { getPhotos } from './api-flickr.js';
async function displayPhoto (photosArray) {
    for (let i = 0; i < photosArray.length/2; i++){
        const photo = photosArray[i];
        const sizeSmall = 'm';
        const photoItem = document.createElement('img');
        galleryElem.appendChild(photoItem);
        photoItem.setAttribute('src', `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeSmall}.jpg`);
        photoItem.addEventListener('click', () => {
            showLightbox(photo);
        }); 
    }
}
async function getSearchString () {
    let searchInput = "";
    searchInput = searchInputElem.value;
    const photosArray = await getPhotos(searchInput);
    await displayPhoto(photosArray);
}
export {displayPhoto, getSearchString}