export {};
/**
 * In addition to the basic types, There are some advanced types/operators available in typescript
 * which are as follows ->
 * <ul>
 *  <li>Arrow Functions: To declare functions with an arrow sign</li>
 *  <li>Default Function Parameters: These are default parameters we can set to a function</li>
 *  <li>Spread Operator: To spread values of an array or object one by one</li>
 *  <li>Rest parameters: These are used to make a function argument as an array</li>
 *  <li>Array & Object Destructuring: How to destruct an array and object</li>
 * </ul>
 */



//Arrow Functions, An easy way to declare an function without using function attribute
function add(a: number, b:number) { console.log(a+b); }
//We can write above function using arrow function as ->
const sum = (a:number, b:number) => { console.log(a+b); }
//In addition to above if function body has only one statement then we can omit curly braces as ->
const calc = (a:number, b:number) => console.log(a+b);



/**
 * Default function parameters, If we have three arguments in our function and one or more of them are
 * not useful or mandatory to pass everytime by user, Then we can make it default, In case user didn't
 * pass it, One thing to consider that this default property must be the last one in the list of args.
 */
const printName = (name: string, greetings: string = "Hey") => greetings+" "+name;
console.log(printName("Saurav Pahuja")); 
//As you can see above we have passed only one parameter, Other one is default
console.log(printName("Software Developer", "Namaste")); 
//But still if we want we can pass second parameter



/**
 * Spread operator: This operator is useful when we want to pass values of array and object to 
 * create a single variables with that.
*/
const languages = ["Java", 'Kotlin', `Scala`];
//Now we'll assign above array values to another array with one go, No loop required
const languageFramework = ["Java", 'Kotlin', `Scala`, ...languages];
//But this is not restricted to arraya, We can explore objects also with this as ->
const person = {
    name: "Saurav Pahuja",
    age: 24
}
const user = {...person}
user.age = 25;
console.log(person, user);
//we could also do this user = person but this way it just creates a reference in memory instead of
//creating a new object. See shallow copy, Deep copy for this concept.



/**
 * Rest operator is just like spread operator but it can be used with function to make function
 * accept any number of input variables.
 */
const addAnyNumberOfParameters = (...anyParameter: number[]) => {
    return anyParameter.reduce((currResult, currValue) => {
        return currResult+ currValue
    });
}
console.log(addAnyNumberOfParameters(1,2,3,4,5));
//Can be called with any number of parameters



/**
 * Array & Object destructuring, This doesn't mean that arrays & objects will be destroyed with this,
 * Instead of this it is capable to assign values of array and objects to a single variable
 */
const users = ["Saurav","Pahuja","Chris"];
const [user1, user2, user3] = users;
console.log(user1, user2, user3); //This way array values are assigned to variables
//Not restricted to arrays, But we can also destruct with object as ->
const login = {
    username: "sauravpahuja@gmail.com",
    password: "mySuperStrongPassword"
}
const {username, password} = login;
console.log(username, password); //Destruct the values of login object to individual variable