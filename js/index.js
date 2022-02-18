const button = document.querySelector('.button') 
const searchInputElem = document.querySelector('#search-input');
const galleryElem = document.querySelector('.gallery');

import {getSearchString} from './modules/display.js'

button.addEventListener('click', () => {
    emptyGallery();
    getSearchString();
});

searchInputElem.addEventListener("keypress", (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        console.log('enter');
        emptyGallery();
        getSearchString();
    }
});
function emptyGallery() {
    galleryElem.innerText = '';
}
