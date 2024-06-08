console.log("Hello Calculator");

// CALCULATOR PROGRAM

const display = document.getElementById("display");


const appendToDisplay = (input) => {
 display.value = display.value + input;
}

console.log(display.value);

const clearDisplay = () => {
  display.value = "";
}

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error"
  }
}