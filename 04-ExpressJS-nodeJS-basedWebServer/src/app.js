//express is only 1 function
const path = require("path"); // core node module to manipulate path (absolute) and is OS compatible
const express = require("express");

//execute the function and store return values in app
const app = express();

//serve the directories
app.use(express.static(path.join(__dirname, "../public")));

//Tell expressJS which templating engine we are using?
// set allows you to set a value for a given express setting
// parameter: key and value. key for template engine --> view engine
// express expects all of the views (handlebars template) to live in specific folder
// root of the project > views
app.set("view engine", "hbs");

// access dynamic html via handle bar
app.get("", (request, response) => {
  //render specified views
  // provide dynamic values (like Model object that contains data in Spring MVC)
  response.render("index", {
    title: "Weather App",
    creater: "Bimarsh Sharma",
  }); // index.hbs
});

// get route for about page
app.get("/about", (request, response) => {
  response.render("about", {
    title: "About Me!!",
    creater: "Bimarsh Sharma",
  });
});

//get route for help page
app.get("/help", (request, response) => {
  response.render("help", {
    help: "This page will help you out. 42",
  });
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
