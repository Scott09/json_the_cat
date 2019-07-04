const request = require('request');
const args = process.argv;

request(`https://api.thecatapi.com/v1/breeds/search/?q=${args[2]}`, function (error, response, body) {
  
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
  if (!error) {
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  } else {
    console.log('error ', error);
  }
  
});