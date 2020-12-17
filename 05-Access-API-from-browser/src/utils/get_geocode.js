const axios = require("axios");

const get_geocode = (location, callback) => {
  const key_geocode =
    "pk.eyJ1IjoiYmltYXJzaCIsImEiOiJja2VvZmw4Y2YwMTB1Mnh0ODg3NmtjZTQ2In0.IrB2l7A6nZl4uS1mWdqEqw";

  const url_geocode = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${key_geocode}&limit=1`;

  //make API call to get geocode of specified location
  console.log(url_geocode);
  axios
    .get(url_geocode)
    .then((responseData) => {
      if (responseData.data.features.length < 0) {
        callback(
          "Unable to get geocode from the specified location",
          undefined
        );
      } else {
        const features = responseData.data.features[0];

        //provide above values to weather API call back function
        callback(undefined, {
          place_name: features.place_name,
          latitude: features.center[0],
          longitude: features.center[1],
        });
      }
    })
    .catch((error) => {
      callback(error, undefined);
    });
};

module.exports = get_geocode;
