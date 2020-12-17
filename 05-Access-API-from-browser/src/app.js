//express is only 1 function
const path = require("path"); // core node module to manipulate path (absolute) and is OS compatible
const express = require("express");
const hbs = require("hbs"); //for partial templating
const { request } = require("http");
const { response } = require("express");
const get_geocode = require("./utils/get_geocode");
const get_weather = require("./utils/get_weather");

//execute the function and store return values in app
const app = express();

// define paths for ExpressJS configuration
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views/"); // path to templates
const partialsPath = path.join(__dirname, "../templates/partials/");

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
    message: "This page will help you out. 42",
    title: "Help Me",
    creater: "Bimarsh Sharma",
  });
});

app.get("/products", (request, response) => {
  if (!request.query.search) {
    return response.send({
      error: "You must provide a search item",
    });
  }
  console.log(request.query.search);
  response.send({
    products: [],
  });
});

// "weather" route
app.get("/weather", (request, response) => {
  //user must provide address
  if (!request.query.address) {
    return response.send({
      errorMessage: "You must provide address to access weather info.",
    });
  }

  // call Geocode API and Weather API
  get_geocode(request.query.address, (error, geoCode_data) => {
    if (error) {
      return response.send({
        errorMessageGeoCode: error,
      });
    }
    get_weather(geoCode_data, (error, weather_data) => {
      if (error) {
        return response.send({
          errorMessageWeather: error,
        });
      }
      response.send(weather_data);
    });
  });
});

app.get("/help/*", (request, response) => {
  response.render("error404", {
    title: "404",
    creater: "Bimarsh Sharma",
    errorMessage: "Help article not found",
  });
});

// match anything
app.get("*", (request, response) => {
  response.render("error404", {
    title: "404",
    creater: "Bimarsh Sharma",
    errorMessage: "Page Not found",
  });
});

//start up the server and listen on specific port
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
