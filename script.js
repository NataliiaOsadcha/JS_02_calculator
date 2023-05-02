const request = (prompt('Please enter an action: +, -, *, /'));

const firstOperand = (prompt('Please enter first number'));
const firstValue = parseFloat(firstOperand);

const secondOperand = (prompt('Please enter second number'));
const secondValue = parseFloat(secondOperand);




if  (request === '+') { 
		result = firstValue + secondValue;
} 


else if (request === '-') {
		result = firstValue - secondValue;
}

else if (request === '*') {
		result = firstValue * secondValue;
}

else {
		result = firstValue / secondValue;
}

alert('Your result ' + result);