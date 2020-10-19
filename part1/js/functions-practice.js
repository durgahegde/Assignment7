var selectedOption;
var sum = 0;
var num;
var input1;
var input2;
var squareIs;
var firstNum;
var secondNum;
var firstNum1;
var secondNum1;
var sumIs;
var input;
var numStore;
var i;


//STEP 1
function halfNumber(number){
    "use strict"
    return number/2;
}

//STEP 2
function squareNumber(number){
    "use strict"
    return number * number;
}

//STEP 3
var percentOf = function (number1, number2){
    "use strict"
    return (number1/number2) * 100 ;
}

//STEP 4
var findModulus = function (number1, number2){
    "use strict"
    return number2 % number1 ;
}

//STEP 5
function sumofNumbers(inputNumbers){
    "use strict"
    for(i=0 ; i < inputNumbers.length ; i++){
        num = Number(inputNumbers[i]);
        window.console.log(num);
        sum += num; 
        
    }
    window.console.log(sum);
    return sum;
}

selectedOption = window.prompt("Select the number from below for operation you want to perform\n1. Half of a number\n2. Sqaure of a number\n3. Percent of number\n4. Modulus of the first and second number\n5. sum of many numbers");

switch (selectedOption){
    case "1":
        input1 = window.prompt("Please enter number");
        halfNumberResult = halfNumber(input1);
        document.write("Half of "+ input1 + " is "+ halfNumberResult + "<br>")
        break;

    case "2":
        input2 = window.prompt("Enter a number to find its Square");
        squareIs = squareNumber(input2);
        document.write("The result of squaring the number " +input2 +" is " +squareIs+ " .<br>");
        break;2
     
    case "3":   
        firstNum = window.prompt("Enter first number");
        secondNum = window.prompt("Enter second number");
        document.write(firstNum + " is " + percentOf(firstNum, secondNum) + "% of " + secondNum + "<br>");
        break;
     
    case "4":
        firstNum1 = window.prompt("Enter first number");
        secondNum1 = window.prompt("Enter second number");
        document.write(findModulus(firstNum1, secondNum1) + " is the modulus of " + firstNum1 + " and " + secondNum1 + "<br>");
        break;
        
    
    case "5":
        input = window.prompt("Enter a set of numbers separated by ,");
        numStore = input.split(",");
        window.console.log(numStore);
        sumIs = sumofNumbers(numStore);
        document.write("The sum of all numbers is: " + sumIs + "<br>");
        break;  
        
    default:
        break;    


}