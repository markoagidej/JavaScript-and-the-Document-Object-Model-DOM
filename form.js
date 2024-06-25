// Task 2: Write JavaScript code to handle form submissions and store user input in an object.
function DataObject(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
};

document.getElementById("collector").addEventListener("submit", function(event) {
    event.preventDefault();
    let newData = new DataObject(
        document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("favoriteColor").value
    )
    console.log(newData)
});