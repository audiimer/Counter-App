// Select the HTML element with a class of "count"
const count = document.querySelector(".count");

// Select the HTML element with a class of "buttons"
const buttons = document.querySelector(".buttons");

// Add a click event listener to the "buttons" element
buttons.addEventListener("click", (e) => {
  // Check if the clicked element has a class of "add"
  if (e.target.classList.contains("add")) {
    // If it does, increment the count by 1
    count.innerHTML++;
    // Calls the setColor() function
    setColor();
  } else if (e.target.classList.contains("subtract")) {
    // Check if the clicked element has a class of "subtract"
    // If it does, decrement the count by 1
    count.innerHTML--;
    // Calls the setColor() function
    setColor();
  } else {
    // If the clicked element does not have either class, set the count to 0
    count.innerHTML = 0;
    // Calls the setColor() function
    setColor();
  }
});

// Define a function called "setColor"
const setColor = () => {
    // Check if the count is greater than 0
    if (count.innerHTML > 0) {
      // If it is, set the color of the count element to yellow
      count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
      // Check if the count is less than 0
      // If it is, set the color of the count element to red
      count.style.color = "red";
    } else {
      // If the count is 0, set the color of the count element to white
      count.style.color = "#fff";
    }
  }
