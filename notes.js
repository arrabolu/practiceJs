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


*/

/*
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
to it when we console that variable it will be printed as undefines it is also known as the console is in temporal dead zone
not defined is when a varibales is not yet defined and still we are accessing then it will get refference error with 
variable Name is not defined 

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

             ==================== CORS Headers ==========================
CORS means Cross Origin Resourse Sharing is a mechanisiam which helps to share the data in secure manner
When a server restricted to send a requestes only for some particular domain then it will be helpfull

When there is a header like accept-control-allow-orign * in serverresponse then from any origin we can send 
the requests 

When a client is sending a request to server with not a standard headers then client will send a 
PRE-FLIGHT(pre-flight) request to server that means it(client) is asking that in i am sending these headers(which are 
not a standard http headers ) and my request is comming from this origin from this orign is it ok 
preflight call will be in OPTIONS method then server will respond with headers like 
accept-control-allow-origin
accept-control-allow-headers
accept-control-allow-methods etc ..there you can see the restrictions which are put buy server




*/

/* 
                  ================   Closures   ===============
In Javascript closures defined as function and  its lexical scope together ,  lexical scope means 
the references of the parent function or parent parent functions 

=============== Rest Parameters =========================
We can send any numnbers of arguments to a function in javascript with rest arguments as it converts
all the extra arguments into a array with this (...) dots after the variable 

================  Spread Operator -=========================
Spread operator can convert the given array into the elements of the array 

*/

/* 
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
      console.log("")
}
function b (){
      cosole.log('')
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
 *parding code can transform to AST 
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
  Call method can be userd to invoke a function by passing a reference of the varible or
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



*/




 