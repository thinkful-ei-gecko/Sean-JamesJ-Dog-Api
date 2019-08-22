'use strict';

/**
 * All functions for grabbing dog image assets from DogAPI
 */

// Fetch data from dogapi

let getImages = function(num = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then((response) => response.json())
    .then((jsonData) => returnImages(jsonData)); 
};

let handleDogFormSubmit = function() {
  $('.js-dog-gen').on('submit', e => {
    e.preventDefault();
    let count = $('#dog-count').val();
    getImages(count);
  });
};

let returnImages = function(jsonData) {
  let imageString ='';
  for (let i = 0; i < jsonData.message.length; i++){
    imageString += `<img src="${jsonData.message[i]}" alt="dog image ${i}" />`;
  }
  $('.js-dog-grid').html(imageString);
};

// event listeners
handleDogFormSubmit();
