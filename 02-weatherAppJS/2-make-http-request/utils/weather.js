//imports
const axios = require("axios");

//function
// functions
const weather = (latitude, longitude, place, callback) => {
  const key_weather = "84fcad3bbc7d485bae1e20c8d4f73759";
  const url_weather = `http://api.weatherstack.com/current?access_key=${key_weather}&query=${longitude},${latitude}&units=f`;

  console.log(url_weather);

  axios
    .get(url_weather)
    .then((responseData) => {
      if (responseData.data.error) {
        // if error with URL
        callback("Unable to find location", undefined);
      } else {
        //if response is good from the API, call this function and provide expected value
        callback(undefined, {
          weather_descriptions:
            responseData.data.current.weather_descriptions[0],
          current_temperature: responseData.data.current.temperature,
          feels_like: responseData.data.current.feelslike,
          location: place,
        });
      }
    })
    .catch((error) => {
      // low level error
      callback("Unable to Connect", undefined);
    });
};

//exports
module.exports = weather;
