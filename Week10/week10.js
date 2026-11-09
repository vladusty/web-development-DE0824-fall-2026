console.log("Week 10 JavaScript file loaded successfully!");
console.log("This is the Week 10 JavaScript file.");

//let's get a contant reference to out output container div element
//const outputContainer = document.getElementById("output-container"); // Only the first element with this id will be returned
const outputContainer = document.querySelector(".output-container");

// now we can access and modify various preperties of the outputContainer element, such as its innerHTML, style, and classList. For example, we can change the text content of the outputContainer element like this:
// Inner html is a bit dangerous because it can be used to inject malicious code into your page. So, be careful when using it. In this case, we are just changing the text content of the outputContainer element, so it's safe to use innerHTML here.
// outputContainer.innerHTML = "<p>This is the output container. We can change its content using JavaScript.</p>";
//the security issue is that if someone else (say a user) supplies content that is then inserted into the page using innerHTML, they could inject malicious code (like a script) that would run in the context of your page. This is known as a cross-site scripting (XSS) attack. To avoid this, you should always sanitize any user-supplied content before inserting it into the page using innerHTML. In this case, we are not using any user-supplied content, so it's safe to use innerHTML here.

//if we just want to change or set some text better to use textContent instead of innerHTML. This will set the text content of the outputContainer element without interpreting it as HTML. For example:
outputContainer.textContent = "This is the output container. We can change its content using JavaScript.";

//let's talk about booleans
// let's state some truth values about Riga and our course
// note how I name these variables in a way that makes it clear what they represent. This is a good practice in programming, as it makes your code more readable and easier to understand. (Camel case)
// camelCase is a naming convention in which the first letter of the first word is lowercase, and the first letter of each subsequent word is uppercase. This makes it easy to read and understand variable names that consist of multiple words. For example, isRigaTheCapitalOfLatvia is a camel case variable name that clearly indicates that it represents a boolean value indicating whether Riga is the capital of Latvia.
const isRigaTheCapitalOfLatvia = true;
const isJavaScriptFun = true;

//use semantically meaningful names (not a/b/c/x/y)

//how about false
const isItSummer = false;
const isItSunny = false;

// if we expect our variables to change we use let
// start with constant but if you think you need to change it later, use let instead of const. This is a good practice in programming, as it makes your code more flexible and easier to maintain. For example, if we want to change the value of isItRaining later in our code, we can use let instead of const. This will allow us to reassign a new value to isItRaining without causing an error. If we had used const, we would not be able to reassign a new value to isItRaining, and we would get an error if we tried to do so.
let isItRaining = false;

//let's print out them in our output container
// we will adjust our textContent to include the values of our Boolean
outputContainer.textContent = `Is Riga the capital of Latvia? ${isRigaTheCapitalOfLatvia}
Is JavaScript fun? ${isJavaScriptFun}
Is it summer? ${isItSummer}
Is it sunny? ${isItSunny}
Is it raining? ${isItRaining}`;

// we can get Boolean variables from operations
let publicationYear = 1925;
console.log(`Publication year > 1900: ${publicationYear > 1900}`); // true
console.log(`Publication year < 1900: ${publicationYear < 1900}`);
console.log(`Publication year === 1925: ${publicationYear === 1925}`);
console.log(`Publication year !== 1925: ${publicationYear !== 1925}`);
console.log(`Publication year >= 1925: ${publicationYear >= 1925}`);

// in python we can check for every value whether it is truthy or falsy. In JavaScript we can do the same thing. For example, we can check if a variable is truthy or falsy like this:
let someVariable = 0;

//now when we know Boolens we can use them in conditional statements.
// so if year is over 1925 we will output "The book was published after 1925" otherwise we will output "The book was published in 1925 or before
// imagine this is where I get update from some database or some source of the year

publicationYear = 1924;

if (publicationYear < 1925) {
  outputContainer.textContent += "\nThe book was published before 1925";
  console.log("The book was published before 1925");
} else if (publicationYear > 1925) {
    console.log("The book was published after 1925");
    outputContainer.textContent += "\nThe book was published after 1925";
} else {
    console.log("The book was published in 1925");
    outputContainer.textContent += "\nThe book was published in 1925";
}


// if else nesting hell (triangle pattern). Try to make it flat. Usually you can avoid overnesting if else statements by using logical operators (&&, ||) and by using early returns in functions. This will make your code more readable and easier to understand. For example, instead of nesting if else statements, you can use logical operators to combine conditions and return early from a function if a condition is met. This will make your code more readable and easier to understand.

// we are in the first half of the minute programme
const currentSecond = new Date().getSeconds();
//print seconds
console.log(`Current second: ${currentSecond}`);

if (currentSecond < 30) {
    console.log("We are in the first half of the minute");
    outputContainer.textContent += "\nWe are in the first half of the minute";
} else {
    console.log("We are in the second half of the minute");
    outputContainer.textContent += "\nWe are in the second half of the minute";
}

//let's start with negation
let isItWeekend = false;
if (!isItWeekend) {
    console.log("It's a weekday");
    outputContainer.textContent += "\nIt's a weekday.";
} else {
    console.log("It's the weekend");
    outputContainer.textContent += "\nIt's the weekend.";
}
// note it is still false
console.log(`isItWeekend: ${isItWeekend}`); // false
// we can flip the value of a boolean variable using the negation operator (!). For example, we can flip the value of isItWeekend like this:
isItWeekend = !isItWeekend;
console.log(`isItWeekend: ${isItWeekend}`); // true
// there is a trick to flip the value (flip-flop) of a boolean variable using the negation operator (!). For example, we can flip the value of isItWeekend like this:
isItWeekend = !isItWeekend;
console.log(`isItWeekend: ${isItWeekend}`); // false

//now conjunction (AND) and disjunction (OR)
//lets print all 4 combinations of true and false
console.log(`true && true: ${true && true}`); // true
console.log(`true && false: ${true && false}`); // false
console.log(`false && true: ${false && true}`); // false
console.log(`false && false: ${false && false}`); // false

//so we could use isItWeekend and isItRaining to determine if we should go for a walk. We can use the AND operator (&&) to check if both conditions are true. If both conditions are true, we can go for a walk. If either condition is false, we cannot go for a walk.
// lets print values of isItWeekend and isItRaining
console.log(`isItWeekend: ${isItWeekend}`);
console.log(`isItRaining: ${isItRaining}`);
if (isItWeekend && !isItRaining) {
    console.log("We can go for a walk");
    outputContainer.textContent += "\nWe can go for a walk.";
} else { // this covers 3 situations: 1) isItWeekend is false, 2) isItRaining is true, 3) both are false
    console.log("We cannot go for a walk");
    outputContainer.textContent += "\nWe cannot go for a walk.";
}

//disjunction (OR)
console.log(`true || true: ${true || true}`); // true
console.log(`true || false: ${true || false}`); // true
console.log(`false || true: ${false || true}`); // true
console.log(`false || false: ${false || false}`); // false

// let's have and example in action
isItRaining = true;
if (isItWeekend || isItRaining) {
    console.log("We cannot go for a walk");
    outputContainer.textContent += "\nWe cannot go for a walk.";
} else {
    console.log("We can go for a walk");
    outputContainer.textContent += "\nWe can go for a walk.";
}

// finally discussion about truthy and falsy values in JavaScript. In JavaScript, a value is considered truthy if it evaluates to true in a boolean context, and falsy if it evaluates to false. The following values are considered falsy in JavaScript: false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN. All other values are considered truthy. For example, the string "hello" is truthy, while the empty string "" is falsy.
// in Javascript, we can use the Boolean() function to convert a value to a boolean. For example, we can convert the string "hello" to a boolean like this:


// any not empty string is truthy
let someString = "hello";
if (someString) {
    console.log("someString is truthy");
    outputContainer.textContent += "\nsomeString is truthy.";
}

//number 0 is also false
// let someNumber = 10;
let someNumber = 0;
if (someNumber) {
    console.log("someNumber is truthy");
    outputContainer.textContent += "\nsomeNumber is truthy.";
} else {
    console.log("someNumber is falsy");
    outputContainer.textContent += "\nsomeNumber is falsy.";
}

// try to be strict in what you check for, because if you check for truthy or falsy values, you might get unexpected results. For example, if you check for a variable that is supposed to be a number, but it is actually a string, you might get unexpected results. So, it's better to check for the specific value you expect, rather than just checking for truthy or falsy values. For example, if you expect a variable to be a number, you should check if it is a number using the typeof operator, rather than just checking if it is truthy or falsy.