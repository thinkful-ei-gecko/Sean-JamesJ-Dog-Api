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

let handleDogCountFormSubmit = function() {
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

/**
 * Get a random doggo of a certain breed and render in DOM
 * 
 */

let getDogOfBreed = function(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(jsonData => returnBreedImage(jsonData))
    .catch(error => {
      console.log(error);
    });
};

let returnBreedImage = function(jsonData) {
  if(jsonData.status && jsonData.status === 'error') {
    $('.js-dog-breed').html(
      `<p>${jsonData.message}</p>`
    );
  } else {
    $('.js-dog-breed').html(
      `<img src="${jsonData.message}" alt="dog image" />`
    );
  }
};

let handleDogBreedFormSubmit = function() {
  $('.js-dog-breed-gen').on('submit', e => {
    e.preventDefault();
    let breed = $('#dog-breed').val();
    getDogOfBreed(breed);
  });
};

// event listeners
handleDogCountFormSubmit();
handleDogBreedFormSubmit();
