"use strict";
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var errorCode = urlParams.get('id');
if (errorCode !== undefined && errorCode !== null) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage !== null) {
        errorMessage.innerHTML = `Error ${errorCode}`;
    }
}
//# sourceMappingURL=error.js.map