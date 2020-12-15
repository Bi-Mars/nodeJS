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
  // or default value   -->      { latitude, longitude, location} = {}
  geoCode_func(location, (error, { latitude, longitude, location } = data) => {
    // after getting geocode, use the data to call weather API
    weather_func(
      latitude,
      longitude,
      location,
      (
        error,
        { weather_descriptions, current_temperature, feels_like } = response
      ) => {
        if (error !== undefined) {
          console.log("Error: ", error);
        } else {
          console.log(
            `Weather Summary at ${location} is ${weather_descriptions}. Currently, the weather is ${current_temperature} but feels like ${feels_like}`
          );
        }
      }
    );
  });
} else {
  console.log("Please provide an address: example: node app.js beckley");
}

//exports
