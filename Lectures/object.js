// Boolean
// String
// Number
// undefined / null
//----------------------
// Array [1,2,3,4]
// Object {key: value}

var animals = ["zebra", "lion", "elephant"]
var person = ["John", "Smith", 38, "Pizza", true]

var personObject = {
    firstName : "John",
    lastName : "Smith",
    age : 38,
    favFood : "Pizza",
    isAdmin : true
}

// adding another property (key - value pair)

personObject.favColor = "Blue";

console.log(personObject);

var taco1 = {
    "tortilla": "soft corn tortilla",
    "proteins": "tinga chicken",
    "cheese": "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + taco1.tortilla);
        console.log("Protein: " + taco1.proteins);
        console.log("Cheese: " + taco1.cheese);
        console.log("Toppings: " + taco1.toppings);
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein: " + this.proteins);
        console.log("Cheese: " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}

console.log(taco1.tacoInfo());

var today = new Date();

console.log(today);