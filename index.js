let myButton = document.getElementById("budva");

let anwer = "";

myButton.addEventListener("click", function() {
  const buttonText = myButton.textContent;

  anwer += " Vendi qe do shkojme eshte :  Budva ----- ";
  console.log(buttonText);
});


let second = document.getElementById("Dubrovnik");

second.addEventListener("click", function() {
  const buttonText = second.textContent;
  anwer +=" Vendi qe do shkojme eshte : Dubrovnik  ----- ";
  console.log(buttonText);
});




let yje4 = document.getElementById("3");

yje4.addEventListener("click", function() {
  const buttonText = yje4.textContent;
  anwer +=" Hoteli qe do rrime eshte : 3 yje hoteli ----- ";
  console.log(buttonText);
});




let yje6 = document.getElementById("5");

yje6.addEventListener("click", function() {
  const buttonText = yje6.textContent;
  anwer +=" Hoteli qe do rrime eshte : 5 yje hoteli ----- ";
  console.log(buttonText);
});


let cante = document.getElementById("cante");

cante.addEventListener("click", function() {
  const buttonText = cante.textContent;
  anwer +=" Dhurate qe do te te bej une eshte :   Cante + make up ----- ";
  console.log(buttonText);
});


let karikues = document.getElementById("karikues");

karikues.addEventListener("click", function() {
  const buttonText = karikues.textContent;
  anwer +=" Dhurate qe do te te bej une eshte :   karikues ----- ";
  console.log(buttonText);
});




let button = document.getElementById("show");
let textElement = document.getElementById("answer");

// Add a "click" event listener to the button
button.addEventListener("click", function() {
  // Update the text content of the text element
  textElement.textContent = anwer;
});
