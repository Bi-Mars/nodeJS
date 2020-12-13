//imports
const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=84fcad3bbc7d485bae1e20c8d4f73759&query=37.8367,-122.4233&units=f";

//functions
//json:true --> Parse JSON data
request({ url: url }, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    //parse JSON data
    const data = JSON.parse(response.body);
    // console.log(data);
    console.log(data.current);
  }
});

//json:true --> Parse JSON data
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    // console.log(data);
    console.log(
      `${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike}.`
    );
  }
});

//exports
