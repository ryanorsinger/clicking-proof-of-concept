// This will print out the HTML object you click with the mouse
// document.addEventListener("click", function(event) {
//     console.log(event.target)
// })


// get the class names of the clicked element.
// document.addEventListener("click", function(event) {
//     let htmlElementClicked = event.target
//     let classNames = htmlElementClicked.getAttribute("class").split(" ")
//     console.log(classNames)
  
// })

let colors = ["yellow", "pink", "lightblue", "orange", "salmon", "burlywood"]
let colorIndex = 0
let color = colors[colorIndex];

// Whatever I click, change the background color to yellow
// If there are other HTML elements with the same class name, highlight those yellow, too
document.addEventListener("click", function(event) {
    console.log(event.target)

    if (event.target.style.backgroundColor != colors[colorIndex]) {
       colorIndex += 1;
       color = colors[colorIndex];
    }
  
    let htmlElementClicked = event.target
    let classNames = htmlElementClicked.getAttribute("class")
    
    let selector = "." + classNames.split(" ").join(".")
    
    let matchingElements = Array.from(document.querySelectorAll(selector))
    
    matchingElements.forEach(function(element) {
        element.style.backgroundColor = color;
    })
  
})