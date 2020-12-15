//express is only 1 function
const express = require("express");
//execute the function and store return values in app
const app = express();

//domain: Routes/Endpoint
//What to do when someone tries to get the resource at this endpoint/route?
//root page
app.get("", (request, response) => {
  // this function executes when user hits "/help" route/endpoint and describes what to send back(response)

  //send something back to requester
  response.send("Hello Express!");
});

// "/help" route
app.get("/help", (request, response) => {
  //send JSON --> array of objects
  response.send([
    {
      name: "Bimarsh",
      age: 22,
    },
    {
      name: "Bebo",
      age: 12,
    },
    {
      name: "Timmy",
      age: "Trumphet",
    },
  ]);
});

// "/about" route
app.get("/about", (request, response) => {
  //send HTML
  response.send("<h1> About Me coming soon...</h>");
});

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
