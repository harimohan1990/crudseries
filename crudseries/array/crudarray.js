// Create: Start with an empty array
let items = [];
console.log("Initial Array:", items);

// Create: Add items
items.push("Carrot", "Potato", "Tomato");
console.log("After Adding:", items); // ['Carrot', 'Potato', 'Tomato']

// Read: Access elements
console.log("First Item:", items[0]); // 'Carrot'
console.log("All Items:", items); // ['Carrot', 'Potato', 'Tomato']

// Update: Modify an item
let index = items.indexOf("Potato");
if (index !== -1) {
  items[index] = "Cucumber";
}
console.log("After Update:", items); // ['Carrot', 'Cucumber', 'Tomato']

// Delete: Remove an item
items.splice(index, 1); // Remove 'Cucumber'
console.log("After Deletion:", items); // ['Carrot', 'Tomato']
