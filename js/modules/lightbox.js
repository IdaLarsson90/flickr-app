const overlayElem = document.querySelector('.overlay');
const lightboxImgElem = document.querySelector('.lightbox_img');
const bodyElem = document.querySelector('body');

function showLightbox (photo) {
    overlayElem.classList.add("show");
    const photoItemBig = document.createElement('img');
    lightboxImgElem.appendChild(photoItemBig);
    bodyElem.classList.add('noscroll');
    photoItemBig.setAttribute('src', `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`)
    overlayElem.addEventListener('click', () => {
       hideLightbox(photoItemBig);
    });
}

function hideLightbox (photoItemBig) {
    photoItemBig.remove();
    overlayElem.classList.remove("show");
    bodyElem.classList.remove('noscroll');
}

export {showLightbox}