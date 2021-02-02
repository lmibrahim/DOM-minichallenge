"use strict";
let total = 0;
let totalParagraph = document.querySelector(".new-total");
let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `$${total}`;
});

peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `$${total}`;
});

chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `$${total}`;
});

gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `$${total}`;
});

// SECOND CHALLENGE
// USE FOR LOOP
// no reloading page
// listen for submisison on form (eventlistener)
// derive two values from the inputs
// use input values to create number of coins and respected type

// second.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let formData = new FormData(money);
//   let amount = formData.get("amount");
//   let type = formData.get("type");
// });

// CHALLENGE 3
// let lightBulb = document.querySelector(".light-bulb");
let onButton = document.querySelector(".onbutton");
let lightBulb = document.querySelector(".light-bulb");
let offButton = document.querySelector(".offbutton");
let toggleButton = document.querySelector(".togglebutton");
let endButton = document.querySelector(".endbutton");

onButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "yellow";
});

offButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "gray";
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("alternate");
});

// endButton.addEventListener("click", () => {
//   lightBulb.classList.add("disappear");
//   offButton.disabled();
// toggleButton.disabled();
// onButton.disabled();
// });
