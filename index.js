const output = document.getElementById('output');
const btns =document.querySelectorAll('.btn');
 const operatorButtons = document.querySelectorAll('[data-operator]');
 console.log(operatorButtons)

const clearBtn = document.getElementById('clear');
const equal = document.getElementById('equal');
const deleteBtn  =document.getElementById('delete')
const pointBtn=document.getElementById('point');

let operator = null;
let numbers = [];
// Function to handle number button clicks
function handleNumberClick(value) {
 
 if(output.textContent === '0'){
  output.textContent = ''
 }

  output.textContent += value;

}

// Function to handle operator button clicks
function handleOperatorClick(op) {
  operator = op;
  if (output.textContent.includes(op))return
  output.textContent += op;
    

}

// function delete last number
function handleDeleteClick (){
  numbers = output.textContent.split("")
  
  numbers.splice(numbers.length-1,1)   
  output.textContent = numbers.join("")

  }

  // function decimal number
  function point(){
  if(output.textContent.includes('.'))return
    output.textContent+='.';
  }


// Function to handle the equals button click
function handleEqualsClick() {
   numbers = output.textContent.split(operator); // Split the input string
  let result = numbers.reduce((acc, num) => { 
   
    switch (operator) {
      case '+':
        return Number(acc) + Number(num); 
       
      case '-':
        return Number(acc) - Number(num); 
       case 'x' :
        return Number(acc) * Number(num);
       case  '/' :
        if(Number(num)==0){
          alert('divition impossible')
          return null
        }
        else {return Number(acc) / Number(num)}
     
    }
  }); 
  result =  Math.round( (result) * 100) /100
  output.textContent =  result// Display the result

}

// Event listener for clear button
clearBtn.addEventListener('click', () => {
  output.textContent = `${0}`;
  numbers=[]
  operator = null;
});
// Event listeners for number buttons
btns.forEach((btn)=>btn.addEventListener('click',(e)=>handleNumberClick(e.target.textContent)))


// Event listeners for operator buttons
operatorButtons.forEach((buttton)=>buttton.addEventListener('click',(e)=>handleOperatorClick(e.target.textContent)))
pointBtn.addEventListener('click',point)


// Event listener for equals button
equal.addEventListener('click', handleEqualsClick);
deleteBtn.addEventListener('click',handleDeleteClick)

