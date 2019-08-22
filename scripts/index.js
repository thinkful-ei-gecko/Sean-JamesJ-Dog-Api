'use strict';

/**
 * All functions for grabbing dog image assets from DogAPI
 */

// Fetch data from dogapi

let getImages = function(num = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then((response) => response.json())
    .then((jsonData) => 
        {console.log(jsonData);
          console.log("Images should be here", returnImages(jsonData));
          });

};

let handleDogFormSubmit = function() {
  $('.js-dog-gen').on('submit', e => {
    e.preventDefault();
    let count = $('#dog-count').val();
    getImages(count);
    
  });
};

let returnImages = function(images) {
  let imageString ='';
  for (let i = 0; i < images.message.length; i++){
    imageString += `<img src="${images.message[i]} alt = "dog image ${i}" />`;
  }
  return imageString;
};

// event listeners
handleDogFormSubmit();
