//asynchronous callback
setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

//synchronous callback
const names = ["Bimarsh", "Binisha", "Timmy", "Jen", "Ben"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

//callback function asynchronous
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    return data;
  });
};

const data = geocode("Lancaster");
console.log(data);

//Asynchronous function: callback functions don't get executed until stack frame is empty
const geocodeCallBack = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    // callback function is called here
    callback(data);
    console.log("3 seconds are up");
  }, 3000);
};

// callback function is defined here
geocodeCallBack("lancaster", (anyData) => {
  console.log(anyData);
});

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// function that takes data and function as input and at some point the function calls
const add = (num1, num2, callback) => {
  setTimeout(() => {
    const add = num1 + num2;
    //use call back function
    callback(add);
  }, 3500);
};

//define call back function
add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
