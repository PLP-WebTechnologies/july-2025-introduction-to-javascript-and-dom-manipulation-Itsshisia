// ========================
// Part 1: JavaScript Basics
// ========================

// Variable + Conditional
function checkAge() {
  let age = document.getElementById("ageInput").value; // capture input
  let message = "";

  if (age >= 18) {
    message = "You are an adult ✅";
  } else if (age > 0) {
    message = "You are a minor 👶";
  } else {
    message = "Please enter a valid age!";
  }

  // Output result in webpage
  document.getElementById("ageResult").textContent = message;
}

// ========================
// Part 2: Functions
// ========================

// Function 1: Calculate total
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent = `The total is: ${total}`;
}

// Function 2: Toggle text visibility
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// ========================
// Part 3: Loops
// ========================

// Example 1: For loop
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list before adding
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }
}

// Example 2: While loop (countdown)
function countdown(start) {
  let result = "";
  let i = start;
  while (i >= 0) {
    result += i + " ";
    i--;
  }
  document.getElementById("countdownResult").textContent = result;
}

// ========================
// Part 4: DOM Manipulation
// ========================

// 1. Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "#f9f9f9" : "lightblue";
});

// 2. Add item to list dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
});

// 3. Extra DOM example: click anywhere to log coordinates
document.body.addEventListener("click", function(event) {
  console.log(`You clicked at X:${event.clientX}, Y:${event.clientY}`);
});
