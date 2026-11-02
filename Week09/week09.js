// This is the external JavaScript file for Week 9.
console.log("Running Week 9 JavaScript code...");
document.body.style.backgroundColor = "#dbdbdb"; // Change background color to AliceBlue
console.log("Background color changed to #dbdbdb (AliceBlue).");

//we use variables and constants to keep track of data in our program. We can use the let keyword to declare a variable that can be changed later, and the const keyword to declare a variable that cannot be changed later.
//start with const if you need to change something later then you use variables
let recordCount = 12;

//cons are great for remembering things that will not change, like the name of a collection in a database.
const outputElement = document.getElementById("output");

console.log(collectionName);
console.log(recordCount);

recordCount = 15;
console.log(recordCount); // 15

//I can also increase it by some ammount, for example, 3.
recordCount += 3; // recordCount = recordCount + 3
console.log(recordCount); // 18

//so I can reference the variable in other parts of my code, and it will always have the most up-to-date value.
console.log(`The collection ${collectionName} has ${recordCount} records.`);