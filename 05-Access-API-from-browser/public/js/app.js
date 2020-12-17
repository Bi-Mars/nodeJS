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
