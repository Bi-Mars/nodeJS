const square = function (x) {
  return x * x;
};

console.log("Square: " + square(3));

// arrow function
const cube = (x) => {
  return x * x * x;
};
console.log("Cube: " + cube(3));

// short hand arrow function; only if single statement
const quadruple = (x) => x * x * x * x;
console.log("Quadruple: " + quadruple(4));

// regular function as properites (method) on Object
const eventObject = {
  name: "Birthday Party",
  guestList: ["Bimarsh Sharma", "Binisha Sharma", "Timmy Trumpet"],
  printGuestList: function () {
    console.log("Guest list for " + this.name);
    console.log(
      "------------------------------------------------------------------------------------"
    );
    console.log("Guests List:");
    this.guestList.forEach(function (guest) {
      console.log(
        "\t" + guest + " is attending " + this.name + " from classic function."
      );
    });
    console.log(
      "------------------------------------------------------------------------------------"
    );
    this.guestList.forEach((guest) => {
      console.log(
        "\t" + guest + " is attending " + this.name + " from Arrow function."
      );
    });
    console.log(
      "------------------------------------------------------------------------------------"
    );
  },
};

eventObject.printGuestList();

// Arrow function as properites (method) on Object
const eventArrow = {
  name: "Birthday Party",
  printGuestList: () => {
    console.log("Guest list for " + this.name);
  },
};

eventArrow.printGuestList();
