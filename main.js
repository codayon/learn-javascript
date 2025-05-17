console.log("learning javascript");
console.log("<=================>");

/**
 * Source: W3Schools
 * Topic: JS Output
 * Property: innerHTML
 * Description: Use when you want to change an HTML element.
 */

document.getElementById("innerHTML").innerHTML = "<h2>innerHTML</h2>";

/**
 * Property: innerText
 * Description: Use when you only want to change the plain text.
 */

document.getElementById("innerText").innerText = "innerText";

/**
 * Method: write()
 * Description: For testing purposes, it is convenient to use it
 * Note: The document.write() method should only be used for testing.
 */

document.write("write() before");

/**
 * Method: window.alert()
 * Description: Use an alert box to display data.
 * Note: In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional.
 */

window.alert("window.alert()");
