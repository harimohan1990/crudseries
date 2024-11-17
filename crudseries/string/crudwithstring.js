// Create
let myString = "Welcome to JavaScript Programming!";
console.log("Original String:", myString);

// Read
console.log("Length of String:", myString.length);
console.log("Substring (0-7):", myString.substring(0, 7));
console.log("Includes 'JavaScript':", myString.includes("JavaScript"));

// Update
myString = myString.replace("Programming", "Development");
console.log("Updated String:", myString);

// Delete
myString = myString.replace("Welcome to", "").trim();
console.log("Deleted Part String:", myString);
