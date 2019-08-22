'use strict';

/**
 * All functions for grabbing dog image assets from DogAPI
 */

// Fetch data from dogapi

let getImages = function(num = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData));
};

getImages();