"use strict";for(var collectionsContainer=document.getElementById("collections-grid"),i=0;i<galleryData.collections.length;i++)if(null!==collectionsContainer){var imageName=galleryData.collections[i].images[galleryData.collections[i].thumbnailIndex],thumbnail=document.createElement("img");thumbnail.src=`/static/img/gallery/${imageName}`,thumbnail.alt=imageName;var collectionDiv=document.createElement("div"),titleDiv=document.createElement("div"),title=document.createElement("h3");collectionDiv.appendChild(thumbnail),collectionDiv.appendChild(titleDiv),titleDiv.appendChild(title),collectionsContainer.appendChild(collectionDiv),title.innerHTML=galleryData.collections[i].name,collectionDiv.addEventListener("click",(function(e){location.href=`/gallery?c=${galleryData.collections[i].shortName}`}),!1)}