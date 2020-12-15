//express is only 1 function
const path = require("path"); // core node module to manipulate path (absolute) and is OS compatible
const express = require("express");

//execute the function and store return values in app
const app = express();

//serve the directories
app.use(express.static(path.join(__dirname, "../public")));

// __dirname --> contains a path to directory that current script lives in
console.log(__dirname);
// __filename --> contains a path to file that current file lives in
console.log(__filename);

//path --> provided by core node module and is OS compatible
// Join path name and add .. to go 1 ldirectory up
console.log(path.join(__dirname, "../public"));

// "weather" route
app.get("/weather", (request, response) => {
  //send JSON
  response.send({
    forecast: "32",
    location: "lancaster",
  });
});

//start up the server and listen on specific port
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
