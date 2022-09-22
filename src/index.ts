var collectionsContainer = document.getElementById('collections-grid');

for (var i = 0; i < galleryData.collections.length; i++) {
    if (collectionsContainer !== null) {
        var imageName = galleryData.collections[i].images[galleryData.collections[i].thumbnailIndex];

        var thumbnail = document.createElement("img")
        thumbnail.src = `/static/img/gallery/${imageName}`
        thumbnail.alt = imageName

        var collectionDiv = document.createElement("a")
        var titleDiv = document.createElement("div")
        var title = document.createElement("h3")
        collectionDiv.appendChild(thumbnail)
        collectionDiv.appendChild(titleDiv)
        titleDiv.appendChild(title)
        collectionsContainer.appendChild(collectionDiv)

        title.innerHTML = galleryData.collections[i].name
        collectionDiv.href = `/gallery?c=${galleryData.collections[i].shortName}`
    }
}