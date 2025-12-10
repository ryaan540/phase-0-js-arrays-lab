// Write your code here

let products = ["Laptop", "Phone", "Headphones", "Monitor"];


// Log the first product in the array
function logFirstProduct() {
  console.log(products[0]);
}
logFirstProduct();


// Add a new product "Tablet" to the end of the array
function addProduct(productName) {
  products.push(productName);
}
addProduct("Tablet");
console.log(products);



// Update the second product to "Smartphone",
function updateProductName(index, newName) {
  products[index] = newName;
}
updateProductName(1, "Smartphone");
console.log(products);


// Remove the last product from the array
function removeLastProduct() {
   let removed = products.pop();
   console.log("Removed product:", removed);
}
removeLastProduct();
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
