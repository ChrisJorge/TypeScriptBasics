"use strict";
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
x = true;
let age;
age = 20;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'true', 'hello'];
// Tuple
let person = [1, 'Chris', true];
// Tuple Array 
let employee;
employee = [
    [1, 'Chris'],
    [1, 'John'],
    [1, 'Jill'],
];
// Union 
let pid = 'hi'; // Can be a string or a number
pid = 55;
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
// Functions 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Chris'
};
const p1 = '2';
// const add: MathFunc = (x: number, y: string): number => x + y // Gives error, math interface wants two numbers and Type 'string' is not assignable to type 'number'
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes 
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');
console.log(brad, mike);
// brad.id = 4 //Gives an error. Property 'id' is private and only accessible within class
// brad.name = 'Joe' //Gives an error. Property 'name' is protected and only accessible within class 'Person' and its subclasses.
brad.register();
// subClass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.name);
console.log(emp.register());
// Generics (Used to build reusable components)
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Chris', 'Brad', 'John', 'Jill']);
// numArray.push('string') //Gives an error: Argument of type 'string' is not assignable to parameter of type 'number'.
