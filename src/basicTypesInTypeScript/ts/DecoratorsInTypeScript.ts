/**
 * Decorators concept in typescript is used to create a special functions that can be used on a class or
 * inside a class using @ symbol in front of them and functionality can be used. Same like in angular we
 * have @Component and @Injectable , Same these like we can create our own decorators.
 */


//Class Decorator, This can be used on a class to provide some functionality to that class only one time
//This will take one argument by default which is constructor as input.
function Logging(constructor: Function) {
    console.log("Logging");
}
@Logging//This will be executed only once when this class will be loaded, Not everytime like any listener
class Person {
}



//Decorator factories, We can create a function as a decorator factory which will return decorator 
//function, By using this we can pass arguments to our decorator function as->
function LoggerFactory(inputStr: string) {
    return function(constructor: Function) {
        console.log(inputStr);
    }
}
@LoggerFactory("Loggin This Class")
class Vehicle {}


//Another example for decorator function
function WithTemplate(template: string, documentId: string) {
    return function(_: Function) {//_ shows that we will not use this variable further but declared
        if(documentId) {
            const ele = document.getElementById(documentId)!;
            ele.innerHTML = template;
        }
    }
}
@WithTemplate("<h1>Hello There...</h1>", "app")
class Template{}



//Property decorator, This can be used on any property, This will take two arguments as input, One is
//for target and another is for name of property as ->
function PropertyDecorator(target: any, propertyName: string) {
    console.log(target, propertyName);
}
class PropertyDecoratorClass {
    @PropertyDecorator
    pincode: number = 136129;
}



//Accessor decorator, This can be used on any set or get property, This will take three arguments as 
//input, One is target, second is name of property, third is for PropertyDesciptor as ->
function AccessDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(target, name, descriptor);
}
class AccessDecoratorClass {
    greeting: string = "Hello";

    @AccessDecorator
    set setGreeting(greeting: string) {
        this.greeting = greeting;
    }
}



//Method decorator, This can be used on any method, This will take same three parameters as input as ->
function MethodDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(target, name, descriptor);
}
class MethodDecoratorClass {
    @MethodDecorator
    getProperty() {
        return "Hello World......";
    }
}



//Method Property decorator, This can be applied on any property, This will take three parameters but 
//this time these are different, Two are same as, target & name but third is position of property 
//which is number as ->
function MethodPropertyDecorator(target: any, name: string, position: number) {
    console.log(target, name, position);
}
class MethodPropertyDecoratorClass {
    printMessage(@MethodPropertyDecorator msg: string) {
        console.log(msg);
    }
}



//Decorators returning class, We can return a new constructor function from a decorator function, This
//can be useful if we want our logic to be run only at the time when our class will be initialized, Not
//when our class will be loaded as we did earlier in class decorators, We can do it as ->
function ConstructorReturningDecorator(inputStr: string) {
    return function<T extends {new (...args: any[]):{}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(...args: any[]) {
                super();
                console.log("Initialized with -> "+ inputStr);
            }
        }
    }
}
@ConstructorReturningDecorator("after Initialization")
class ConstructorReturningDecoratorClass {}
const initial = new ConstructorReturningDecoratorClass();//Now our decorator will be executed
const initial_1 = new ConstructorReturningDecoratorClass();//Now again our decorator will be executed



//AutoBind decorator: This decorator is used to bind any method to its class whenever we are using this
//method in event listener so that (this) keyword can work in that method. Because whenever we are using
//eventListener then it binds all properties to itself which result in undefined, To solve this, we can
//create an autobind as ->
function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}
class AutobindClass {
    input: string = "This is input...";

    @Autobind
    getInput() {
        console.log(this.input);
    }
}
const btn = document.getElementById("btn")!;
const btnObject = new AutobindClass();
//This below is one way to use without decorator, Using bind and passing actual class object
btn.addEventListener("click", btnObject.getInput);
//This way is using Autobind decorator we have created.
//btn.addEventListener("click", btnObject.getInput);