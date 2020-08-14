"use strict";
/**
 * Basic types available in typescript same as available in javascript are :-
 * <ul>
 *  <li>number [For all numeric values i.e integers, float]</li>
 *  <li>string [For all text values i.e 'Hello', "Hello", `Hello`]</li>
 *  <li>number [For all conditional values i.e true | false]</li>
 * </ul>
 */
/**
 * We should not practice by this kind of declaration in variable by specifying types, because
 * generally typescript will itself infer type of our provided data. As below we are providing numeric
 * value so the type of variable will be number itself, No need to specify itself.
 */
//let num1:number = 10;
//let num2:number = 20;
function sendToCalculate() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;
    //Printing the value to UI
    document.getElementById("output").innerHTML = `${calculate(num1, num2, operation)}`;
}
/**
 * @summary This method is responsible to perform specified calculation which is provided by another
 * input parameter operation.
 *
 * @param num1 number : This is first number for calculation.
 * @param num2 number : This is second number for calculation.
 * @param operation string: This will be the string value containing the specific operation
 *                          we want to perform in this calculate method, i.e. addition, division etc.
 */
function calculate(num1, num2, operation) {
    //Converting operation string to upper case
    operation = operation.toUpperCase();
    switch (operation) {
        //Using simple single quotes to declare string value
        case 'ADDITION':
            return num1 + num2;
            break;
        //Using double quotes to declare string value
        case "SUBTRACTION":
            return num1 - num2;
            break;
        //Using backticks to declate string value
        case `MULTIPLICATION`:
            return num1 * num2;
            break;
        //Using single quotes again to declate string value
        case 'DIVISION':
            return num1 / num2;
            break;
        default:
            //Used backticks with variables value to be printed in a string dynamically.
            throw new Error(`Cannot perform calculation of ${num1} and ${num2}`);
            break;
    }
}
