const request = require('request');



const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, function (error, response, body) {

    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body);
    if (error) {
      console.log('error ', error);
    }

    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(error, breed.description);
    } else {
      callback(`Failed to find ${breedName}`);
    }
  })
};




module.exports = fetchBreedDescription;