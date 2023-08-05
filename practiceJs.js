/* 
// let x = 10
// x = 20
// console.log(x)
// var y =20
// const u = 30
// u = 40 // Type error because we are reinitializing const variable we can reinitialize another variables(var,let) not const

//Async and await will be reviewed again
// function doSomthing(){
//   return "DoingSomthing"
// }
// async function doSomthing1(){
//   return "DoingSomthing"
// }
// console.log(doSomthing1().then((val)=>console.log(val)))

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();

// let a = 10
// var x = 40
// {
// let b = 20
// const c = 30
// var x = 50
// console.log(x)
// }
// // console.log(b)
// console.log(x)

// try{
// console.log(b)
// }catch (Error){
//     console.error("Reference Error")
// }

// let b = 10
// console.log(b)

// let name1 = {
//     firstName : "Ms",
//     LastName : "Dhoni",
//     team : 'CSK'
// }

// let name2 = {
//  firstName : "Cristiano",
//  LastName : "Ronaldo",
//  team : 'Manchester United',
//  x : 20
// }

// printFullName = function(place){
//     console.log(this.firstName +" "+this.LastName +" is from "+place +" and plays for "+this.team)
//  }

// function hello(place , city){
//     console.log("hello world i am "+this.firstName +" "+this.LastName +"i plays for "+place +" located in "+city)
// }

// printFullName.call(name1,'Jharkand')
// printFullName.call(name2,'Portugal')
// hello.call(name2)
// hello.apply(name2,['Mancherter united', 'England'])

// function resolveAfter2Seconds() {
//     console.log("starting slow promise");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("slow");
//         console.log("slow promise is done");
//       }, 2000);
//     });
//   }

// function resolveAfter2Seconds(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("2")
//         }, 2000);
//     })
// }

// function withOutAsyncandAwait(){
//     console.log("executed before the function call")
//     console.log(resolveAfter2Seconds())
//     console.log("executed AFTER the function call")

// }

// withOutAsyncandAwait()

// async function withAsyncandAwait(){
//     console.log("executed before the function call")
//     console.log( await resolveAfter2Seconds())
//     console.log( "executed AFTER the function call")

// }

// withAsyncandAwait()

// function resolveafter2seconds(){
//      return new Promise((resolve)=>{
//       setTimeout(()=>{
//             resolve("Promise resolved")
//       },2000)
//      })
// }

// async function a(){
//       console.log("Before settimeout")
//       console.log(await resolveafter2seconds())
//       console.log("After settimeout")
// }

// a()
// console.log(a)

// async function fetchCall(){

//       return  fetch('https://dummyjson.com/products/1')

// }

// fetchCall().then((res)=>{
//       console.log(res)
// })

// Promise.resolve().then(
//       alert("promise resloved")
// ).then(
//       alert("second promise resolved")
// )

// class HttpError extends Error {
//       constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//       }
//     }

//     function loadJson(url) {
//       return fetch(url)
//         .then(response => {
//           if (response.status == 200) {
//             return response.json();
//           } else {
//             throw new HttpError(response);
//           }
//         });
//     }

//     // Ask for a user name until github returns a valid user
//     function demoGithubUser() {
//       let name = prompt("Enter a name?", "iliakan");

//       return loadJson(`https://api.github.com/users/${name}`)
//         .then(user => {
//           alert(`Full name: ${user.name}.`);
//           return user;
//         })
//         .catch(err => {
//           if (err instanceof HttpError && err.response.status == 404) {
//             alert("No such user, please reenter.");
//             return demoGithubUser();
//           } else {
//             throw err;
//           }
//         });
//     }

//     demoGithubUser();

/* function names(fName,lName,...personNames){  // passing all extra arguments into a array is called rest arguments
console.log(personNames)
}

names("Ronaldo","Christano","Lukaku","Lewendoski","Messi","KarimDemzima")



let arr1 = [1,2,3,4,5]
let arr2 = [123,1435,1514,14214,11,90]
console.log(Math.max(...arr1,...arr2))  //spreading the array into numbers  */

/* function printingNumbers(){
    for(var i=1; i<=5; i++){
        setTimeout(()=>{
            console.log(i)
        },i * 1000)
    }
    
}

printingNumbers() */

// const radius = [3, 5, 7, 8, 1];

// const calculateArea = function (radius) {
//   const areaOutput = [];
//   for (i = 0; i < radius.length; i++) {
//     areaOutput.push(Math.PI * radius[i] * radius[i]);
//   }

//   return areaOutput;
// };

// const calculateCircumference = function (radius) {
//   output = [];

//   for (i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }

//   return output;
// };

// const calculateDiameter = function (radius) {
//   output = [];

//   for (i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }

//   return output;
// };


// console.log(calculateArea(radius), " Circle area");
// console.log(calculateCircumference(radius), " Circle Circumference");
// console.log(calculateDiameter(radius), " Circle Diameter");


// // we goona write same code in higher order functions lets goooooooooooo

// const areaF = Math.PI * radius * radius

// const areaFormule = function(radius){
//     return Math.PI * radius * radius
// } 
// const CircumferenceFormule = function(radius){
//     return 2  * Math.PI * radius 
// } 
// const diameterFormule = function(radius){
//     return 2 * radius
// } 

// const calculate = function (logic){
//     return radius.map(logic)
// }

// console.log(areaFormule)

// console.log(calculate(areaFormule))
// console.log(calculate(CircumferenceFormule))
// console.log(calculate(diameterFormule))

// //Another example for higher order function

// const message = function(){
//   return "Hello world"
// }

//    function printMessage(message){
//         return message()
//    }

//    console.log(printMessage(message))


/* setTimeout(() => {
    console.log("Hello world")
}, 2000);

function x(){
  console.log("x called")
  y()
}

x()

function y(){
  console.log("y called")
} */

/* let Object1 = {
  game : 'Football'
}

let objCopy = Object1 
objCopy.game = 'Cricket' */ // It changes in the Object1 because it is coping the data location of the 

// shallow copy 

// let Object1 = {
//   game : 'Football',
//   leagues : {
//     Indian : 'ISL',
//     Europian : 'PL'
//   }
// }

/* let objCopy = Object.assign({},Object1) // this is called Shallow Copy
objCopy.game = 'Cricket'
objCopy.leagues.Europian = 'Laliga' */

/* let objCopy =  JSON.parse(JSON.stringify(Object1)) // This is called Deep copy
objCopy.game = 'Cricket'
objCopy.leagues.Europian = 'Laliga'


console.log(Object1,"Object1");
console.log(objCopy, "ObjectCopy"); */

/* console.log('starts');

document.getElementById('btn').addEventListener('click',()=>{
    console.log("cb called")
})

console.log('ends');

let startDate = new Date().getTime()
let endDate = startDate

while(endDate < startDate + 10000 ){
  endDate = new Date().getTime()

  console.log(startDate,"Start date");
console.log(endDate, "End Date");
}
console.log(startDate,"Start date End");
console.log(endDate, "End Date End");

console.log('while expires'); */

/* let letsPlayFootball = false


let promise1 = new Promise(function prom(resolve , reject){
    if(letsPlayFootball){
      resolve('Hi Friends we are going to play football for some time')  
    }else{
      reject('I am unable to play football since it is raining in my area')
    }
})

promise1.then(
  (value)=>{
    return value
  },
  (reason)=>{
    return reason
  }
)

console.log(promise1)  */


/* let promise2 = Promise.resolve('hello')

let promise3 = Promise.reject('This promise is reject manually')

promise2.then((value)=>{
  return value
})

promise3.catch(value => value)

console.log(promise2);
console.log(promise3); */

// 2,5,7,11,13,15,19

/*  const array = [1,2,5,7,12,4,6]   

  const output = array.filter((num) => num % num == 0)

  console.log(output); */

  /* 
const users =
[
  {firstName : 'Christiano', lastName: 'Ronaldo',Country : 'Portugal' , age: 38},
  {firstName : 'kyllian' , lastName : 'Mbappie', country : 'France' , age: 25},
  {firstName : 'Lional', lastName : 'Messi', country : 'Argentina' , age: 35},
  {firstName : 'Arrabolu' , lastName : 'saivinay', country : 'India' , age: 25},
]

const names = users.map((user)=>{ return user.firstName +" "+user.lastName })

console.log(names);


function findSum(nums){ // [12,2,3,4,5]
  let sum = 0
  for(i = 0 ; i < nums.length; i++){

     sum = nums[i] + sum

  }

  return sum

}

const numbers = [2,5,6,1,8,10,2,31]

 const sumOfNumners = findSum(numbers)

 console.log(sumOfNumners);

  const sumByReduce = numbers.reduce((acc,cur)=>{
  return   acc = acc + cur
 } ,0)

 console.log(sumByReduce);


const maxOfNumbers = numbers.reduce((max,cur)=>{
    if(cur > max){
      max = cur
    }
  return max

},0)

console.log(maxOfNumbers);

 const above30 = users.filter((user)=>{
  if(user.age > 30){
    return user
  }
}).map(user => user.firstName)

console.log(above30);


const byReduce = users.reduce((acc ,cur)=>{
    if(cur.age > 30){
        acc.push(cur.firstName)
    }
    return acc
},[])

console.log(byReduce);

// {38 : 1,25 : 2, 35 : 1}
 const output = users.reduce((acc,cur)=>{
  if(acc[cur.age]){
    acc[cur.age] = acc[cur.age] + 1
  }else{
    acc[cur.age] = 1
  }

  return acc
},{})

console.log(output);

console.log(users[0]['firstName']); */

// for (let x = 0; x < 5; x++) {
//     let btn = document.createElement('button') // <button> </button>
//     btn.appendChild(document.createTextNode('Button' + i)) // Button 0
//     btn.addEventListener('click',function() {console.log(i);})
//     document.body.appendChild(btn)
// }

/* 
let array = [1,2,3,4,5,6,7,8,9]

// spread operator
  console.log(...array);

let names = ['peter', 'parker', 'John']

console.log(...names); // spread operator

  let name = "vinay"

  console.log([...name]);

  let names1 = [1,2,3,4,5,6,7,8,9,10]

  let obj = {...names1}

  console.log(obj);

function demoRest(...data) {
   console.log(data)
   console.log(...data);
}

demoRest(names) //['peter', 'parker', 'John'] */


const promise1 = new Promise((resolve, reject) =>{
       console.log("2");
      resolve("Success")
})


promise1.then((res) =>{
  console.log("Ronaldo");
  console.log(res)
})

console.log("hello world");