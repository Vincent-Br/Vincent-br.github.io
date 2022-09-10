"use strict";
var collectionsContainer = document.getElementById('collections-grid');
for (var i = 0; i < galleryData.collections.length; i++) {
    if (collectionsContainer !== null) {
        var imageName = galleryData.collections[i].images[galleryData.collections[i].thumbnailIndex];
        var thumbnail = document.createElement("img");
        thumbnail.src = `/dist/static/img/gallery/${imageName}`;
        thumbnail.alt = imageName;
        var collectionDiv = document.createElement("div");
        var titleDiv = document.createElement("div");
        var title = document.createElement("h3");
        collectionDiv.appendChild(thumbnail);
        collectionDiv.appendChild(titleDiv);
        titleDiv.appendChild(title);
        collectionsContainer.appendChild(collectionDiv);
        title.innerHTML = galleryData.collections[i].name;
    }
}
//# sourceMappingURL=index.js.map