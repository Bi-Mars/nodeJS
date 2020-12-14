//imports
const axios = require("axios");
const geoCode_func = require("./utils/geocode");
const weather_func = require("./utils/weather");

//call the geoCode function
geoCode_func("Kathmandu", (error, data) => {
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

//exports
