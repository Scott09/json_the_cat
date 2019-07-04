const request = require('request');
const args = process.argv;

request(`https://api.thecatapi.com/v1/breeds/search/?q=${args[2]}`, function (error, response, body) {
  
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
    if (error) {
      console.log('error ', error);
    }
  
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) { 
      console.log(breed.description);
    } else {
      console.log(`Failed to find ${args[2]}`);
    }


  
    

  
});