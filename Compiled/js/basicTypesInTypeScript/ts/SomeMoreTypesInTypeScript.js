"use strict";
/**
 * Along with some basic types there are some more types available in typescript i.e.
 * <ul>
 *  <li>Object Types: We can assign object type as strict type or flexible type</li>
 *  <li>Nested Object Types: Nested object, Object inside an object</li>
 *  <li>Arrays: Arrays are also available in typescript</li>
 *  <li>Tuples: Kind of an array but with specific values or limited elements</li>
 *  <li>Enums: Enums as other programming languages have, Not available in javascript</li>
 *  <li>Any: Any is a type which doesn't perform type checking</li>
 *  <li>Union: Union types are to assign a single variable two multiple types</li>
 *  <li>Literal Types: Literals are to assign something ourself to a variable</li>
 *  <li>Custom Types: We can also create our custom types using type operator</li>
 *  <li>Function return type: What a function can return and how to declare</li>
 *  <li>Function as a type: We can also declare a function as a type</li>
 *  <li>Function callbacks: How to declare callback function</li>
 *  <li>Unknown Type: This type is same as any type but with type checking</li>
 *  <li>Never type: This can be assign to function to declare that will never return anything</li>
 *  <li></li>
 * <ul>
 */
/**One thing that typescript has type inference, Which means if we will not declare type it will
 *automatically identify type of variable, So no need to declare explicitly.
 */
let guessMyType = "String Type Inferred";
console.log(typeof guessMyType); //This will print string as it automatically inferred
//Object Type which is flexible, Any number of key-value pairs can be added
const person = {
    name: "Saurav Pahuja",
    age: 24
};
//Object Type which is strict, Only defined key-value pairs can be declared.
const user = {
    name: "",
    password: "",
    accessToken: 9457834
    //isLoggedIn: false ---> This will give error as it is not defined in type of object above.
};
//Nested Object Type which is flexible
const address = {
    city: "Kurukshetra",
    locality: "Urban",
    pinCode: 136129,
    details: {
        addressType: "Home",
        isCorrect: true
    }
};
//Nested Object Type which is strict as per defined key-value pairs
const book = {
    name: "Meluha",
    id: 3427,
    publisherDetails: {
        name: "Westland Press",
        address: {
            city: "Mumbai",
            pinCode: 223344
        }
    },
    author: ["Amish Tripathi"]
};
//Arrays Types, Common in both typescript and javascript, but in typescript you can define type
let countries = ["India", "Australia", "Canada"]; //Automatically inferred string[] type
//We can define ourself also to create a strict type array
let states; //Now only string values are allowed
states = ["Haryana", "Punjab"];
//We can create a flexible type also using any operator
let cityAndCode;
cityAndCode = ["Ismailabad", 136129, false]; //Now any type can be assigned
//Tuples, these are kind of array but with multiple type of elements without use of any
let theaters = [123, "Gurugram", 456, "Kaithal"];
let [a, b] = theaters;
console.log(a); //This will print first element 123
console.log(b); //This will print second element Gurugram
//Enum, These are useful while dealing with constants, Thanks to typescript for this
var roles;
(function (roles) {
    roles["ADMIN"] = "ADMIN";
    roles[roles["ATTENDANT"] = 1] = "ATTENDANT";
    roles[roles["HELPER"] = 2] = "HELPER";
    roles["ASSIGNEE"] = "DEFAULT";
})(roles || (roles = {}));
console.log(roles.HELPER);
//Any, The evil type, Should be ingnored wherever possible
let youCannotGuessMyType;
youCannotGuessMyType = "I AM STRING TYPE";
youCannotGuessMyType = roles.HELPER;
youCannotGuessMyType = false;
//as you have seen now any type can be assigned which is voilation of typescript type checking
//Union type is useful wherever we want our variable to contain multiple type
let stringOrNumber;
stringOrNumber = "Now String";
stringOrNumber = 1995;
//We can use this in function too as -
function unionTypeFunction(user) {
    console.log(user);
}
unionTypeFunction("Saurav Pahuja");
unionTypeFunction(95266);
//Literal types are one to define our own values specified values to a variable only
let result;
result = "SUCCESS";
result = "FAIL";
let getAnswer;
getAnswer = "Can Take String";
getAnswer = 123;
//Same like union type but we have combined union type with custom type to make it easy
//As declared, Now we don't need to define union each time, Instead we can create custom type
function printAnswer(data) {
    console.log(data);
}
//Function return type can be assigned explicitly and typescript can also inferred automatically
function isAPIWorking() {
    return true;
} //Typescript will infer that return type is boolean
function noReturnType() {
} //Typescript will infer that return type is void, But in this case we should define explicitly
function voidReturnType(name) {
    console.log("Printed void");
}
//Function as a type, We can declare variable of function type as
let functionTypeVariable = isAPIWorking;
console.log(functionTypeVariable()); //Will call this function
//But here we can declare like this too
let anotherFunctionType;
anotherFunctionType = isAPIWorking;
console.log(anotherFunctionType()); //Will call this function
//Now there is a problem with above type declaration that it can accept any function
//To be more specific about this, we can do like this
let moreSpecificFunctionType;
//The above declaration states that only that method can be assigned to this variable which
//can take no parameter as input and will return boolean type.
moreSpecificFunctionType = isAPIWorking;
//moreSpecificFunctionType = noReturnType; --> This will give error now
//Function callbacks can be defined to a function as-
function callBackType(cb) {
    cb(name);
}
callBackType(voidReturnType); //This way we can call our create callback function as a type
//Unknown type is same as any type but is more type checked as compared to any
let vAny;
let vUnknown;
vAny = "String";
vAny = 10;
vUnknown = "String";
vUnknown = 10; //Anything is assignable as any but it is not assignable to any other variable
//let s1: string = vUnknown; --> this will give error as it is unknown
let s2 = vAny; //This will work as it is of any type
//Never type is assigned to function return type same as void but it means it will never return
function neverReturn(msg) {
    while (true) {
        console.log("Never Stop and never return value.");
    }
    //Like here loop will never stop and never return value
}
