const axios = require("axios");

const get_weather = (geoCode, callback) => {
  const key_weather = "84fcad3bbc7d485bae1e20c8d4f73759";
  const url_weather = `http://api.weatherstack.com/current?access_key=${key_weather}&query=${geoCode.longitude},${geoCode.latitude}&units=f`;

  //make API call
  console.log(url_weather);
  axios
    .get(url_weather)
    .then(({ data } = responseData) => {
      if (data.error) {
        callback("Unable to get weather data. Check geoCode", undefined);
      } else {
        callback(undefined, {
          weather_description: data.current.weather_descriptions[0],
          current_temperature: data.current.temperature,
          feels_like: data.current.feelslike,
          location: geoCode.place_name,
        });
      }
    })
    .catch((error) => {
      callback(error, undefined);
    });
};

module.exports = get_weather;
