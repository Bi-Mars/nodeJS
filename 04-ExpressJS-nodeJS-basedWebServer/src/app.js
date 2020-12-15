//express is only 1 function
const path = require("path"); // core node module to manipulate path (absolute) and is OS compatible
const express = require("express");
const hbs = require("hbs"); //for partial templating

//execute the function and store return values in app
const app = express();

// define paths for ExpressJS configuration
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views"); // path to templates
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath); // point express to custom directories to serve views
hbs.registerPartials(partialsPath);

// Setup static directories to serve
app.use(express.static(publicDirectoryPath));

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
