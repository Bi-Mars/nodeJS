const fs = require("fs");

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};

//convert to json
const bookJSON = JSON.stringify(book);
// write the converted JSON into file
fs.writeFileSync(`1-json.json`, bookJSON);
//parse the JSON
const parsedData = JSON.parse(bookJSON);
console.log(parsedData);

// read file sync
const dataBuffer = fs.readFileSync("1-json.json");
// read in buffer
console.log(dataBuffer);
//convert buffer into string
console.log(dataBuffer.toString());

//parse JSON back into object
const dataParsed = JSON.parse(dataBuffer.toString());
//use JS object
console.log("title: " + dataParsed.title);

//CHALLENGE, read from the file, change the data and overwrite exisitng data
const bufferData = fs.readFileSync("1-json.json");
//convert the Buffered data into String JSON and finally into JS object
const parseObject = JSON.parse(bufferData.toString());

parseObject.title = "Way of the wolf";
parseObject.author = "Jordan Belfort";

// convert object back into JSON
const updatedJSON = JSON.stringify(parseObject);
fs.writeFileSync("1-json.json", updatedJSON);
