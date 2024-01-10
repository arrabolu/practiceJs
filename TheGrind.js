/* 
-----------Mdu Project Explanation------------

Our client for this project is Tataplay which is the leading DTH service provider ,Our Module Mdu is
Multi Dwelling Unit which provides connection to multiple tv points in a block by using only one MDU 
connection, Our Project stack is Front-end as Angular back-end as Node.js and database is Postgress
we have used Aws Cognito for the login functionality 
Application consists of multiple users with flow approvel required with multiple dashboard corresponding to 
to user 
Application contains of 3 stages of different form submissions consists of 
1.Details of block and its tv connections and its address 
2.Attaching the pictures of the block and society 
3.Adding materials for the block and its quantity and There will be auditing for the materials what user has
added
4.Report generation for the materils
5.Implemented pie charts on the dashboard with ng-apexcharts library
6.User will be able to return the materials when there are extra and add materials if neccessary





*/
/* 
let x = {
    name : "Peter",
    age : 18,
}

console.log(x);

function details(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new details("peter",23);

details.prototype.getName = function(){
    return this.name;
}
Object.prototype.x = 10;
Number.prototype.y = 20;

details.prototype.setName = function(name) {
    return this.name = name;
}

person1.setName("Rohan")

console.log(person1);

console.log(person1.getName());

console.log(x);

console.log(Number.prototype)
 */



// Number.prototype = 4


let x = {
    name : "vinay",
    city : "Siddipet",
    id : 3626
}

let y = {
    name : "Peter",

}

y.__proto__ = x

console.log(y.__proto__)
console.log(y.__proto__.__proto__ == Object.prototype)


// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }


// let details = new person("Gwen",23)

// person.__proto__ = { address : "LA" }

// console.log(details)