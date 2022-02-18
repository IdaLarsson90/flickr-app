
async function getPhotos (searchInput) {
    const BASEURL = 'https://api.flickr.com/services/rest?method=flickr.photos.search';
    const KEY = '7ba464e0a7638638fb1daf37bb2e9159';
    const response = await fetch(`${BASEURL}&api_key=${KEY}&text=${searchInput}&format=json&nojsoncallback=1&sort=relevance`);
    const data = await response.json();
    return data.photos.photo;
}

export {getPhotos}