
const fs = require('fs');
const generatePage = require('./src/page-tempate')
// here the code line will capture user command line argument
const profileDataArgs = process.argv.slice(2);
// now we need to exract those arguments and store them into distinct variables.
// oneway to do this is to use the array index with the folowing expression, profileDataArgs.

const [name,github] = profileDataArgs;




// see the code below the fs.writefile() have three arguments 1. the file file name that will be created, or the outputfile 2. data thats been written: here the html string template from the function generatePage() 3. is a callback function that will handle any errors as well as the success message.

fs.writeFile('index.html',generatePage(name,github),err => {
  if (err) throw err;

  console.log('Portfolio complete! check out index.html to see the output!!!');
});