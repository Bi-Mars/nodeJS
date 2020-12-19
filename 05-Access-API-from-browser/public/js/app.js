fetch("http://puzzle.mead.io/puzzle")
  .then((response) => {
    response.json().then((parsedData) => {
      console.log(parsedData);
    });
  })
  .catch((error) => {});

fetch("http://localhost:3000/weather?address=lancaster").then((response) => {
  response.json().then((parsedData) => {
    if (parsedData.error) {
      console.log(parsedData.error);
    } else {
      console.log(parsedData.location);
      console.log(parsedData.forecast);
    }
  });
});

//select the element
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents default browser\
  const location = search.value;
  message1.textContent = "Loading...";
  message2.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((parsedData) => {
        if (parsedData.error) {
          message1.textContent = parsedData.error;
        } else {
          message1.textContent = parsedData.location;
          message2.textContent = `${parsedData.weather_description}. Currently it is ${parsedData.current_temperature} but feels like ${parsedData.feels_like}`;
        }
      });
    }
  );
});
