
const fs = require('fs');
// here the code line will capture user command line argument
const profileDataArgs = process.argv.slice(2);
// now we need to exract those arguments and store them into distinct variables.
// oneway to do this is to use the array index with the folowing expression, profileDataArgs.

const [name,github] = profileDataArgs;


const generatePage = (name,github) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> ${name }</h1>
  <h1> <a href = "">${github}</a> </h1>
</body>
</html>

  `;
}


// see the code below the fs.writefile() have three arguments 1. the file file name that will be created, or the outputfile 2. data thats been written: here the html string template from the function generatePage() 3. is a callback function that will handle any errors as well as the success message.

fs.writeFile('index.html',generatePage(name,github),err => {
  if (err) throw err;

  console.log('Portfolio complete! check out index.html to see the output!!!');
});