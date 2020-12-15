// 2 core modules --> HTTP, HTTPS
//imports
const http = require("http");

const key_weather = "84fcad3bbc7d485bae1e20c8d4f73759";
const url_weather = `http://api.weatherstack.com/current?access_key=${key_weather}&query=45,-75&units=f`;

//fire up request
const request = http.request(url_weather, (response) => {
  let data = "";
  //register a handler, fires when data come in. Fires one time or multiple time
  response.on("data", (chunk) => {
    // chunk is buffer data
    console.log(chunk);
    //convert buffer data into JSON/string
    data = data + chunk.toString();
  });

  // when response is over: what to do?
  response.on("end", () => {
    // console.log(data);
    //parse the JSON
    const responseBody = JSON.parse(data);
    console.log(responseBody);
  });
});

//handle bad error during request/response cycle
//fires when error occurs
request.on("error", (error) => {
  console.log("An error: ", error);
});

// we are done with request and send the request
request.end();
