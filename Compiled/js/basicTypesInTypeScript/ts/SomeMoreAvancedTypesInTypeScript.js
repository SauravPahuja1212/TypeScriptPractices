var _a;
const firstObject = {
    firstname: "Saurav",
    lastname: "Pahuja",
    age: 24,
    gender: "Male"
}; //This way we combined two or more types, Same way we can combine interface but by extending other
//const testingVariable: IntersectedType = true; //This will give error
//const testingVariable_1: IntersectedType = "True"; //This will give error
const testingVariable_2 = 1;
//To save this we have used typeof to specify coming type and perform operation
//<!------------------------typeof OPERATOR---------------------------!>
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return (a.toString() + " " + b.toString());
    }
    else if (typeof a === 'number' && typeof b === 'number')
        return a + b;
}
console.log(add("Hello", 12)); //Undefined as no such operation exist in add function
console.log(add(12, "Hello")); //Undefined as no such operation exist in add function
console.log(add(12, 12)); //24
console.log(add("Saurav", "Pahuja")); //Saurav Pahuja
function inTypeGuard(emp) {
    if ('name' in emp)
        console.log(emp.name);
    if ('privileges' in emp)
        console.log(emp.privileges);
} //This way we are checking that if specific property exist in our object or not, So it can
//save us from any runtime error while doing any execution
inTypeGuard({ role: "User", privileges: ["Admin"], name: "Saurav" });
//<!------------------------instanceof OPERATOR---------------------------!>
//If we are working with classes, Then we have another typeguard for that which is instanceof
//This is very useful while dealing with class type input parameters as->
class Car {
}
class Truck {
}
function getVehicle(vehicle) {
    if (vehicle instanceof Car)
        console.log("Car");
    if (vehicle instanceof Truck)
        console.log("Truck");
}
const vehicle1 = new Car();
const vehicle2 = new Truck();
getVehicle(vehicle1); //Will output as a Car
getVehicle(vehicle2); //Will output as a Truck
function getAnimalType(a) {
    switch (a.type) {
        case "Bird":
            console.log("Can Fly - " + a.fly);
            break;
        case "Dog":
            console.log("Can Run - " + a.run);
            break;
    }
} //Now values are discriminated without using in keyword
getAnimalType({ type: "Bird", fly: true });
//Typecasting, This is an powerful feature of any oops language to type cast any value to its parent
//type or child type, This is useful while working with DOM basically, To show whether we are using
//HTMLElement or a specific element like HTMLFormElement
const para = document.querySelector("p");
//Now using above approach we can easily know that it is a HTMLParagraphElement because we have used
//querySelector and passed p specifically indicating that it is paragraph type, But it will not work
//while working with id as->
const para_1 = document.getElementById("paraid"); //Now it is a HTMLElement type
//To specify that it is an HTMLParagraphType we have to do typecasting as->
const para_2 = document.getElementById("paraid"); //This way
//OR
const para_3 = document.getElementById("paraid"); //This way
para_3.innerHTML = "Hello There";
const errorContainer = {
    errorName: "NullPointer",
    errortype: "Exception"
}; //As many properties we can assign in that object now, As we have used index properties, But
function getCount(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else if (typeof a === 'number' && typeof b === 'number')
        return a + b;
}
const apiResult = {
    courseType: "Unscheduled"
};
//Now This will not work, as may be details are missing while working retrieving data
//console.log(apiResult.details.coordinator);
console.log((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.details) === null || _a === void 0 ? void 0 : _a.coordinator); //This is optional chaining
//If details will be null or undefined then coordinator will not give error, just return undefined
//Nullish Coalescing, This is a way to set a default value to any variable if that is null as ->
const input = '';
const output = input !== null && input !== void 0 ? input : "Default";
console.log(output); //Will give '', Because it works only with null or undefined
const anotherInput = null;
const anotherOutput = anotherInput !== null && anotherInput !== void 0 ? anotherInput : "Default";
console.log(anotherOutput); //Will give Default as output because anotherInput is null
