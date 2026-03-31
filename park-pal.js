// Dream Application: Park Pal
// This file includes examples of skills from Unit 0 modules.

// ------------------------------
// Values, Data Types, and Operations
// Store attraction data using strings, numbers, and booleans
let rideName = "Big Thunder Mountain";
let waitTime = 35;
let isOpen = true;

console.log("Ride:", rideName);
console.log("Wait time:", waitTime);
console.log("Open:", isOpen);

// ------------------------------
// Stringing Characters Together
// Format a message for the user
let parkMessage = "Next ride to check: " + rideName + " with a wait time of " + waitTime + " minutes.";
console.log(parkMessage);

// ------------------------------
// Control Structures and Logic
// Decide whether to recommend the ride
if (isOpen && waitTime < 45) {
  console.log(rideName + " is a good option right now.");
} else {
  console.log(rideName + " may not be the best choice right now.");
}

// ------------------------------
// Building Arrays
// Create an array of attractions
let attractions = ["Big Thunder Mountain", "Haunted Mansion", "Pirates of the Caribbean", "Space Mountain"];
console.log("Attractions:", attractions);

// ------------------------------
// Using Arrays
// Filter attractions with names longer than 15 characters
let longNames = attractions.filter(attraction => attraction.length > 15);
console.log("Long attraction names:", longNames);

// Use find to locate a specific attraction
let foundRide = attractions.find(attraction => attraction === "Haunted Mansion");
console.log("Found ride:", foundRide);

// ------------------------------
// Creating and Using Objects
// Store attraction details in objects
let ride1 = {
  name: "Big Thunder Mountain",
  thrillLevel: "Medium",
  waitTime: 35,
  accessibility: true
};

let ride2 = {
  name: "Space Mountain",
  thrillLevel: "High",
  waitTime: 60,
  accessibility: false
};

console.log("Ride 1:", ride1);
console.log("Ride 2:", ride2);

// ------------------------------
// Example combining arrays and objects
let rides = [ride1, ride2];

// Find accessible rides
let accessibleRides = rides.filter(ride => ride.accessibility === true);
console.log("Accessible rides:", accessibleRides);

// Map ride names for display
let rideNames = rides.map(ride => ride.name);
console.log("Ride names:", rideNames);

// ------------------------------
// Using reduce()
// Calculate total wait time for all rides
let totalWaitTime = rides.reduce((total, ride) => total + ride.waitTime, 0);

console.log("Total wait time:", totalWaitTime);
