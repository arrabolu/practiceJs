/* 
Event queue
Promises
Aot and Jit compilation
cors
Auth Guards

Promises are eager and Observables are Lazy

================= NextLabs interview Questions ================

canvas tag and svg element => svg and canvas elements are html graphics elements where we can draw 
z-index                       rectangles and circles with different html tags
doctype => doctype element is helps browser to know what html version is being used
async and defer
flexbox and grid
Differernce between mobile-Responsive  and Mobile Driven Development
Different Storages for storing data in frontend 
What are cookies and information stored in cookies and its types
When we click allow cookies in a website or deny cookies what will happen
CSS Box model
How to hide elements in frontend
Difference between undefined and null
Map vs ForEach
What is JSX
Different types of units for giving sizes like px ,rem , vh, vw

How can we optimize this web site from the frontend level?
What are the CDNS
Websockets

Event Loop
CORS
Var let const 
event bubbling
Hoisting
Clousers
LexicalScope
Anonymous FUnctions and its usercases
this keyword

============Fluper interview questions =======================

// for (let i = 0; i < 5; i++)
// {
//     setTimeout(function() { console.log(i); }, i * 1000 );
    
// }

// function sum(a, b=0){
//     return a + b
// }



// console.log(sum(2,3));
// console.log(sum(2)(3));

// var myObject = {
//         foo: "bar",
//         func: function() {
//             var self = this;
//             console.log("outer func:  this.foo = " + this.foo); // bar
//             console.log("outer func:  self.foo = " + self.foo); // bar
//             (function() {
//                 console.log("inner func:  this.foo = " + this.foo); //undefined
//                 console.log("inner func:  self.foo = " + self.foo); //undefined
//             }());
//         }
//     };
    
    
//     myObject.func();

         ================= Introduction ==============


         =========== ===========

1. What is the second larest number in a given array?
2. ['123','xyz','abcde','qwers','asdf'] ---> { 123 : 3, xyz :3, abcde :5, qwers : 5, asdf : 4}
3. Create a custom pipe that trasforms the given content
hello \n i am a interviewer \n i need to take a interview 

hello
i am a interviewer 
i need to take a interview

  ============ BMS ===========
  Webworker in angular
  generator in javascript
  escape character in javascript
  Challenges when developing rest-apis
prime numbers in javascript
fibonacci numbers in javascript

====== gap interview =========
Debugging techniques

implicit global variable declaration
y = 10;
console.log(y);
----------------
console.log(a)
var a = 10
-------------
y = 10
console.log(y)
var y;

let arr = ['oranges', 'oranges', 'grapes', 'kiwi','oranges'];

let result = {};

arr.forEach(item => {
  result[item] = (result[item] || 0) + 1;
});

============== Diksha technologies =========================
Angular - 
   . How you integrate the api in angular
   . What is directives
   . Difference between constructor and ngOnInit
   . Route gaurds
   . What is micros in angular
Nodejs -
  . What is modules give me examples
  . What security implementations should take at the jwt api implementation
  
<html>
<head>
    <script type="text/javascript">
        var employee = {first: "John", last: "Doe", department: "Accounts"};
        var details = "";
       
        document.write("<b>Using for/in loops </b><br />");
       
        for (var key in employee) {
           
            details += key + ": " + employee[key] + "<br />";
        }
       
       
        document.write(details);
    </script>
</head>
<body>
</body>
</html>

============== Incresol Solutions ==============
1.Entity manager factory?
https://chat.openai.com/c/72ffef5c-3171-4dc8-afac-2ca089e4cdd8
2.Why Mongodb is faster than MySQL and Postgress and differences between no-sql and sql databases?

SQL databases:
1.Follow a structured, tabular data model with a predefined schema. Tables, rows, and columns are used to organize and represent data.
2.Have a fixed schema, and any changes to the schema often require altering the entire database.
3.Typically scale vertically by adding more power to an existing server. This can be limited by the capabilities of a single server

NoSQL databases:
1.uses a document-oriented model where data is stored in flexible, JSON-like documents
2.Are schema-less or have a dynamic schema, allowing for more flexibility in handling different types of data
3.Are designed to scale horizontally, allowing for the distribution of data across multiple servers

3.Difference between JPA and Hibernate?
4.What issues have you encountered when deploying your back-end application
5.How can we change the language in your angular application so the text in our application will be changed?

======== Wisal Interview ================

*Difference between Object and Class in real time
A class is a blueprint or a template that defines the properties and behavior of objects.: It is a logical entity that describes 
a specific type of object. On the other hand, an object is an instance of a class. It is a specific entity created from the class, 
and it represents a real-world concept.
*What is the difference between Interface and Abstractclass
*Is the String is Immutable in nature and explain
*What is the this keyword and super keyword in java
*What is static keyword in java and where we use it
*Can we put @autowired on top of a interface
*What annotations you have used in spring-boot
*Internal working of the hashmap
*Scope in angular
*How angular applications starts
*What is  SPA 
*APi gate way in angular 
*What annotations you used in angular
*What Angular has advantages over react
*How can a MongoDb is had a advantage over the MySQL
*

===========  L and T  ==========================
*Checked exception vs unchecked exception
*Difference between linkedlist and arraylist
*Java 8 features
*Optional class used for
*How spring boot works
*Find the second largest number in a array with streams


=============== newSoft =========================
*Transactional annotation
*Terminary methods in streams and intermediate methods in streams
*How to handle exceptions in spring-boot
*Qualifier annotation used for
*What are stream apis
*What is native query and normal query annotation
*
*Print primenumbers from 1 to 100

public static printPrimes(){

int j = 0;

int num = 0

String result = "";

for(int i =1 ; i<=100; i++){

int counter = 0;

for(j = num ; num>= 1; j-- ){

if(j % num == 0){
counter = counter + 1;
}
}
if(counter == 2){
result = result + j;
}

}

System.out.println(result);

}

*/

