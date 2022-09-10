var galleryTitle = document.getElementById('gallery-title');
var galleryContainer = document.getElementById('image-container');
var queryString:string = window.location.search;
var urlParams = new URLSearchParams(queryString);
var collectionQuery = urlParams.get('c');

for (var i = 0; i < galleryData.collections.length; i++) {
    if (galleryData.collections[i].shortName === collectionQuery || collectionQuery === null) {
        displayCollection(i)

        if (collectionQuery !== null && galleryTitle !== null) {
            galleryTitle.innerHTML = galleryData.collections[i].name
        }
    }
}


function displayCollection(collectionIndex: number) {
    if (galleryContainer !== null) {
        for (var i = 0; i < galleryData.collections[collectionIndex].images.length; i++) {
            var imageName = galleryData.collections[collectionIndex].images[i];

            var image = document.createElement("img")
            image.src = `/dist/static/img/gallery/${imageName}`
            image.alt = imageName

            var imageDiv = document.createElement("div")
            imageDiv.appendChild(image)
            galleryContainer.appendChild(imageDiv)
        }
    }
}