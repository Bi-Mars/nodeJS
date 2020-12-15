//imports
const axios = require("axios");

//functions
// callback asynchronous function
const geoCode = (location, callback) => {
  const key_geocode =
    "pk.eyJ1IjoiYmltYXJzaCIsImEiOiJja2VvZmw4Y2YwMTB1Mnh0ODg3NmtjZTQ2In0.IrB2l7A6nZl4uS1mWdqEqw";

  const url_geocode = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${key_geocode}&limit=1`;

  // request to get geocode
  axios
    .get(url_geocode)
    // responseData.data.features
    .then(({ data } = responseData) => {
      if (data.features.length === 0) {
        // call callback function
        callback(
          "Unable to find location services. Check your URL location",
          undefined
        );
      } else {
        //function call
        callback(undefined, {
          latitude: data.features[0].center[0],
          longitude: data.features[0].center[1],
          location: data.features[0].place_name,
        });
      }
    })
    .catch((error) => {
      callback(error, undefined);
    });
};

//exports
module.exports = geoCode;
