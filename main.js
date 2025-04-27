///////////////////////////
/// learning javascript ///
///////////////////////////

// use of backtick
let title = "fighter";
title == "fighter"
  ? console.log("he is a fighter.")
  : console.log("he is not a fighter.");

// use of split, toUpperCase, toLowerCase,
let nickname = "there is a guy named joe rogan.";
console.log(nickname.split(" "));
console.log(nickname.split(" ")[5]);
console.log(nickname.toLowerCase());
console.log(nickname.toUpperCase());

// use of dom
let heading = document.querySelector("h1");
console.log(heading.innerHTML);
let reading = document.querySelectorAll("h3");
console.log(reading);

// project one: change color
let body = document.querySelector("body");
let button = document.querySelector("button");
button.addEventListener("click", function () {
  body.style.backgroundColor = "#222222";
});
