let input = document.getElementById('inputBox');         // to select the html input element with the specified id
let buttons = document.querySelectorAll('button');       // to select all the button elements on the web page
let equal_pressed = 0;

let string = "";                                         // to  convert the buttons NodeList into a regular array using the Array.from()
let arr = Array.from(buttons);
arr.forEach(button => {                                  // attaching click event listener to every button
button.addEventListener('click', (e) =>{

if(e.target.innerHTML == '='){                           // returns the HTML element that triggered an event
string = eval(string);
input.value = string;
}

else if(e.target.innerHTML == 'AC'){
string = "";
input.value = string;
}

else{
string += e.target.innerHTML;
input.value = string;
}

})
})

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    alert("Invalid Input");
  }
})
