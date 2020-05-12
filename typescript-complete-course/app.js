"use strict";
// //string 
// let myName = 'Wahib';
// //myName = 27;
// // number
// let myAge = 27;
// // myAge = 'Max';
// let  haveInterview = false;
// //haveInterview = 1;
// // assign types explicitly
// // Right now by default its type is any let myRealAge: any;
// let myRealAge: number;
// myRealAge = 27;
// //myRealAge = 'Wahib';
// let myHobbies: any[] = ["Cooking","Reading"];
// console.log(typeof myHobbies);
// //ReAssigned means replace array with [100]
// myHobbies = [100];
// //myHobbies = 100;
// console.log(myHobbies);
// //tuples it is array with mixed type
// let address  = ['MargallaTown', 44];  // right now it has any type like address: any[]  = [];
// //To assign explicity
// let myaddress: [string,number] =  ['MargallaTown', 44];  // I can not assign [44 , 'MargallaTown'] order is important
// // By Default enum values start from 0 , we can assign custom value then the next value will be according the last value we have assigned
// enum Countries {
//     Japan,  // 0
//     China = 100,  // 1
//     Pakistan // 2
// }
// let myCountry: Countries = Countries.Pakistan;
// console.log(myCountry);
// // any
// let car: any = 'BMW';
// console.log(car);
// car = {brand: 'BMW', series: 3};
// console.log(car);
// // function return type is string
// function returnMyName() : string {
//     return myName;
// } 
// console.log(returnMyName());
// //function with arguement
// function multiply(value1: number, value2 :number): number{
//     return value1 * value2;
// }
// console.log(multiply(2,2));
// //function types 
// // we can assign this function explicity for specifically multipy funciton
// // let myType: (va1: number, val2: number) => number;
// let myType;
// myType = returnMyName;
// console.log(myType());
// myType =  multiply;
// console.log(myType(5,5));
// // objects
// // if we can give its type any through curly bracs {} or explicity give type value like
// //below
// let userData: {name: string, age:number} = {
//     name: 'Wahib',
//     age: 27
// }
// //complex object
// let complex: {data: number[], output:(all: boolean)=> number[]} ={
//     data: [10,20,30],
//     output: function(all: boolean): number[] {
//         return this.data;
//     }
// }
//  let fun = function(all: boolean) : number[] {
//      let hihi:number[] = [10,20];
//      return hihi;
//  }
//  // type alias
//  type Complex =  {data: number[], output:(all:boolean)=> number[]}
//  let complex2: Complex  = {
//      data: [10,20,30],
//      output: function(all: boolean): number[] {
//          return this.data;
//      }
//  }
//  //union types
//  let myRealRealAge: any = 27;
//  myRealRealAge = '27';
//  myRealRealAge = true;
//  // if we know the type could be number or string then we can do like this
//  let meriRealAge: number | string = 27;
//  // then assign true value throw error
//  //meriRealAge = true;
//  // check types
//  let final = 50;
//  if(typeof final === 'number') {
//      console.log('Final value is number');
//  }
//  // type never   // There is a difference btw never and void, never type return anything void return nothing
// //  function neverReturns(): never {
// //      throw new Error('An Error');
// //  }
// //  console.log(neverReturns());
//  // Nullable Types
// /* Now its type become null if we have
//  configured in the tsconfig file "strictNullChecks": true
//  and we can not assign anything except null*/
//  let canBeNull = null;  
//  let canAlsoBeNull = 12; 
//  /* As it look is type of any but because of configuration 
//  we can't assign null because its type is number */
//    //  canAlsoBeNull = null;
// //To way out the above problem we need to use union
// let canThisNull: number | null = 12;
// //Now we can assign number of null
// canThisNull = null;
// let helloage: string = '48';
//     // helloage = 49
// // 
// console.log('Arrow Functions');
// const doSomeAdd = function(number1: number, number2: number): number {
//     return number1 + number2;
// }
// console.log(doSomeAdd(10,5));
// const doSomeSubtraction = (number1: number, number2: number) => number1 * number2;
// console.log(doSomeSubtraction(10,5));
// const greet = () => console.log('Welcome Wahib in Arrow Function');
// greet();
// const SingleArgumentGreet = (arg: string) => {
//     console.log('Hello ' +  arg);
// }
// SingleArgumentGreet('Virgo');
// // const greetFriend = friend => { console.log(friend)};
// //Default Parameter
// console.log('Default Parameters');
// const countdown = (start: number = 20): void => {
//     console.log(start);
//     while(start > 0){
//         start--
//     }
//     console.log('Done! ' + start);
// }
// countdown();
// //Spread Operators
// console.log('Spread Operators');
// const numbers: number[] = [2005,20,5,50,75,80];
// console.log(Math.max(1993,75,85,95,));
// // If we want to check the highest number in the array
// // then we need to use spread operators
// console.log(Math.max(...numbers));
// //Rest operator  
// // if we use three ... dots in function argument then it would treat as rest operator
// const makeArray = (name: string,...args: number[]): number[] =>{
//     return args;
// } 
// console.log(makeArray('Max',2,4,8,10));
// //DeStructuring Array
// console.log('Destructuring Array');
// const hoppies: string[] = ['Swimming', 'Reading','Hiking', 'Travelling'];
// // if we want first 2 values then we can do like below
// // const hoppy1 = hoppies[0];
// // const hoppy2 = hoppies[1];
// //OR we can simply log console.log(hoppies[0] + ' ' + hoppies[1]);
// // console.log(hoppy1  + ' '  + hoppy2);
// //But to make it shorter
// const [hoppy1, hoppy2] = hoppies;
// console.log(hoppy1 , hoppy2);
// //Destructure Object
// console.log('Destructure Object');
// const userdata: {userName: string, age: number} = {userName: 'Wahib', age: 27};
// // we can get username and age like this
// // const meraNaam = userdata.userName;
// // const meriAge = userdata.age;
// // console.log(meraNaam, meriAge);
// // OR We can do like this
// const {userName: meriNaam, age: meriAge} = userdata;
// console.log(meriNaam, meriAge);
// //Template Literal
// console.log('Tempate literal');
// const naam = 'Wahib';
// //This is called tempate literal rather then concating the string
// const message = `Hi ${naam}
// How are you doing, where are you these days`;
// console.log(message);
// // Classes in TypeScript
// console.log('Classes In TypeScript');
// class Person {
//     name: string | undefined;
//     private type: string | undefined;
//     protected age: number  = 27;
//     //username defined in constructor or like other variable both are same
//     constructor(name: string, public username: string) {
//         this.name = name;
//     }
//     printAge(){
//         console.log(this.age);
//         this.setType('Old Guy');
//     }
//   private  setType(type: string){
//         this.type = type;
//         console.log(this.type);
//     }
// }
// const person = new Person('Wahib', 'wahib1900');
// console.log(person.name , person.username);
// person.printAge();
// // person.setType('Cool Guy');
// //Inheritance in Type Script
// console.log('Inheritance in Type Script');
// class Wahib extends Person{
//     name = 'Wahib';
//     constructor(username: string){
//         super('Wahib', username);
//         this.age = 32;
//     }
// }
// const wahib  = new Wahib('wahib1900');
// console.log(wahib);
// console.log('Getter And Setting in Inheritance');
// // Getter & Setter
// class Plant {
//   private _species: string = 'Default';  
//   set species(value: string){
//        if(value.length > 3){
//            this._species = value;
//        }
//        else{
//            this._species = 'Default';
//        }
//   }
//   get species(){
//       return this._species;
//   }
// }
// const plant = new Plant();
// console.log(plant.species);
// plant.species = 'con';
// console.log('SET ' + plant.species);
// plant.species = 'Green';
// console.log('SET ' + plant.species);
// // Static Properties and Method In Type-Script
// console.log('Static Properties and Method In Type-Script');
//  class Helpers {
//     static PI: number = 3.14;
//     static calculateCircumference(diameter: number): number{
//         return this.PI * diameter;
//     }
//  }
//  console.log(2 * Helpers.PI);
//  console.log(Helpers.calculateCircumference(4));
//  // Abstract class in Type-Script
//  console.log('Abstract class in Type-Script');
// abstract class Project {
//     projectName: string = 'Default';
//     budget: number = 1000;
//     abstract changeName(name: string): void;
//     calcBudget(): number{
//         return this.budget * 2;
//     }
// }
// class ITProject extends Project {
//     changeName(name: string): void{
//         this.projectName = name;
//     }
// }
// let newProject = new ITProject();
// console.log(newProject);
// newProject.changeName('Super IT Project');
// console.log(newProject);
// //Private Constructor along readOnly property
// class OnlyMe {
//     private static Instance: OnlyMe;
//     private constructor(public readonly name : string){}
//     static getInstance(){
//         if(!OnlyMe.Instance){
//             return this.Instance =  new OnlyMe('Only  me Constructor');
//         }
//         else{
//             return this.Instance;
//         }
//     }
// }
// let newInstance = OnlyMe.getInstance();
// console.log(newInstance);
// console.log(newInstance.name);
//Name Space in type-script
// 3rd way to do that
// /// <reference path='circle.ts' />
// /// <reference path='rectangle.ts'/>
// import circleMath = MeraMath.CicleSpace;
// console.log('Name Space in type-script');
// console.log(circleMath.calculateCircumference(3));
// console.log(MeraMath.calculateRectangle(10,5));
// Interface in Type-script
console.log('Interface');
function greet(person) {
    console.log('Hello ' + person.name);
}
function changeName(person) {
    console.log('Hello ' + person.lastName);
}
var person = {
    lastName: 'WahibNaseem',
    name: 'Wahib',
    age: 27,
    hoppies: ['Cooking', 'Swimming'],
    greet: function (username) {
        console.log('Hi I am ' + this.lastName + ' ' + username);
    }
};
greet(person);
changeName(person);
//In the above case const person object ignore the age but if 
// we directly pass the object then it gives error
// greet({lastName:'Abbas',name: 'Nouman1900', age: 27})
person.greet('Anything');
//We can implements interface to class like below and use it by making objects
// class Person implements NamedPerson {
//     lastName: string;
//     name: string;
//     greet(userName: string): {
//         console.log('Hello' + this.l)
//     }
// }
// Interface as Function Types
console.log('interface as function type');
var mydoublefunc;
mydoublefunc = function (value1, value2) {
    return (value1 * value2) * 2;
};
console.log(mydoublefunc(2, 2));
// Interface Inheritance 
console.log('Interface Inheritance');
var oldPerson = {
    age: 10,
    lastName: 'Naseem',
    name: 'Wahib',
    greet: function (username) {
        console.log('Hello');
    }
};
console.log(oldPerson);
