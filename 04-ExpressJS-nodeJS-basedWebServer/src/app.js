//express is only 1 function
const express = require("express");
//execute the function and store return values in app
const app = express();

//domain: Routes/Endpoint
//What to do when someone tries to get the resource at this endpoint/route?
app.get("", (request, response) => {
  // this function executes when user hits "/help" route/endpoint and describes what to send back(response)

  //send something back to requester
  response.send("Hello Express!");
});

// "/help" route
app.get("/help", (request, response) => {
  response.send("Help Page");
});

// "/about" route
app.get("/about", (request, response) => {
  response.send("<h1> About Me coming soon...</h>");
});

// "weather" route
app.get("/weather", (request, response) => {
  response.send("<i> Weather forecast service will be added</i>");
});

//start up the server and listen on specific port
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
