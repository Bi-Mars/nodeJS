//express is only 1 function
const path = require("path"); // core node module to manipulate path (absolute) and is OS compatible
const express = require("express");

//execute the function and store return values in app
const app = express();

//serve the directories
app.use(express.static(path.join(__dirname, "../public")));

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
