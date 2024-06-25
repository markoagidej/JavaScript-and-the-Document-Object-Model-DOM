// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Write a function to display the product information on the webpage dynamically.
function displayLaptopDetails() {
    const paragraph = document.getElementById("display");
    paragraph.innerHTML = `<strong>${products[0].name}</strong>: $${products[0].price}<br>${products[0].description}`;
};

function displaySmartphoneDetails() {
    const paragraph = document.getElementById("display");
    paragraph.innerHTML = `<strong>${products[1].name}</strong>: $${products[1].price}<br>${products[1].description}`;
};

function displayHeadphonesDetails() {
    const paragraph = document.getElementById("display");
    paragraph.innerHTML = `<strong>${products[2].name}</strong>: $${products[2].price}<br>${products[2].description}`;
};

// Task 3: Implement an event listener to trigger the display of products when the page loads.
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("start").style.display = "none";
    document.getElementById("container").style.display = "block";
});