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

let handleDogFormSubmit = function() {
  $('.js-dog-gen').on('submit', e => {
    e.preventDefault();
    let count = $('#dog-count').val();
    getImages(count);
    
  });
};

// event listeners
handleDogFormSubmit();