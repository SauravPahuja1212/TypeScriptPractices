/**
 * Generics are available in typescript, This is a useful concept whenever working with any unknown object
 * type, Want to take input of an object but with more flexibility. As far as flexibility, we have
 * constraints available to restrict the flexibility of generics. We can use pre defined generics types
 * or we can create our own->
 * <ul>
 *  <li>Generic Functions</li>
 *  <li>Generic Classes</li>
 * </ul>
 */
//An example of generics types available in typescript
const tab = Array(); //Here in angle brackets<> we have delcared type of array which is predefined
//Generic Functions, To create our own generic function we have to use same angled brackets <> as ->
function add(a, b) {
    return Object.assign(a, b);
}
const calledAddFunction = add({ name: "Saurav" }, { age: 24 });
//Now this is not allowed, As our type is object and it don't know about name
//console.log(calledAddFunction.name);//To use this we have to use generic here as->
function anotherAdd(a, b) {
    return Object.assign(a, b);
}
const calledAnotherFunction = anotherAdd({ name: "Saurav" }, { age: 24 });
console.log(calledAnotherFunction.name); //This is available now
console.log(calledAnotherFunction.age); //This is available too
//Now any type of object can be sent in this function, but if we want to be some restrictive in this
//case, Then we have to use constraints as->
function constraintsFunction(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const calledAnotherFunction_1 = anotherAdd({ name: "Saurav" }, 30); //As you can see instead of objec we have passed number
//But here it is not allowed because we have used extends constraint on generics
//constraintsFunction({name: "Saurav"},30);
//Same as extends constraint, we have another one to restrict generic with keyof, It is used to indicate that this value on which
//we have used keyof is a key of any object as ->
function keyOfConstraint(a, b) {
    return a[b];
}
console.log(keyOfConstraint({ name: "Saurav", lastname: "Pahuja" }, "lastname"));
//Same as generic functions, we can create generic classes as well to use with multiple cases as->
class GenericClass {
    constructor() {
        this.data = []; //Used above declared generic here
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return this.data;
    }
}
const obj1 = new GenericClass();
obj1.addItem(35); //We can add number
obj1.addItem("saurav"); //We can add string as well, Or any other type
console.log(obj1.getItems());
//To be restrictive, we can pass assign as generic to class as ->
const obj2 = new GenericClass();
//obj2.addItem(34);//Not allowed, Only string is allowed
obj2.addItem("Saurav Pahuja");
console.log(obj2.getItems());
//We can use constraints with classes as well as ->
class GenericWithConstraints {
} //Now only with object this class can deal
