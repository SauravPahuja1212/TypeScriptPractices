export {};
/**
 * There are some more advanced types available in typescript which are very userfu while working with
 * objects which are as follows ->
 * <ul>
 *  <li>Intersection Types: To combine two or more types in typescript </li>
 *  <li>Type Guards: To save the runtime errors due to any type</li>
 *  <li>Discriminated Unions: To identify any type from a union type</li>
 *  <li>TypeCasting: Most useful while working with DOM manipulation</li>
 *  <li>Index Properties: To create objects not specifying key name</li>
 *  <li>Function Overloads: Function overloading how it works in typescript</li>
 *  <li>Optional Chaining: How to create any property optional in typescript</li>
 *  <li>Nullish Coalescing: To set a default value if value is null or undefined</li>
 * </ul>
 */


//Intersection types, To combine two or more types as->
type Username = {
    firstname: string;
    lastname: string;
}
type PersonDetails = {
    gender: string;
    age: number;
}
type Person = Username & PersonDetails;
const firstObject: Person = {
    firstname: "Saurav",
    lastname: "Pahuja",
    age: 24,
    gender: "Male"
}//This way we combined two or more types, Same way we can combine interface but by extending other
//interfaces to one.
//But this was only case for objects and this not same in case of union types as->
type StringNumber = string | number;
type BooleanNumber = boolean | number;
type IntersectedType = StringNumber & BooleanNumber;
//const testingVariable: IntersectedType = true; //This will give error
//const testingVariable_1: IntersectedType = "True"; //This will give error
const testingVariable_2: IntersectedType = 1;
//Because in typescript if we intersect two union types then intersected value will be the common on 
//in them. If nothing is common in them then never will be the type.



//Type Guards, This is used to save runtime error and there are multiple ways to do this
//as like, typeof and IN and instanceof and literal type, Explained in series below as ->
type combined = number | string;//There can be case where one argument is string and another number
//To save this we have used typeof to specify coming type and perform operation
//<!------------------------typeof OPERATOR---------------------------!>
function add(a: combined, b: combined) {
    if(typeof a === 'string' && typeof b === 'string') {
        return (a.toString() +" "+b.toString());
    } else if(typeof a === 'number' && typeof b === 'number')
        return a+b;
}
console.log(add("Hello", 12)); //Undefined as no such operation exist in add function
console.log(add(12, "Hello")); //Undefined as no such operation exist in add function
console.log(add(12, 12));//24
console.log(add("Saurav","Pahuja"));//Saurav Pahuja
//<!------------------------in OPERATOR---------------------------!>
//Another way is using IN operator as ->
type admin = {
    role: string;
    privileges: string[];
}
type user = {
    role: string;
    name: string;
}
type employee = admin | user;
function inTypeGuard(emp: employee) {
    if('name' in emp)
        console.log(emp.name);
    if('privileges' in emp)
        console.log(emp.privileges);
}//This way we are checking that if specific property exist in our object or not, So it can
//save us from any runtime error while doing any execution
inTypeGuard({role: "User", privileges: ["Admin"], name: "Saurav"});
//<!------------------------instanceof OPERATOR---------------------------!>
//If we are working with classes, Then we have another typeguard for that which is instanceof
//This is very useful while dealing with class type input parameters as->
class Car {}
class Truck {}
type Vehicle = Car | Truck;
function getVehicle(vehicle: Vehicle) {
    if(vehicle instanceof Car)
        console.log("Car");
    if(vehicle instanceof Truck)
        console.log("Truck");
}
const vehicle1 = new Car();
const vehicle2 = new Truck();
getVehicle(vehicle1);//Will output as a Car
getVehicle(vehicle2);//Will output as a Truck



//Discriminated Union, This can be used to differentiate in union types by using literals
//Suppose we have a common property in many objects but there values are different and we want to
//perform operations based on that value of property, So here instead of using in operator we can
//go for switch approach as ->
interface Bird {
    type: "Bird";//This way we can use literal to discriminate union type
    fly: boolean;
}
interface Dog {
    type: "Dog";//This way we can use literal to discriminate union type
    run: boolean;
}
type Animal = Bird | Dog; //Now there is a literal value to discriminate union type
function getAnimalType(a: Animal) {
    switch(a.type) {
        case "Bird":
            console.log("Can Fly - "+a.fly);
            break;

        case "Dog":
            console.log("Can Run - "+a.run);
            break;
    }
}//Now values are discriminated without using in keyword
getAnimalType({type: "Bird", fly: true});



//Typecasting, This is an powerful feature of any oops language to type cast any value to its parent
//type or child type, This is useful while working with DOM basically, To show whether we are using
//HTMLElement or a specific element like HTMLFormElement
const para = document.querySelector("p");
//Now using above approach we can easily know that it is a HTMLParagraphElement because we have used
//querySelector and passed p specifically indicating that it is paragraph type, But it will not work
//while working with id as->
const para_1 = document.getElementById("paraid");//Now it is a HTMLElement type
//To specify that it is an HTMLParagraphType we have to do typecasting as->
const para_2 = <HTMLParagraphElement>document.getElementById("paraid");//This way
                                    //OR
const para_3 = document.getElementById("paraid") as HTMLParagraphElement;//This way
para_3.innerHTML = "Hello There";



//Index Properties, These are useful if we don't want to specify name of property in our object,
//so we can define an index instead of name and can access that property using that property.
type container = {
    [key: string]: string;
    //num: number;// This will give error because now only string properties are only allowed there
}//This way we have created type, Now we can assign any name to key but should be string as we defined.
const errorContainer: container = {
    errorName: "NullPointer",
    errortype: "Exception"
}//As many properties we can assign in that object now, As we have used index properties, But
//only string type keys



//Function Overloads, In typescript we can overload any function by using this function overloads,
//This is useful if we want our function to work with different type of parameters as ->
type duo = string | number | boolean;
function getCount(a:number, b?:number): number
function getCount(a: duo, b?: duo) {
    if(typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    } else if(typeof a === 'number' && typeof b === 'number')
        return a + b;
}



//Optional Chaining, This is used to define that field we are going to use is optional or not as ->
type apiResultFormat = {
    courseType: string;
    details?: {
        coordinator: string;
        location: string;
    }
}
const apiResult: apiResultFormat = {
    courseType: "Unscheduled"
}
//Now This will not work, as may be details are missing while working retrieving data
//console.log(apiResult.details.coordinator);
console.log(apiResult?.details?.coordinator);//This is optional chaining
//If details will be null or undefined then coordinator will not give error, just return undefined



//Nullish Coalescing, This is a way to set a default value to any variable if that is null as ->
const input = '';
const output = input ?? "Default";
console.log(output);//Will give '', Because it works only with null or undefined
const anotherInput = null;
const anotherOutput = anotherInput ?? "Default";
console.log(anotherOutput);//Will give Default as output because anotherInput is null
