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

let arr = ['oranges', 'oranges', 'grapes', 'kiwi','oranges']; // {oranges : 3 ,kiwi : 1 , grapes : 1 }

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

public class Main {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
      boolean checkForPrime = false;
      for(int i = 0 ; i<=100; i++){
        checkForPrime =  isprime(i);
        if(checkForPrime){
          System.out.println(i);
        }
      }
  }
  
  public static boolean isprime( int num){
    
    if(num < 2){
      return false;
    }
    
    for(int i = 2 ; i<=num/2 ; i++){
        if(num % i == 0 ){
          return false;
        }
    }
    
    return true;
  }
}

============ Empower Interview =====================
*What is the Event Loop
*Give examples where the event loop works
*How can you write a 2 multiplication table with setIntervel
*What is the difference between for loop and for-in loop
forloop ---> Traditional for loop in (Initialization , condtion and increament or decrement )
for-in loop ---> used for arrays and objects 
ex:
let ab = [1,2,3,4]
for (const key in ab) {
  console.log(key); // 0,1,2,3, key is index
}
var x = {
    name : "vinay",
    city : "Siddipet",
    id : 3626
}
for (const key in ab) {
  console.log(key); // name, city, id  key is key in object
}
*Difference between SetTimeout and setInterval and callback
*What is the difference between Ajax and Promises and Observables
*What is the difference between Async and promises
*Reverse a string in javascript and java
*[1221, 2323,4567,1221, 2323] find What are the repeteting elements in above array in java and javascript
*How can we give the count for the repeteting elements in java and javascript
*What annotation to give at the time of Schedulers project in spring-boot
*Can we keep multiple application.properties files in project
*How can we connect database to owr spring-boot project
*Dependency to work with web applications in springboot
*How to connect to two databases in one spring-boot project
*Where we need to configure the database connectivty in project
*can we insert a 1 crore data to a my sql database at one go

*Set<Integer> repeteatingElms = new HashSet();
		Set<Integer> uniquElements = new HashSet();
		
		for(int num :array) {
			
			if(!uniquElements.add(num)){
				repeteatingElms.add(num);
			}
		}
		System.out.println(uniquElements);
		System.out.println(repeteatingElms);

function findDuplicates(array){
    return duplicatNumbs = array.filter((currentNum,currentIndex)=> array.indexOf(currentNum) !== currentIndex)
}

console.log(findDuplicates(array));


==================Need to check on this once =================
*how the security will be added to restfull web services in spring-boot.
*how the schulduler runs for every time for the application.
*Sinario based questions in springboot
*Sonarq in java back-end code quality
*Agile methodology 
*Testing framework for front-end karma and jasmine


================Ey Interview Questions ================
*General ANgular questions
* 2 coding questions
1. array = [1,2,3,4,5,6]  trasform to [1,3,5,2,4,6]
2. You have certain currency values (i.e 1 rupee, 2 rs, 10 rs, 100 rs notes). 

You are asked to give N amount in terms of the given currency values.

Return the minimal count of notes (or the currency values) that you'll be using to produce the given amount

Think of minimizing the count of the notes that you'll be giving me to produce amount

================= Ey 2nd Round(F2F) =======================
*General Angular questions
*Implementing Todo list in Vs code (Implemented in Stackblitz saved to my account)
*Manageral Round 
**How your typical day does 
*What are your hobbies
*Why you are changing your company
*If Ey Offers you less salary compared to other will you join
*


================ GE digital Interview Questions ===================
1.Logic Testing
  How can you rate your self in javascript?

* 1st question : department=[
{departmentName:"Civil",deployementId:1},
{departmentName:"Chemical",deployementId:2}
]
  Employees = [
    {EmployeeName: "John",phoneNumber:"xxxxxxxxxxxxxxxx",departmentId:1},
    {EmployeeName: "Peter",phoneNumber:"xxxxxxxxxxxxxxxx",departmentId:2},
    {EmployeeName: "Parker",phoneNumber:"xxxxxxxxxxxxxxxx",departmentId:2},
  ]

  Output SHould be :
  Employees = [
    {EmployeeName: "John",phoneNumber:"xxxxxxxxxxxxxxxx",departmentId:1,departmentName:"Civil"},
    {EmployeeName: "Peter",phoneNumber:"xxxxxxxxxxxxxxxx",departmentId:2,departmentName:"Chemical" },
    {EmployeeName: "Parker",phoneNumber:"xxxxxxxxxxxxxxxx",departmentId:2, departmentName:"Chemical"},
  ]

  and need to remove the departmentId property from the above object

2 Question : 
Employees =[
  {employeeName : 1, employeName : "Joe"},
  {employeeName : 2, employeName : "Nick"},
  {employeeName : 3, employeName : "John"},
  {employeeName : 4, employeName : "Parker"},
  {employeeName : 5, employeName : "yash"},
  {employeeName : 6, employeName : "potter"},
]

output : 
Batmentain pair =[ [{employeeName : 1, employeName : "Joe"}, {employeeName : 2, employeName : "Nick"}],
[{employeeName : 3, employeName : "John"}, {employeeName : 4, employeName : "Parker"}],
[{employeeName : 5, employeName : "yash"}, {employeeName : 6, employeName : "potter"}] ] 

Batmentain Pair should has the random members and should pair should be unique

*Apply any sorting algorithm 
*What sorting algorithms do you know

2.Angular
*How can we change the language in angular code to sweddesh to English
*What is difference between http and https
*Can we call a http(What is not secure) api from the angular and what happens when we call and what will be the response
*What is websockets and how can we use this
*How can we run angular application in Https in local
*How can we change a default port in angular
*What happens internally when we call ng serve in angular

3.Java
*What is manager class in java
*How do we connect java application with database
*What property settings need to configure in connecting to database
*Where we write our bussiness login in spring-boot code

4.Testing
*Why we need to write test cases in angular with 
*Have you used another 

4.CI/CD
*How can we deploy our application in to server with (Jenkins)

================ Summa Linguae ==============

1.Angular Questions

*What are lifecycle methods in angular
*What is the first lifecycle method is called
*When ngOnchange will called
*What is Angular custom pipes and how can we create it
*How can we use pipes in angular
*What methods we use in custom pipe class and how can we manipulate data in pipes
*What is viewChild decorator in angular
*When we use EventEmitters and what is @output decorator
*What is lazyloading in angular 
*Benifites if using lazy loading
*What is angular routing in angular when we can use routerlink 
*What is the use of RouterLinkActive
*How do we configure route in angular
*Can we have only one routing module in application
*When we use wildcard routing in angular
*Have you use ng-template and what is the use case of using ng-template 
*What is the use of ng-container in angular
*What is the dependency injection in angular
*Have you worked with other libriaries in angular like angular-Material and other libraries

2.Javascript
*What is the difference between the Typescript and Javascript
*WHat is the callback function in javascript
*What is promises in javascript
*What is the use of filter method in javascript
*What is the use of find method in js

3.Css 
*What are pseudo classes in css
*What is the use of z-index
*What is Css position properties, What are the different uses of css position properties
*Differences between absolute and relative and fixed and static
*What are the ways we can do angular application responsive
*Have you used meta tags,Where we can use it

4.Source controls 
*What kind of version controls you have used 
*What are the basic commands in git


============== Safran Interview =========================
How can you rate your self in the node.js
Node.js
*What is node.js
*What is event driven architecture
*What is Event loop in node.js
*What is libuv
*How can you scale the 1000 of requests at a time in node.js
*Discussed about the modules in node.js


Javascript
*What is javascript
*What is callbacks 
*What is callback hell and how why we are not using callback
*What are the first order functions in javascript

*code 1:
var a = 1
function foo(){
var a = 2
console.log(a)
}
foo()
console.log(a)
guess the output :
2
1

*What is a clousure in the javascript
Below is the code for clousure
*code 2 :
for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

3.Typescript 
*What is the difference between typescript and javascript 

4.Angular
*Have you implemented eslint in your project
*Can you give me some sinarious when we get the eslint errors
*What is the difference between the services and observables
*Difference between subject and observables
*What is services in angular
*how can we pass the data between componenets
*How angular execution will be done 
*You know about outbound issue in type-script in angular bellow is the error 
how can we resolve
bellow is the code for outbound error 
*code 3 :
class Counter {
  private count: number = 0;
  increment() {
    this.count++;
  }
  logCount() {
    setTimeout(function() {
      console.log(this.count); // 'this' is not bound correctly
    }, 1000);
  }
}

const myCounter = new Counter();
myCounter.increment();
myCounter.logCount();




*/

