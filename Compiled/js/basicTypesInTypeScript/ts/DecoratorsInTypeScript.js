"use strict";
/**
 * Decorators concept in typescript is used to create a special functions that can be used on a class or
 * inside a class using @ symbol in front of them and functionality can be used. Same like in angular we
 * have @Component and @Injectable , Same these like we can create our own decorators.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Class Decorator, This can be used on a class to provide some functionality to that class only one time
//This will take one argument by default which is constructor as input.
function Logging(constructor) {
    console.log("Logging");
}
let Person = class Person {
};
Person = __decorate([
    Logging //This will be executed only once when this class will be loaded, Not everytime like any listener
], Person);
//Decorator factories, We can create a function as a decorator factory which will return decorator 
//function, By using this we can pass arguments to our decorator function as->
function LoggerFactory(inputStr) {
    return function (constructor) {
        console.log(inputStr);
    };
}
let Vehicle = class Vehicle {
};
Vehicle = __decorate([
    LoggerFactory("Loggin This Class")
], Vehicle);
//Another example for decorator function
function WithTemplate(template, documentId) {
    return function (_) {
        if (documentId) {
            const ele = document.getElementById(documentId);
            ele.innerHTML = template;
        }
    };
}
let Template = class Template {
};
Template = __decorate([
    WithTemplate("<h1>Hello There...</h1>", "app")
], Template);
//Property decorator, This can be used on any property, This will take two arguments as input, One is
//for target and another is for name of property as ->
function PropertyDecorator(target, propertyName) {
    console.log(target, propertyName);
}
class PropertyDecoratorClass {
    constructor() {
        this.pincode = 136129;
    }
}
__decorate([
    PropertyDecorator
], PropertyDecoratorClass.prototype, "pincode", void 0);
//Accessor decorator, This can be used on any set or get property, This will take three arguments as 
//input, One is target, second is name of property, third is for PropertyDesciptor as ->
function AccessDecorator(target, name, descriptor) {
    console.log(target, name, descriptor);
}
class AccessDecoratorClass {
    constructor() {
        this.greeting = "Hello";
    }
    set setGreeting(greeting) {
        this.greeting = greeting;
    }
}
__decorate([
    AccessDecorator
], AccessDecoratorClass.prototype, "setGreeting", null);
//Method decorator, This can be used on any method, This will take same three parameters as input as ->
function MethodDecorator(target, name, descriptor) {
    console.log(target, name, descriptor);
}
class MethodDecoratorClass {
    getProperty() {
        return "Hello World......";
    }
}
__decorate([
    MethodDecorator
], MethodDecoratorClass.prototype, "getProperty", null);
//Method Property decorator, This can be applied on any property, This will take three parameters but 
//this time these are different, Two are same as, target & name but third is position of property 
//which is number as ->
function MethodPropertyDecorator(target, name, position) {
    console.log(target, name, position);
}
class MethodPropertyDecoratorClass {
    printMessage(msg) {
        console.log(msg);
    }
}
__decorate([
    __param(0, MethodPropertyDecorator)
], MethodPropertyDecoratorClass.prototype, "printMessage", null);
//Decorators returning class, We can return a new constructor function from a decorator function, This
//can be useful if we want our logic to be run only at the time when our class will be initialized, Not
//when our class will be loaded as we did earlier in class decorators, We can do it as ->
function ConstructorReturningDecorator(inputStr) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super();
                console.log("Initialized with -> " + inputStr);
            }
        };
    };
}
let ConstructorReturningDecoratorClass = class ConstructorReturningDecoratorClass {
};
ConstructorReturningDecoratorClass = __decorate([
    ConstructorReturningDecorator("after Initialization")
], ConstructorReturningDecoratorClass);
const initial = new ConstructorReturningDecoratorClass(); //Now our decorator will be executed
const initial_1 = new ConstructorReturningDecoratorClass(); //Now again our decorator will be executed
//AutoBind decorator: This decorator is used to bind any method to its class whenever we are using this
//method in event listener so that (this) keyword can work in that method. Because whenever we are using
//eventListener then it binds all properties to itself which result in undefined, To solve this, we can
//create an autobind as ->
function Autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class AutobindClass {
    constructor() {
        this.input = "This is input...";
    }
    getInput() {
        console.log(this.input);
    }
}
__decorate([
    Autobind
], AutobindClass.prototype, "getInput", null);
const btn = document.getElementById("btn");
const btnObject = new AutobindClass();
//This below is one way to use without decorator, Using bind and passing actual class object
btn.addEventListener("click", btnObject.getInput);
//This way is using Autobind decorator we have created.
//btn.addEventListener("click", btnObject.getInput);
