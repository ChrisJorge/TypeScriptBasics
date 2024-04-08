let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true 
let x: any = 'Hello'
x = true
let age: number 

age = 20

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, 'true', 'hello']

// Tuple
let person: [number,string,boolean] = [1,'Chris', true]
// Tuple Array 
let employee: [number, string][]

employee = [
    [1,'Chris'],
    [1,'John'],
    [1,'Jill'],
]

// Union 
let pid: string | number = 'hi' // Can be a string or a number
pid = 55

// Enum 
enum Direction1{
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right  = 'Right'
}
console.log(Direction1.Up)

// Objects 
type User = {
    id:number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid
let customerId2 = cid as number


// Functions 
function addNum(x: number, y: number): number{
    return x + y
}

function log(message: string | number): void{
    console.log(message)
}

// Interfaces 

interface userInterface {
   readonly id: number // Makes property read only 
    name: string
    age?: number // Optional
}

const user1: userInterface = {
    id: 1,
    name: 'Chris'
}

type Point = number | string 
const p1: Point = '2'

// user1.id = 5 //Gives error. Cannot assign id because it is a read only property

interface MathFunc {
    (x: number, y: number): number
}

// const add: MathFunc = (x: number, y: string): number => x + y // Gives error, math interface wants two numbers and Type 'string' is not assignable to type 'number'

const add: MathFunc = (x:number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface personInterface {
     id: number // Makes property read only 
     name: string
     register(): string
 }
 
//Classes 
class Person implements personInterface {
    id: number
    //private id: number // Makes it so you can only access the Id in the class
    //protected name: string
    name: string

    constructor(id: number, name:string){
        this.id = id,
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}


const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')
console.log(brad, mike)

// brad.id = 4 //Gives an error. Property 'id' is private and only accessible within class
// brad.name = 'Joe' //Gives an error. Property 'name' is protected and only accessible within class 'Person' and its subclasses.

brad.register()

// subClass
class Employee extends Person {
    position: string 

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.name)
console.log(emp.register())


// Generics (Used to build reusable components)

function getArray<T>(items: T[]): T[]{ //<t> is Type placeholder
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Chris', 'Brad', 'John', 'Jill'])

// numArray.push('string') //Gives an error: Argument of type 'string' is not assignable to parameter of type 'number'.

