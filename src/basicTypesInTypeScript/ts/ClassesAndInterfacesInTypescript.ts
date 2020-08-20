/**
 * Typescript supports oops features like classes, interfaces, inheritence. We can create classes instead
 * of creating object each time we need same properties in a object. Re-use that class as a type and use
 * getter and setter in that class. Interfaces are also available to be used as a custom type or we can
 * implement interface in classes to create a strict type. Inheritence is also there for both classes
 * and interfaces.
 */


//Below is a simple class in typescript with some properties, Class is a blueprint of an object
class SimpleClass {
    name: string = "Saurav Pahuja";
    profession: string = "Software Developer";
    hobbies: string[] = ["Music", "Poetry", "Gaming", "Coding", "Gym"];
}
const simpleClass = new SimpleClass(); //This is the way to initalize class object
console.log(simpleClass.hobbies); //This way to get properties of class



//Class has a default constructor which is no argument constructor, But we can also define explicitly
class CreateConstructor {
    name: string;
    greeting: string;

    //This is argument constructor to create object
    constructor(name: string, greeting: string) {
        this.name = name;
        this.greeting = greeting;
    }
}
//Now values must be passed in order to create object of class
const constructorObject = new CreateConstructor("Saurav","Hey ");
console.log(constructorObject);



//We can create functions in class as well
class ClassWithFunctions {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    //This is a function in a class
    getName() {
        return this.name;
    }
}
const functionClass = new ClassWithFunctions("Chris");
console.log(functionClass.getName());



//this keyword can be helpful if we want our function more type check compatible as this keyword
//directly refers the class object and we can fetch any property using this keyword in the class
//But when we create a copy of this object then this keword will not work as this refers class object
//and copy doesn't have that property, See example ->
class ThisKeywordExplained {
    bankName: string;
    accountNumber: number;

    constructor(bankName: string, accountNumber: number) {
        this.bankName = bankName;
        this.accountNumber = accountNumber;
    }

    getAccountDetails() {
        return 'Bank name is - '+this.bankName+" and account number is - "+this.accountNumber;
    }
}
const thisKeyword = new ThisKeywordExplained("SBI", 34123);
//Now we'll create another object using above created object reference
const anotherThisKeyword = {getAccountDetails: thisKeyword.getAccountDetails};
console.log(anotherThisKeyword.getAccountDetails());
//Above will print undefined because anotherThisKeyword object doesn't have properties.
//Now we can force this kind of copy objects to initialize properties, If we pass this in method as ->
class FunctionWithThisInput {
    bankName: string;
    accountNumber: number;

    constructor(bankName: string, accountNumber: number) {
        this.bankName = bankName;
        this.accountNumber = accountNumber;
    }

    getAccountDetails(this: FunctionWithThisInput) {
        return 'Bank name is - '+this.bankName+" and account number is - "+this.accountNumber;
    }
}
const firstObject = new FunctionWithThisInput("PNB", 55890);
const secondObject = {bankName: "Canara", accountNumber: 76843,getAccountDetails: firstObject.getAccountDetails};
//Below statement will give error if we didn't define properties above
console.log(secondObject.getAccountDetails());



//Private and public access, We can define properties and method as private or public as->
class Modifies {
    private aadharId: number;
    public gender: string;

    constructor(aadharId: number, gender: string) {
        this.aadharId = aadharId;
        this.gender = gender;
    }
}
const modifierObject = new Modifies(110099, "Male");
//console.log(modifierObject.aadharId); //You can't access this as it is private
console.log(modifierObject.gender); //You can access this as it is public



//Shortcut to define properties in class and in constructor
class ShorthandProperties {
    constructor(public isValid: boolean, private distance: number) {}

    getData(this: ShorthandProperties) {
        return `Data available is - ${this.isValid} and ${this.distance}`;
    }
} //Now constructor will automatically create properties
const shortcutProperties = new ShorthandProperties(true, 345);
console.log(shortcutProperties.isValid); //This will print true



//readonly property is that which can be set once and can't be changed there after
class ReadonlyProperties {
    constructor(public readonly name: string) {}

    getProperty() {
        return this.name;
    }
}
const readonlyProperty = new ReadonlyProperties("Chris");
//console.log(readonlyProperty.name = '');//You can't perform this action as this is readonly



//Inheritence in typescript is done using extends keyword to inherit a class, Only one class can be
//inherited by any class, Multiple inheritence not supported in classes
class Parent {
    familyName: string = "Pahuja";
}
class Child extends Parent {
}
const child = new Child();
console.log(child.familyName); //We didn't declare anything in child, This is inheritence



//Static methods & properties, To be used with class name reference instead of object
class StaticMethodProperties {
    static serialNumber: number = 123456789;

    static getData() {
        return this.serialNumber;
    }
}
console.log(StaticMethodProperties.serialNumber);//Can get directly without object creation
console.log(StaticMethodProperties.getData());//Can get Data without object creation



//Abstract class, Which can't be instantiated, But needs to be extend by any class
abstract class AbstractClass {
    abstract printSomething(): string;
}
class ExtendAbstractClass extends AbstractClass {
    printSomething() {
        return "Something";
    }
}
const abstractObject = new ExtendAbstractClass();
console.log(abstractObject.printSomething());



//Protected modifier is useful with inheritence, it is private for other class but available for
//sub classes extending parent class, As->
class IamParent {
    protected name: string = "Child Will Get Me Only";
}
const parentobject = new IamParent();
//parentobject.name;//Will give error as it is not accessible outside class
class IamChild extends IamParent {
    printData() {
        return this.name;//Can get here as it is child class
    }
}
const childObject = new IamChild();
console.log(childObject.printData());//Will print value



//Now if class properties are private, How to get that property and set that property value
//Using getter and setter as ->
class GetandSet {
    private departmentName: string;
    private employees: string[];

    constructor(departmentName: string, employees: string[]) {
        this.departmentName = departmentName;
        this.employees = employees;
    }

    get getDepartmentName() {
        return this.departmentName;
    }

    set setEmployees(employees: string[]) {
        this.employees = employees;
    }

    get getEmployees() {
        return this.employees;
    }
}
const getterANDsetter = new GetandSet("IT", ["DevOps"]);
console.log(getterANDsetter.getDepartmentName);//This is getter of class
getterANDsetter.setEmployees = ["DBA", "DevOps"]
console.log(getterANDsetter.getEmployees);//This is setter of class



//Singleton class and private constructors, Singleton class can be achieved using private
//constructor, Which has only one instance
class SingletonClass {
    private static INSTANCE: SingletonClass;

    private constructor() {}

    static getInstance() {
        if(SingletonClass.INSTANCE) {
            return this.INSTANCE;
        } else {
            this.INSTANCE = new SingletonClass();
            return this.INSTANCE;
        }
    }
}
const singletonObject = SingletonClass.getInstance();
const anotherSingletonObject = SingletonClass.getInstance();
console.log(singletonObject === anotherSingletonObject);



//Interfaces in typescript are also available same as type, We can use interface as a type
interface Vehicle {
    vehicleType: string;
    tyres: number;
    brand: string;

    getVehicleDetails(): string;
}
//Same as abstract class, But no implementation either, Use it as ->
const Car: Vehicle = {
    vehicleType: "Car",
    tyres: 4,
    brand: "BMW",

    getVehicleDetails: () => {
        return `Vehicle is ${Car.vehicleType} and of ${Car.brand} with ${Car.tyres} tyres.`;
    }
}
console.log(Car.getVehicleDetails());



//Readonly interface properties, Which can be defined once and can't be changed there after
interface Game {
    readonly gameType: "Indoor" | "Outdoor";
}
const pubg: Game = {
    gameType: "Indoor"
}
console.log(pubg.gameType);//Will print Indoor
//console.log(pubg.gameType = "Outdoor"); //Will give compile time error



//Extending interface, We can extend multiple interfaces.
interface NameInterface {
    name: string;
}
interface TypeInterface {
    whichType: string;
}
interface ExtendBothAbove extends NameInterface, TypeInterface {}
let aNewType: ExtendBothAbove = {
    name: "ExtendBothAbove",
    whichType: "MultipleInheritence"
};
console.log(aNewType.name, aNewType.whichType);



//Interface as a function type as ->
interface FunctionType {
    (): string;
}
function getFunctionType(): FunctionType {
    return () => {
        return "Hello from function in function";
    };
}
const output = getFunctionType();
console.log(output());//This way we can call function inside function



//Optional parameters & properties are available in typescript. We can define optional parameters
//in function as input parameters, But must be last in the list of parameters
function optionalParameter(a:number, b?:number) {
    console.log(a);
}
optionalParameter(12);//This way we can set another property optional in parameter



//Interfaces with classes, Class can implement interface as many as we want, Now class has to 
//implement all properties which interface has, methods availabe in interface as->
interface WillBeImplemented {
    implementMe(): string;
}
interface WillAlsoBeImplemented {
    implementMe(): string;
}
class ImplementedInterface implements WillBeImplemented, WillAlsoBeImplemented {
    implementMe() {
        return "Returning string";
    }
}