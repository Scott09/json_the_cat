const breedFetcherDescription = require('./breedFetcher');
const args = process.argv;

breedFetcherDescription(args[2], (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
