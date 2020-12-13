console.log("Starting");

//asynchronous function
setTimeout(() => {
  console.log("Run this function after 2000ms aka 2 seconds");
}, 2000);

setTimeout(() => {
  console.log("Run this function after 0ms aka 0 second");
}, 0);
console.log("Stopping");
