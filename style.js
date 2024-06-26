// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.
function changeColor(color) {
    if (color == "blue") {
        target = document.getElementById("boxBlue");
        target.style.backgroundColor = "blue";
    }
    if (color == "green") {
        target = document.getElementById("boxGreen");
        target.style.backgroundColor = "green";
    }
    if (color == "red") {
        target = document.getElementById("boxRed");
        target.style.backgroundColor = "red";
    }
    if (color == "orange") {
        target = document.getElementById("boxOrange");
        target.style.backgroundColor = "orange";
    }
    if (color == "black") {
        target = document.getElementById("boxBlack");
        target.style.backgroundColor = "black";
        target.style.color = "white";
    }
    target.innerHTML = "Reset to turn back!"
}

// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.
function reset() {
    target = document.getElementById("boxBlue");
    target.style.backgroundColor = "white";
    target.innerHTML = "Click me to change to blue";
    target = document.getElementById("boxGreen");
    target.style.backgroundColor = "white";
    target.innerHTML = "Click me to change to green";
    target = document.getElementById("boxRed");
    target.style.backgroundColor = "white";
    target.innerHTML = "Click me to change to red";
    target = document.getElementById("boxOrange");
    target.style.backgroundColor = "white";
    target.innerHTML = "Click me to change to orange";
    target = document.getElementById("boxBlack");
    target.style.backgroundColor = "white";
    target.innerHTML = "Click me to change to black";
    target.style.color = "black";
}

// Blue box border
document.getElementById("boxBlue").addEventListener("mouseover", function() {
    document.getElementById("boxBlue").style.border = "thin solid black"
});
document.getElementById("boxBlue").addEventListener("mouseout", function() {
    document.getElementById("boxBlue").style.border = "0 solid black"
});

// Green box border
document.getElementById("boxGreen").addEventListener("mouseover", function() {
    document.getElementById("boxGreen").style.border = "thin solid black"
});
document.getElementById("boxGreen").addEventListener("mouseout", function() {
    document.getElementById("boxGreen").style.border = "0 solid black"
});

// Red box border
document.getElementById("boxRed").addEventListener("mouseover", function() {
    document.getElementById("boxRed").style.border = "thin solid black"
});
document.getElementById("boxRed").addEventListener("mouseout", function() {
    document.getElementById("boxRed").style.border = "0 solid black"
});

// Orange box border
document.getElementById("boxOrange").addEventListener("mouseover", function() {
    document.getElementById("boxOrange").style.border = "thin solid black"
});
document.getElementById("boxOrange").addEventListener("mouseout", function() {
    document.getElementById("boxOrange").style.border = "0 solid black"
});

// Black box border
document.getElementById("boxBlack").addEventListener("mouseover", function() {
    document.getElementById("boxBlack").style.border = "thin solid black"
});
document.getElementById("boxBlack").addEventListener("mouseout", function() {
    document.getElementById("boxBlack").style.border = "0 solid black"
});