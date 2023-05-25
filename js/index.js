function calculate() {
    var number1 = +(document.getElementById("one").value);
    var number2 = +(document.getElementById("two").value);
    var operation = document.getElementById("select").value;
    var result;
  
    if (operation === "add") {
      result = number1 + number2;
    } else if (operation === "minus") {
      result = number1 - number2;
    } else if (operation === "times") {
      result = number1 * number2;
    } else if (operation === "divide") {
      result = number1 / number2;
    }
  
    alert("Calculation: " + result);
  }


    
