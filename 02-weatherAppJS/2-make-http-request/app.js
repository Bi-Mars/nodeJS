//imports
const axios = require("axios");
const geoCode_func = require("./utils/geocode");
const weather_func = require("./utils/weather");

//get location from user using command line argument
//node app.js "beckley"
console.log(process.argv);
const location = process.argv[2];

if (location !== undefined) {
  //call the geoCode function
  geoCode_func(location, (error, data) => {
    // after getting geocode, use the data to call weather API
    weather_func(
      data.latitude,
      data.longitude,
      data.location,
      (error, response) => {
        if (error !== undefined) {
          console.log("Error: ", error);
        } else {
          console.log(
            `Weather Summary at ${response.location} is ${response.weather_descriptions}. Currently, the weather is ${response.current_temperature} but feels like ${response.feels_like}`
          );
        }
      }
    );
  });
} else {
  console.log("Please provide an address: example: node app.js beckley");
}

//exports
