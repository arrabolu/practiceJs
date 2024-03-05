/*

        ==========================Temporal dead zone==============

Temporal Dead Zone : Temporal dead zone happens in let and const variables the time period
of a let and cost variables which is declared (Memory creating in Hoisting) and not yet initialized (In Hosting)
is called as temporal dead zone

var variables are stored in the Global area but let and const variables are stored in the script area(Not in the Global area)

      ==================== Type error vs Refference Error vs Syntax Error=============== 

Type Error : When there is a type mismatch then we can get type error
Syntax Error : Syntax error when the code will not execute it will give error straight away
Refference error : When there is no variable in the scope (window scope , block scope ) we can get Refference error
                   we can get reference error when we are in temporal dead zone 

                =============== var vs let vs const =====================

var variable ===> var variables can be redeclared and reinitialized , var varibles are loozely coupled 
let varibales ===>  let declarations can be reinitialized but cannot be redeclared,
                    let variables are strict compared to var variables
const variables ==> const variables are strict variables, we need to initialize when we are declaring it straight away
                     it cannot be redeclared and reinitialized

                     <--------------   Hosting  ---------------->

Hosting :
Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of 
their scope before code execution
                                    or
Variables and function declarations are moved up the code in the javascript when we run a js file there will 
be first memory allocation for varibales then after memory allocation the data is initialized to the variables,
but hoising is not applicable for function expressions 
JavaScript moves function declarations to the top of their scope during the compilation phase not function
expressions

                    <----------------  Prototype  ---------------->

     In javascript objects there is a seperate property called prototype, prototype is a feature with 
which we can inherit properties form one another , when we call any fuction or variable in a object it
 will first checks the its own scope then it will check its prototype scope and it will also 
check its prototype prototype scope and returns the value it is also known as prototype chain
 --- refer to saved insta post
Ex 1:
let personName = {
    name : 'John',
}

let personRollNo = {
    rollno : 101
}

let personAddress ={
    city : "Hyderabad"
}


personName.__proto__ = personRollNo
personRollNo.__proto__ = personAddress

console.log(personName.rollno)

console.log(personName)
console.log(personName.city)

Example 2:
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

function fun(){

}
console.log(fun.__proto__.__proto__ == Object.prototype)

Hence in JavaScript every thing is a Object -- Akshay Saini youtuber
       ============================= Scope in Js ======================
There are 3 scopes in js 
Global Scope
Script Scope
Block Scope 

Global ==> The Global scope is present is Global Execution context, in global scope their 
will be variables which are declared with var but when we declare let and const variables in global scope it wont 
be present in global scope it will present in script scope or block scope 

Script Scope ==> When a varibales with const and let are declared and initialized in global scope it will be in 
script scope 

Block Scope ==> when a block is declared and when there are varibales in it like const and let, these variables are
present in block scope

undefined and not defined ===> when a variables declared with var then the js engine will allocate specific space 
to it when we console that variable it will be printed as undefines
not defined is when a varibales is not yet defined and still we are accessing then it will get refference error with 
variable Name is not defined , not defined when a varibale is not yes defined

====================== async and defer key words ===============

These both are boolean variables these are used in script tag html , Normally with out using these 
keywords compiler will pars the html and it will render in browser when ever it sees a script tag 
which has some source to import the it will stop the html parsing and it will fetch the source from the 
src and after fetching it will execute the resouces immidietly and again the stoped html parcing will 
be started again

async : when there is async keyword in the script tag the fetching of the resource will be done 
in asynchronously and after fetching it will be executed immedietly and after execution it will again 
parse the html 

defer : when there is defer keyword the source will be fetched parallaly with the parcing of the 
html after completion of html parcing the source will be executed

*While "display: none" completely removes the element from the webpage layout, "visibility: hidden" 
only hides the element but keeps its position intact.

             ==================== CORS Headers ==========================
CORS means Cross Origin Resourse Sharing is a mechanisiam which helps to share the data in secure manner
When a server restricted to send a requestes only for some particular domain then it will be helpfull

When there is a header like accept-control-allow-orign * in serverresponse then from any origin we can send 
the requests 

When a client is sending a request to server with not a standard headers then browser will send a 
PRE-FLIGHT(pre-flight) request to server that means it(client) is asking that in i am sending these headers(which are 
not a standard http headers ) and my request is comming from this origin from this orign is it ok 
preflight call will be in OPTIONS method then server will respond with headers like 
accept-control-allow-origin
accept-control-allow-headers
accept-control-allow-methods etc ..there you can see the restrictions which are put buy server

---------------Ajax------------------------
Ajax is Asynchronious JavaScript and XMl , With this technique we can handle the asynchronous api calls. In General
Ajax will use XHR requestes to send data to server and receives to client with out page reloading 
With Ajax, you can update parts of a web page without reloading the entire page


                  ================   Closures   ===============
In Javascript closures defined as function and  its lexical scope together ,  lexical scope means 
the references of the parent function or parent parent functions 

=============== Rest Parameters =========================
We can send any numnbers of arguments to a function in javascript with rest arguments as it converts
all the extra arguments into a array with this (...) dots after the variable 

================  Spread Operator -=========================
Spread operator can convert the given array into the elements of the array 


=========================  Higher order function aka First class functions =======================
When a function takes a function or returns another function are called as Higher order functions

ex :  const message = function(){
      return "Hello world"
}

       function printMessage(message){
            return message()
       }

       printMessage(message)

       here printMessage() is a Higher order function / First class function since it is accepting another function 
       and message function is callback function 

              ========== Function Decalration ====================
function statement aka function declaration : Normal kind of function creation 

function a (){
      cosole.log('')
}

             ========== Function Expression ====================
function expression : A function is declared to a variable is called function expression 
Hosting is not applicable for Function declaration 
const a = function (){
      console.log("")
}
 
And the difference between the function statement and function expression is hosting
we can only call the function statement kind of function before its declaration where as we cannot
call function expression kind of function before its declaration 

ex: 

b();
a(); // will get compile type error

const a = function (){
      console.log("Hello world!");
}
function b (){
      cosole.log('Hello')
}

      ================= Difference between Parameters and Arguments ==================
      The values which we pass when we call a function is called as arguments and values which
      we recieve when function is decalred is called parameters

      function b (param1){ // here we can call them as parameters
      cosole.log('')
     }

     b(arg1) // here we can call them as arguments 
*/

/* 
     ================== callbcak function =======================

when a function is passed into another function then it is called as call back function , 
simplifing as when function a is passed into function b then a is called as callback function and 
b is called as higher order function / first class functions

Note:
1.Generally js is synchronous and single threaded, js will execute in line by line but in case of 
callback functions it will asyncronous example of settimeout, addEventListner and also in web api calls
 
2.we need to free up the event listiners memory it will take lot of memeory, when those are not 
necessary  we need to call garbage collector to remove it

3.Event Listiners can  invoke a closures (It will remember the variable )

        ===================== Event Loop ======================
Lets talk about browsers when we execute js code in browser we need js engine in js engine there 
is callstack where GEC and other method contex are present when executing code , js is a single threded
and synchronous , browsers also has some inbult methods like setTImeout() , fetch()
addEventListner() , these all are called web apis 

     When setTimeout is called with 5000ms callback function which need to execute after the 5000ms 
is placed somewhere in web apis box and when the timmers of 5000ms is expired the callback(cb) goes to 
Callback queue and there will an another eventloop present in the browser , The main task of the event
loop is to check whether the call stack is empty or not if its empty then it will push the cb funciton
in callback queue to call stack 

     Here there will be another microtask queue which has more priority compared to callback queue
when event loop finds call stack is empty it checks first microtask queue , is there any functions 
need to execute in microtask queue , only when the microtask queue is empty then only it will 
goes to callback queue to put callbacks to call stack , The  callbacks coming from promises and 
observables are stored in microtask queue (It will be more prioritize)

        ================== Javascript runtime Environment ===================

Javascript runtime Environment consists of Js Engine Event Loop , Call back queue , microtask queue and 
built-in methods , Chrome browser uses v8 Engine same like node.js  Js Engine has Call stack,
Heap stack , GC(Garbage collector) ,Interpreter and compiler 

     * JS  engine is a piece of code

Js code goes into js engine for 
 *Parsing ----> Compiling -----> Execution 
 *parsing code can transform to AST 
 compiling is converting js code to bite code
ANy programming language can be called as compiletime programming language or Interpreter type language
Interpreter type ---> It checks the code line by line it doesnt know the next what will be the next line
Compile-time type ----> It checks the code and rearrangs the code correctly and compiles once the 
code is fully arranged 
when  js parses the code it gives AST(Abstract Syntax Tree). which looks like json and then it goes to compilation 
where the interpreter checks code line by line meanwhile the compiler arrangs the code and increases the 
Efficiency of the code Both INterpreter and compiler gives the Bite code which will goes to 
Execution phase 

* Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
* Exection and compilation are done together
* Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
*/

/* 
     =========================  Blocking of the Main thread  =======================
        If there is any setTimeout or addEventListiner api calls are present and after that there
are many lines of code so the main thread will execute  the lines of code but dont care the setTimeout
when the timmer expires event loop wont see the callstack gets empty and callback fn of the setTimeout
is still waiting in the callback queue, so we cannot trust the settimeout since js is a single threaded
synchronous language it only has one call stack and when eventloop see the callstack gets empty it pushes 
the callback fn to the call stack
it is called as blocking of the main thread


     =================  Object coping (Deep coping vs shallow copy) ===========
     In general when we assign a variable with another variable then try to change the value it wont changed
but when we do same thing with objects it will change , Because when we copy a variable it will create a new object
new memory for the varible , but when we assign a object to a new variable,only the reference of the object(memory reference)  
is assigned

to alter this condition we has shallow copy and deep copy , shallow copy can be done by object.assign()
and also with object destructring 
and deep copy can be done by cunverting the object to string with JSON.stringify() and again we need to 
parse it with JSON.parse()

Object.assign() is used to copy the object Object.assign(target, source)

let obj = {
  name : "peter"
  address : {
     city : "London"
  }
}

// let user = Object.assign({},obj) ---> this is shallow copy
// let user = { ...obj } ---> this is shallow copy ,But shallow copying is applicable for only one level 
// let user = JSON.parse(JSON.stringify(obj)) --> this is Deep copy

user.name = "Parker"
user.address.city = "Pakistan"

console.log(obj)
console.log(user)

*/


/* 
   ===============================   Dom Manipulation methods ===================

   1.createElement() ------> It creates an element as simple as that

   const btn = document.createElement('button') //<button></button>

   2. appendChild() --------> when we use this method to a element it takes as a parent element and
                         created child will be the child of this parent element

   btn.appendChild(document.createTextNode('Submit'))   // <button>  Submit </button>

     Here, btn has the button element and with the above statement btn will be the parent element
     and Submit will be the child of it 

    3. createTextNode() ------> it will just create a text element (Node)


    <----------------Spread Operatior vs Rest Operators ------>


    Spread Operator is like Unpacking data , It can change the array of the elments to only values [1,2,3,4] ---> 1 2 3 4

    Rest Operatior is like packing Data , We can pass multiple arguments to a function in which it has only one parameter 

    ----------- Promise.all() and Promise.allSettled()  ---------->

    We will use promise.all() and promise.allSettled() in the case of handling array of promises 
    Promise.all()  and Promise.allSettled() returnes promise
    Where all() and allSettled() takes array of promises and returnes result of the promises
    
    Promise.all() will be usesful only all the promises in the array should be resolved or if there is one rejected
    promise is there then it will return 1st rejected promise in catch

    But for promise.allSettled() it will return array of the promises status and reason or success messgae
    of the respective promises will be shown

    ---------------------> Javascript Execution ---------------------------------------------------->

    Generally JavaScript code can be interpreted before the execution state starts , means it will directly 
    gives the result before converting it to byte code , interpreter means it  will check code  line by line
    and gives the output, Symultaneously parsing and compilation will be performed

    we can see the output of the code as 
    console.log("Hello") // it will gives the output as hello and then gives the error 
    console.log(Hello)// hello is not defined , we can conclude it as it will interpretes by line by line

    Javascript code before executing it transpiles the code from different script files like typescript
    nextJs or modern es6 javascript files to legacy javascript files and converts the js code to AST
    (Abstract Syntax Tree) Which can be converted to machine code or byte code and furter uses the 
    JIT compiler , Jit compiler changes the whole code to byte code at the time of runtime and executes it 
    it will be a faster execution of the code

    Parsing ---> compilation ----> Execution 


    
  <--------------------Call--------------->
 Call method can be used to invoke a function by passing a reference of the varible or
object which is pointed to this keyword 

 <---------------------Apply--------------->
With the help of apply method we can invoke a function and pass reference which is pointing to a 
this keyword and send parameter will bbe array of the values what should me the next arguments of 
the function

  <----------------------Bind----------------->
bind will be same as the call and apply but it will return a function which we can invoke when 
we need after some time 



const obj = {
     firstName : "kyllian",
     lastname : "Mbappe"
   }
   
   const obj1 = {
     firstName : "Christiano",
     lastname : "Ronaldo"
   }
   
   function printInfo(place , club){
     return console.log(`${this.firstName} ${this.lastname} from ${place} plays for ${club}`)
   }
   
   printInfo.call(obj, "France" , "PSG") // call method  --> kyllian Mbappe from France plays for PSG
   printInfo.apply(obj1, ["Portugal" , "MU"]) // apply method --> Christiano Ronaldo from Portugal plays for Mu
   const callingBind = printInfo.bind(obj1, ["France" , "PSG"]) 
   
    callingBind() ----> Christiano Ronaldo from Portugal plays for MU


    <------------------- Event Bubbling and Event Capturing ---------------->

    Event Bubbling : When we have a div and a button in the div , if we put a event listiner to that
    button the event will be propagate in such a way that first will be propagated with button then 
    its parent div and then its parent div (body) like that it will be propagated currently js is using 
    event bubbling by default , if we want to stop the propagation we need to add a onclick event
    and we need to attach event.stopPropagation() to it so it wont get propagated

    button --> div --> body --> html

    Event Capturing : It is the reverse of the event Bubbling event first the event is propagated from the 
    parent element to child element where the event will be started  like it will be in a manner that

    html --> body --> div --> button

    <------------------ Event Deligation --------------->

    lets consider there are items in the page and when we have single event listener to every item
    imagine our web page will be full of event , it takes lot of data to handle all the event and our 
    web page will be get slow by keeping all the events , so we can handle this kind of challange with 
    the help of event Bubbling , When we click any item the event will be propagated we can attach the event
    to its parent element and we can listen feom the parent element , we can eliminate all the events
    and insted we can put only one event on parent element

   <-------- Currying in js -------------->
   Currying in js is a technique used for loose coupling the multiple arguments in  a function and breakdown it to 
  single arguments we will pass the previous argument to the next function with the help of closure,
    it can be handled with the help of clousures or bind method 

    Example:

   let multiply = function (a) {
     return function(b) {
          console.log(a*b);
     }
    }

   let multiplyByTwo =  multiply(2)
    multiplyByTwo(3)

    <-----or ---->

  let  result = multiply(2)(3)

    currying in js will use closure to return the remembered values and will be called again


    <--------------- this key word ---------------->
    this keyword is defined by where the this keyword is present and by which it is called , When this keyword is 
    present in a outof function it will return the window object and this keyword which is present in  a function and 
    we are calling the function with a object then it will return the object , by which it is called

    **When we call a arrow function in a object and if there is a this keyword in the arrow function it will return
global object , it wont return the object with  which it is being called

const person ={
  name :  "peter",
  greet : ()=>{
  console.log("Greetings")
  console.log(this)  // window object
}
}

person.greet() 

<----------------- IIFE ----------------->
IIFE functions are immediately invoked function Expression when we declare a var variable in the iife we cannot
access the variable out side the iife it makes this kind of functions private , we can call spun the server 
and connect to a database so the it is directly called when we defined this function
Generally it dont have a name for the function , in a pair if paranthesis there will be a annonomous function
after the 1st pair of paranthesis there will be second  pair of paranthesis

this in a iffe refers to global variable

<----------------Modular way vs commonjs in javascript ---------------->

const name = "Peter Parker" // in module.js

import {name} from "./module.js"; // in main.js

commonjs uses require to import the functions or variables from one file into another

======== Regular Expressions ========
escape character ---> \ the compiler will escapes the next character 
ex : const name = "hello my name is "peter"" --->  "hello my name is \"peter\" "
/expression_name/i ---> if you want to select case insensitive expression_name you need to use this
/expression_name/g ----> it will select for the expression_name multiple times 
/expression_name/s ---> it selects the white spaces
/e+/s ---> it will select 1 or more e's in the expression
/e?/s ---> e will be optional here
/.at/ ---> cat ----> cat will be exact match . will see a 
/{(\w+)}/ ---> My name is {John} and I am from {New_York}


Premitives vs non-premitives

Premitive --->Numbers, Boolean, string, Undefined , null, Symbol
Non-premitive ---> Objects , Array , functions,

premitives are non changeable (Immutable) they will be refered with by call by value
non-premitives are  changeable (mutable)     they will be refered with call by reference

?? ---> nullesh operator ---> works for null and undefined values
|| ---> falsey operator ---> works for falsey values it return default value when the value is falsey



let value = null ?? 'hello' ---> // return hello because value is null so the default value is hello
let value = 0 ?? 'hello' --> return 0 because 0 is not a null value or undefined
let value = 0 || 'hello' --> return hello because 0 is falsey


<----------------------Memoization ------------------>

Memoization is a technique use to optimize the js code to execute it in less time , Its like storing the value
in cache , If we pass a value in to a function then the result is stored in the cache and if we call the function
with same input the total logic will not be executed it will check in cache and it will return from cache this 
reduce the time 

cache = {}

function SumOfValues(n){
     if(n in cache){ // search in cache and return
          return cache[n]
     }else{
           //logic
     let result = 0;
     for(let i = 0 ; i < n ; i++){
          result = i + result;
     }
     // stores in cache
     cache[n] = result; // {'3' : 6}

     return result;
     }
}

SumOfValues(3)

<----------- Generator Functions in js ---------------->

Generator function is a different kind of method when we have a syntax of function* then we can say it is a 
generator function and has yield syntax in the function object. When we call a generator function we get 
generator object , With the help of enerator object we can call next method , The usecase of the generator 
object is we can use it in ifinite loops where we can generate ids , we can run ifinite loop with out
hanging the code 

function* generateIds(){

    let id = 1;

    while(true) {
        yield id
        id++;
        if(id == 15){
            break;
        }
    }

}
   
const generatorObject = generateIds();

console.log(generatorObject)
console.log(generatorObject.next())
console.log(generatorObject.next())

<---------- Web worker ------------------->
When there is a high computating task need to be done in client we use webworker , In general we have only one 
call stack and javascript and it is a single threaded synchronous language , When we do that heavy task in 
on main thread  the ui will be freeze and it wont work , it will be a bad user experience , So for this 
we need to implement webworker in our angular application that it will create another thread and the high
computation task is done on other thread so the main thread wont we struck with one task 


<------------Web Sockets -------------->
Web Sockets are one of the machanism that is built above the TLS connection, Layer 4 in OSI Model, When connection
between server and client when client sends a request to server there should be a TLS connection for every
request here connection is state less means it when client sends the request the request can be handled
by any server in the back-end but what Web Sockets do is it will create a connection bridge between server and client 
which makes the responce from the server faster and for every request there wont be a TLS connection , but the 
disadvantage is it is not a stateless it is stateful , only one server can handle the request, where the state is
maintained on that server 

<--------------Constructor Function is JS----------->
Constructor Function will instantiate the object(creates a object) with the new keyword , by default it will
return the object,
With the help of the constructor function We can create a blueprint for a object, In general from java pov
we will say class is the blueprint of the object but in js constructor function is the blueprint of the object
it will look just like a function 
we can create many objects with the help of the constructor function by just calling the constructor function
with new keyword, where this keyword in the Constructor Function will refer the object which is calling the 
Constructor Function, Constructor Functions will be seen as 1st letter in the function name is a capital letter

function Greet(fName,lName,wish){
  this.firstName = fName
  this.lastName = lName
  this.greetings = wish +' '+ fName + ' ' + lName
}

let greetings = new Greet('Peter','Parker','Good Morning')

here this refers to greetings

console.log(greetings)

<------------- Array functions ---------------->

numbers = [1,2,3,4]

numbers.push(5) // numbers=  [1,2,3,4,5]
numbers.pop() // numbers=  [1,2,3,4]

numbers.unshift(5) // numbers=  [5,1,2,3,4]
numbers.shift() // numbers=  [1,2,3,4]

--------javascript is Statically typed or Dynamically tipes language ------

Javascript is a dynamically typed language which means we will not gives datatypes to the variables while
declaring like 
let a = 10; // Dynamically typed

-------------- Docker  ------------------------
Docker helps runnning our projects isolatedly in any operating system 
we can run maintain various versions dependency in different containers with different docker image files
and can run then concurently with out any hassle 

*Ensures that the application runs consistently across different environments.
*Containers acts like virtual machines which shares the OS Kernel for every container
OS Kernel : Acts as a mediator for the softwares and Hardwares in our machines(Computers)
*Each container uses some part of Os, hardware ,Cpu ,Netwoking acts like vms

*/




 