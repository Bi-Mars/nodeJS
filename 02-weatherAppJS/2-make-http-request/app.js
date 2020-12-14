//imports
const axios = require("axios");

// Global variables
const key_weather = "84fcad3bbc7d485bae1e20c8d4f73759";
const key_geocode =
  "pk.eyJ1IjoiYmltYXJzaCIsImEiOiJja2VvZmw4Y2YwMTB1Mnh0ODg3NmtjZTQ2In0.IrB2l7A6nZl4uS1mWdqEqw";

const url_geocode = `https://api.mapbox.com/geocoding/v5/mapbox.places/lancaster.json?access_token=${key_geocode}&limit=1`;

// functions
const getWeather = (longitude, latitude) => {
  const url_weather = `http://api.weatherstack.com/current?access_key=${key_weather}&query=${longitude},${latitude}&units=f`;

  console.log(url_weather);

  axios
    .get(url_weather)
    .then((responseData) => {
      if (responseData.data.error) {
        // if error with URL
        console.log("Unable to find location");
      }
      console.log(
        `${responseData.data.current.weather_descriptions[0]} It is currently ${responseData.data.current.temperature} degrees out. It feels like ${responseData.data.current.feelslike}.`
      );
    })
    .catch((error) => {
      // low level error
      console.log(error);
    });
};

// request to get geocode
axios
  .get(url_geocode)
  .then((responseData) => {
    if (responseData.data.features.length === 0) {
      console.log("Unable to find location services. Check your URL location");
    } else {
      const latitude = responseData.data.features[0].geometry.coordinates[0];
      const longitude = responseData.data.features[0].geometry.coordinates[1];

      getWeather(longitude, latitude);
    }
  })
  .catch((error) => {
    console.log("Unable to connect to location services!!");
  });
//exports
