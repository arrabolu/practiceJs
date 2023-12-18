/* 
             ======================  Java  ====================

Why Java is a platform-independent language 
1.When we compile java file it will give a byte code(.class file)
2.With the byte code we can interpret with JVM and then it will convert to machine redable code
3. javac filename.java----------------> filename.class -------------------> machile code
                          Compiles                      JRE(Interpreter)
                        JDK compiler                           +
                                                        JIT (Compiler)
            
4.When the bytecode is compiled with the JDK it will again interpreted by the JVM and checks the code by line
by line and JIT compiler will again fastens the process by compiling  and convers to machine code                     

             ---------------- JDK vs JRE vs JVM -------------------------
All JDK JRE and JVM are platform dependent(For every platform there is separate sofwares)
1.JDK is Java development Kit which consists of JRE and development tootls to write java code 
2.JRE is Java Runtime Environment , It is the software which need to be present for running the java code
End users need to have JRE to run the java code.
3.JVM is Java Virtual Machine , with the JVM we can interpret the bytecode(.class file) to machine readable code
it is responsible for running the java code


Method Overloading : In Java class if we have 2 methods with same method name and  different number of 
parameters or different parameters then it can be called as method Overloading 

If there are same number of parameters and different datatypes then while calling the method compiler will
be prommiting the datatypes automatically 

char ---> int ---> long --> float --> double 

Ex : public GetEmployees(int i), 
     public GetEmployees(int i,int j) 

Method OverRiding : When two classes has parent and child relationship when child tries to override the methods
present in the parent with same method signature is called as method OverRiding.

for method over riding both methods should be non-static

*Method OverRiding is the example of the Polymorphism(Runtime Polymorphism)

Ex: class Parent  {
    public GetEmployeeCount(){
        return 20
    }
}

class Child extends Parent {
    public GetEmployeeCount(){
        return 30
    }
}

----------Constructor Overloading -------------

class Hospital {
int variable1, variable2;
double variable3;

public Hospital(int doctors, int nurses) {
 variable1 = doctors;
 variable2 = nurses;
}
public Hospital(int doctors) {
 variable1 = doctors;
}
public Hospital(double salaries) {
 variable3 = salaries
}
}

Overloading the constructors with different parameters is called constructor overloading above is the example

------------- Method Hiding  -----------------
Method Hiding is same as method overriding where the parent class is extended to child class and the both
methods in parent and child should have same method signiture and they should be static methods then only 
it will be called as method hiding 

---------------------  OOPS    --------------------

concepts in OOPS are 

1.Polymorphism
2.Inheritence
3.Abstraction
4.Encapsulation
5.DataHiding

Polymorphism : Having one name but present in multiple forms is known as Polymorphism
Examples - Method Overloading and Method Overriding

Inheritence : Extending one class with another class is known as Inheritence, and parent class methods are 
available in child class 
example - By default every class in Java is extended to Object class and object class methods are applicable
to custom classes which we create 

Abstraction : Hiding the main functionality and only showing the services what we provide is called Abstraction
Example - Interface , bean class
Interfaces only provide the methods declaration it wont provide method implemtation

Encapsulation : Process of binding methods and variables is known as Encapsulation 
example : Bean class 

class Example {
    private String name ;

    public void getName() {
        return name;
    }

    public String setName(name) {
        this.name = name;
    }
}


Data Hiding : hiding the variables with private access specifier and putting public access specifiers for
getter and setter methods is called data hiding 

Example : Bean class

-------------------------- String Constant Pool(SCP) ----------------
In heap memory there is a special place to store the string variables it is called as String constant pool

We can create a string object in java by two ways by 

String person = "John"; -----> creates a new String literal in SCP
String person1 = new String("Peter"); ---> creates object in Heap memory and points to that object , If it is not present in SCP

The difference between in this two is when we create a string object with new key word it will check in the 
string constant pool wheather the literal is present or not , if it is not present it will create a literal
in string constant pool and then comes back to normal heap memory and again it will creates a new literal and the 
corresponding reference will be pointed to the new literal created out side of the SCP, If the literal is 
present inside the SCP it will comes in heap memory and creates one and corresponding reference is pointed
to literal created out side of the SCP

When creating with out new keyword it will directly points to the literal in SCP (If it exists), If not it 
will create a new literal in the SCP

-------------------Difference between == operator and equals method --------------

The primary functionality of this operator and equals method is same it will checks the string characters 
in it and it will return true ot false ,

== operator will check the hashcode of the object (Memory reference) , like it will check if the two references are equal are 
pointing to the same object

.equal method is present in the object calss , it is the parent class for all clases in java , It will check 
the value in the variables

--------------------- final vs finally vs finalize -------------------
Final(keyword) ----> variable , method or class can give this key word as final which restricts the scope of the same
variable ---> can not be assigned anothertime
method ---> cannot be overriden after extension of the class
class ---> cannot be extended 
Finally(block) --->Finally block is executed with the try and catch block , This finally block will be executed for sure
Finalize(method) ---> Finalize method is called when jvm called the garbage collector and it will clean the things up
with the help of finalize , Finalize method is present in the object class

class test {
    public static void main(String[] args) {
         public void doSomething(){
            a obj = new a();
            obj = null; // nullfying the object
            System.gc(); // calling gc 
            // when we call gc then gc will internally call finalize method 
         }
    }

}

----------------- Access Specifiers -----------------------

Private ----> Members declared as private can be accessed with the class only
default ----> Members declared as default it can be accessed with in the package only 
protected ---> Members declared as protected can be accessed with in the package by child classes of outside package
Public ----> Members declared as public it can be accessed from anywhere from any other class also

-----------------  Constructors ---------------------------------
1.No arg constructor
2.Parameterized constructor
3.Default constructor
Constructors are used to intitialize the object ,When a object is created some variables are initialized
If there is no constructor created manually then compiler will create a new default constructor , if a constructor 
is present then the default constructor wont be created , Main purpose of the constructor is to initialize
the object, At the first line of the constructor there will a super() it will call the parent constructor 

-------------- Singleton class in java -------------------------------- 

The class which can create only one object is called as a Singleton class, 
1.Where the constructor should be private so the object cannot be created outside of the class 
2.getInstance method should be present in the class to create one object and getInstance method should be static
so we can call the method without creating object

class Animal {
	
	public static Animal get_instance = null;
	
	private Animal() { // with constructor makes as private we cannot create a object outside the class
		
	}
	
	public static Animal getInstance() {
		if(get_instance == null) {
			return new Animal();
		}
		
		return get_instance;
	}
}

------------- String vs StringBuffer vs StringBuilder --------------------------------

1.String is a Immutable class but StringBuffer and StringBuilder are mutable,
2.StringBuilder is not Synchronized means it will only one thread can execute the StringBuilder, it is more efficient
3.StringBuffer is Synchronized means it will be executed with multiple threads at a time,less efficient
4.String has String constant pool memory , When a string object is created it will store in String Constant pool
But for StringBuffer and StringBuilder will create in Heap memory.
5.We can go for string when string value is not going to change frequently,We can go to StringBuilder when we
know that string object is going to change and thread safety will not there(Multiple threads cannot execute at a time),
We can go to StringBuffer when we know that string object is going to change and thread safety will be there
(Multiple threads can execute at a time).

final and abstract is illegal combination for the class


----------------  Collection vs Collections framework ----------------------------

collection is a root interface for the collection framework and represents a group of objects as a single entity and
collections is a utility class in java.util which can use this utility methods like(Searching , Sorting)
for the collection class

                            collection(I)
                                 |
                                 |
               -----------------------------------------------------
               |          extends  |                 extends        |            extends
               List(I)     -----Queue(I)                ----------Set(I)            --------Map(I)
                |          |       |                    |           |               |          |
                |          |       |                    |           |               |       HashMap
            ArrayList      |     Priority Queue       SortedSet(I) HashSet          |          |
                |          |                            |           |               |       HashTable
                |         Deque(I)                      |           |            SortedMap(I) 
            LinkedList     |                            |     LinkedHash Set         |
                |          |                        TreeSet(C)                       |
                |        ArrayDeQue                                                TreeMap
   Stack------Vector 

List : (java.util.List)
1.It will allow duplicate values to store.
2.Access the items easily with indexing.
3.Contains ordered elements.
4.Elements can easily inserted with respect to the position.

Set : (java.util.Set)
1.It will not allow duplicates values.
2.Set don't have ordered elements, So searching and inserting is not done by index based.

Queue : 
1.Queue is a FIFO 
2.Elements added at one end and will remove at one end 

Map : (java.util.Map)
1.Map is a key-value pair object.
2.Values in key-values paires can have duplicates, But keys cannot be duplicated.
3.Map does not implements collection interface.

ArrayList: (java.util.ArrayList) implements list interface.
1.List is Dynamic we can add elements without bothering about size of ArrayList
2.Arraylist we can store only objects
3.ArrayList has a size method which gives output of the size of the arraylist (Occupied size )
4.ArrayList size will be increased to 50% of the initial size of the array.

LinkedList : 
1.It is Non-synchronized, so it is not a tread safe.
2.Insertion order is present.
3.Cannot retrives any element in the list randomly, it will search all the list to find the element.
4.Linkedlist memory allocation is done at runtime.
5.linkedlist deletion and insertion is easy compared Array.
6.Uses ListIterator to iterator LinkedList

Vector:
1.Vector is a thread safe, Because Vector is synchronized
2.Insertion order is present.
3.Vector will double the size of the array, when the size is non sufficient

Stack:
1.Stack is LIFO.
2.Elements are added and removed from only one end.

HashSet:
1.HashSet contains only unique elements
2.it implements hashtable
3.Insertion order is not preserved

Liked HashSet:
1.It preservers insertion order
2.ordered version of hashset.

Sorted Set:
1.It is a interface, all elements of sorted set need to implement comparable interface
2.Elements in sorted set will be sorted in ascending order.

TreeSet:
1.Uses a tree for storage.(Self balancing binary search like red-black Tree).
2.it will sort elements in ascending order.

Priority Queue:
1.Significant feature in priority queue is elements in this queue will have priority number and will serve
according to the priority number 
2.Insertion order(Priority order) will be there.

DeQue:
1.Elements can be added from either both ends.
2.Deque refered to double-ended queue.

ArrayDeque:
1.No restriction of elements addition
2.Way to apply resizable array in addition to implementations of deque methods

HashMap:
1.It is non-Synchronous in nature.
2.In hashMap it can only have one null key but multiple null values
3.Keys will always be unique but not values associated with them

HashTable:
1.It is Synchronous in nature.
2.No null values or keys should be added in HashTable.

SortedMap:
1.Extends Map interface.
2.Elements will be sorted in ascending order.

TreeMap:
1.Implicitly implements Red-Black tree implementation.
2.Cannot store any null keys.

Map is the only interface which doesnt implements the collection interface because all other collections objects
has add(v) method with we can add values but not key and values like add(k, v)

--------------Importace of the hashMap :--------------------
1.HashMap uses hash function, When there is a put operation put(k,v) key will hashed and it will return a
index there in thathtable it will store key and values.
2.HashMap can get values with get method we will pass key in get(k) method and it will return provide index 
of the table and it will return values 
3.If when inserting elements with put method hashing will return same index then there will be a linkedList
will be formed to that index Only if hasing returns same index.
4.But when retrieving while using get method first it will get index value and it will uses equals method to
check the key is same then it will return the value 

--------------Fail Fash vs Fail safe iterators:-------------
1.When one thread is iterating the underling collection object and another thread is modifing the object
then there will be concurrentModification Exception It is called as Failfast iterators.
2.In case of FailSafe iterator there one thread is iterating the underling collection object and other modifing
the collection object then there wont be a exception , because the iteration is done on the clone of the 
collection instead of the original collection.

----------------------  BlockingQueue(I)  -----------------
1.It is from java.util.concurent.BlockingQueue, which means it is thread safe which can take and insert the
element from the collection object concurrently
2.It has the ability to block when there are no more elements in the collection object and if the thread is removing 
objects from the collection.



---------------- Array vs ArrayList ----------------------------
Array is a primitive datatype in java and ArrayList is a collection class
1.Arrays are fixed, length cannot be changable but with arraylist class we can create resizable arraylist objects
2.Arrays can store primitive datatypes and objects but in Arraylist we can store only objects
3.Arrays has length method which gives the length of the array, ArrayList has a size method which gives output
of the size of the arraylist(Occupied size )
4.Array is in core java programming but ArrayList is in Collection framework
5.Array is multi-dimensional but ArrayList is one dimensional


-----------------   Array vs Linkedlist --------------------------------
1.In Array memory allocation is stored in consecutive manner(Continuous) but in Linkedlist memory allocation is not 
consecutive (Non-Continuous)
Ex: memory location for one element in array is next to the another element in array, but in linkedlist
there will be pointers attached to every element of linkedlist then the pointer will point to next location 
2.Memory allocation is done at compile time in arrays but in Linkedlist memory allocation is done at runtime
3.Memory allocation is done at stack memory in arrays but memory allocation is done in linkedlist is at heap memory
4.Size in array is fixed but in linkedlist it is dynamic
5.No Extra space is required in Array but extra space is required in Linkedlist where pointers need to point 
to another linkedlist data
6.We can access array with random like arr[2], in linkedlist is sequential access need to go through all elements
of linkedlist
7.Time complexity is O(1) (Big O) in array in arraylist time complexity is O(N), Need to pass through N elements to access
elements in arraylist.
8.Insertion and deletion operation is Expensive in array whereas in linkedlist deletion and insertion is easy

----------------- Marker Interface -----------------------

Marker interface is a empty interface which dont have any member variables and member methods, Marker interfaces
are present to just information that it is related to cloning or serialization
Ex : Cloneable , Serializable


---------------- Custom immutable class in java ---------------
1.Class should be final so it cannot be extended
2.Members should be private(scope is limmited) and final so once it is assigned it cannot be changed
3.varibles should be initialized in constructor so it cannot be reassigned since it is a final varibles
4.Avoid setter methods in this Custom immutable class
5.If calss has mutable objects then only return copy of objects so that it will be immutable

final class ImmutableClass {
		
	private final int number;
	private final String str;
	private final List immutableList;
	
	public ImmutableClass(int number , String str,List immutableList) {
			this.number = number;
			this.str = str;			
			if (immutableList != null) {
	            this.immutableList = new ArrayList<>(immutableList);
	        } else {
	            this.immutableList = new ArrayList<>();
	        }
	}
	
	public int getNumber() {
		return number;
	}
	
	public String getStr() {
		return "peter";
	}
	
	public List getImmutableList() {
		return new ArrayList<>(immutableList);
	}
	
	
	
}

----------------- Default methods in Object class ----------------
1.clone method
2.equals method
3.finalize method
4.toString 
5.hashcode
6.getClass
7.notify
8.notifyAll 
9.wait

--------------------------- Spring Boot --------------------------------
1.Spring uses RAD(Rapid application Development) --> Which is the modification of waterfall model with doing 
things effectively and in fast manner
2.It can make standalone applications with inbuild embedded server like tomcat and jetty

-------------- Why Spring-Boot over Spring ----------------
Mainly Spring-boot has auto-configuration and embedded tomcat server over Spring which makes spring-boot a 
loozely couppled application

1.When we are using Spring we need to configure multiple dependencies which are auto generated in Spring-Boot
with out few dependencies like Spring-Boot-Starter-web , Spring-Boot-starter-data-jpa
2.Versioning are mandatory for every spring dependency but we can configure version in parent class in Spring-Boot
3.In Spring we need to do xml based configuration for database configuration and table creating but in Spring-Boot
we can do it simply in applcation.properties file 
4.With spring we need to deploy the war file manually in a custom server but it Spring-Boot we have embedded
tomcat server by default which can generate the build easily and will deploy the build automatically in tomcat 

-------------- How Spring-Boot Application Run internally --------------------------------
When we run the spring-boot application with help of plugins (mvn spring-boot:run) it wont create a build in target
file instead it will compile the classes and run the source class in the target.
 
When we run the spring-boot application with (maven package/clean install) their will be a jar developed in target folder
,If the jar is extracted we will get meta-data(Manifest) file where we will get full information about the path of the main 
class and version of spring-boot other details From there the spring-boot application runs

------------- Dependencies worked on --------------------------------
1.Spring boot Starter Web --->Starter Dependency for creating mvc Structure and for auto-configuration and embedding server
2.Spring boot Starter data Jpa(ORM like Hibernet) --> Starter dependency(spring boot data) and want to 
connect to data base and do crud operations
3.Spring boot starter security ---> To implelement security for this standalone application
4.Spring boot ModelMapper ----> Data mapper from one class to another
5.Spring boot data jdbc---> Which provides the higher obstraction layer for data base connection(Spring boot data) 
6.Spring boot sql connector ---> For connecting to sql database 
7.Spring boot starter mail ----> Utilized to send email through Spring boot

-------------- @SpringbootApplication annotation ------------------------

@SpringbootApplication ---> 1.@EnableAutoConfiguration
                            2.@ComponentScan
                            3.@SpringBootConfiguration(@Configuration)

@EnableAutoConfiguration ---> Enables the dependencies to download jar files and configure it when running application
@ComponentScan  ----> By this annotation it will execute the multiple annotations like @Entity @Repository @Services
to the specified package (Root package).
@SpringBootConfiguration(@configuration) ---> Specifies as one of the classes and execute when the 
application is running like Enabiling security and swagger for the application

----------------- Auto Configuration in spring-boot --------------------------------
When we run the spring-boot application there will be some classes which will run automatically like aopconfiguration
(Aspect-Oriented Programming : To keep the code like loozly coupled)and some of the class will be run depending on the 
dependencies which are added like if we add jpa and jdbc dependencies there will be some condition like adding some
properties in application.properties file

And we can also exclude some of the classes in application.properties file with excludes command


--------------  How run() method internally work --------------------------------
Internally when run() method calls in spring-boot application it will search and load all environment variables files
1.loads application.properties files
2.create a context for the application
3.loads the created beans in the created contex
4.And kick starts the embedded server (Tomcat server)

----------------- Command line runner --------------------------------
It is a interface which has run method that we can implement to our main class so we can implement the run
method and we can do pre-processing things like connection to database can be done in this run method

Stereotype Annotation: 
Specifically Spring-boot has some stereotype annotations :
@Component : This is the parent interface for all stereotype annotations 
1.@RestController --> Has web based logic like to right custome success class and error classes
2.@Service ---> Has business based logic 
3.@Repository ---> Interact with database and write queries 
4.@Entity ---> Properties that need to be there in one db sechema and its configuration

Bean : Bean is a kind of object which is manages by applicationcontext , Applicationcontext will be created 
when starting the sprin-boot application

We can create beans by giving annotations to classes @Component , @RestController etc.. and also we can 
create a class for that we can annotate it as @Configuration and we can create a method so that method wil
returns the object and we need to annotate it with @bean annotation
 @Bean
    public MyBean myBean() {
        return new MyBean();
    }


Dependency Injection : In Spring boot we have a annotation called @Autowired which will create a object for 
the class instantly,This is the concept of spring-boot which makes it loozely coupled 
Without using @Autowired we can only create a object with the help of new operator which is tighlty coupled
When we change the name of the class then it will become harder to correct in the project.

We can also create dependency injection with other 2 types like
constructorDependency  Injection : Need to set the object for a property
1.Need to select this Dependency injection when  there should be mandatorly need of that class object
2.When we assign the di to a variable then it is immutable 
3.@Autowired is not required for this DI
4.Dependency will inject in constructor.
5.This is a common and often preferred method because it ensures that the class has all its required
dependencies at the time of instantiation
6.Circular dependency cannot be solved

SetterDependency Injection : Need to set the object for a property
1.Need to select this Dependency injection when  there should be not mandatory requirement of DI object
2.When we assign the di to a variable then it is mutable,SDI allows for more flexibility, as dependencies
can be changed or updated after the object has been instantiated. 
3.@Autowired is  required for this DI
4.Dependency will inject in setter method
5.Circular dependency can be solved with @Lazy

@Postconstruct : When we put this annotation to a method that method will run when starting the application
it will call when the SpringApplication.run is called after this method executing then the run method from
the Command line runner interface will be executed
We can use this annotation while connecting to database pool and it will used when populating data to database

@value("${envi_name}") : With this annotation we can load the variable from the environment file with the 
environment variable name. This can also be done by dependency injection of environment and using getProperty()
method

Bean Dependency Ambiguity : we get bean dependency ambiguity when we use dependency injection to inject
a interface where that interface is implemented to two classes like 
demoserviceI.interface
demoServicesImpl1.class implements demoserviceI
demoServicesImpl2.class implements demoserviceI
Here we get bean dependency ambiguity , It can be resolved with @Qulifier("demoServicesImpl1") annotation 
and @Resource(name="demoServicesImpl1") 

-----------------Bean scope -------------
Bean Scope is the details of the when the bean is created and destroyed and lifecycle of the bean 
We can scope for the bean with @Scope annotation
types of bean scopes are 
1.Singleton : This is default bean scope for a bean, Only one instatnce is created for the bean
2.Prototype: Every time new instance is created for the bean while object is created
3.Request: New instance is created when we request a http request after the processing it will typically distroyed( Only in Web-based application )
4.session : A new instance is created when a session is created and destroyes when it ends( Only in Web-based application )
5.Application: It create a only single bean instance per Application( Only in Web-based application )
6:WebSocket: It create a only single bean instance per Web-scoket

Examples of Singleton scopes:
1.Configuring database connection : Database connection will be done in one instance then we can use singleton
scope
2.Application Configuration : Application configuration will be done in one instance then we can use singleton scope

Examples of prototype scopes:
1.Uses when a new session is created
2.For every thread we can create a instance by prototype scope (Thread saftey)

When we use inject a singleton bean instance into a prototype bean instance then the prototype instance means
multiple instance wont be created won't be created, it will be created a singleton instance 
We can mitigate this by using ObjectFactory and calling getObject() by using this ObjectFactory instance
and then for every time the instance will be created like prototype instance

--------------------Spring Singleton vs plain singleton--------------
Spring Singleton will give instance per every application context in spring-boot application.
If we create have two application contexts then there will be two Spring Singleton instances but for plain singleton
the object instanciated be will done per every jvm 

-------------------  BeanPostProcesser  -------------

BeanPostProcesser is a interface which has two methods like PostProcesserBeforeInnitilization and PostProcesserAfterInnitilization
These 1st method will trigger when before the bean creation and 2nd method will trigger when after bean creation
use cases are:
1.If we need to add some properties while creating of bean the we can add it in BeanPostProcesser
2.logging and monitoring properties before bean initialization and after bean initialization

@RequestMapping : parent interface for the below annotations
@GetMapping : for Retriving
@PostMapping : for Submitting
@PutMapping : for updating
@PatchMapping : for partial updating
@DeleteMapping : for deletion

@PathVariable : 
1.Need to give the value in url need to configure like GetMapping("search/{path_varibale_name}") need to put
path
2.It is mandatory if not we will get 404 error
@RequestParam : 
1.Need to mention @RequestParam(value:"product_name",required:false/true)
2.Then it is not mandatory to give requestparam, Even though we will get some response
3.ex : search?product_name='iphone'

@RestController : If we define a method as @RestController then it will send return what we are returning 
1.internally RestController uses @Controller and @ResponseBody annotation 

@Controller : It we use only @Controller annotation it expects that we are returing a view page like html
then if it not founds the view page in code it will give 404 error
We can change this by adding @ResponseBody annotation and giving another parameter produces in 
Controller annotation
*@Controller and @RestController is part of Spring MVC framework

@RequestBody : With this annotation we can deserialize the request json to object 
1.We need to use this annotation at the post and put requestMappings 

We can also use PostMapping for both insertion and updation it will work but it is only recommended to use 
postMapping for creation and only use putMapping for updation in rest-full services 
the difference is when we use post every time it will create a record but when we use putMapping for only updation.
PutMapping id Idompotent but PostMapping id not Idompotent

With the GetMapping annotation also we can keep a RequestBody annotation in the method paraments it will work
but it is not a recommanded practice.

400 : Bad Request
401 : Unauthorized
403 : Forbidden
404 : Not Found
405 : Method Not Allowed
415 : Unsupported Media Type
500 : Internal Server Error
502 : Bad Gateway
200 : Ok
201 : Successful inserted

*We can give custom status codes like  @ResponseStatus(HttpStatus.CREATED) for postMapping request

*We can give cross-origin to a controller at the top of the class with @CrossOrigin(origins="*") or we can 
create a class like configCross and we need to implement the class with webMvcConfigurer and need to override the
addCorsMapping with our own implementation

*Thyme leaf dependency is for sending html pages in a response body or for rendering the pages we need to use 
this dependency

*With the help of MultiPartFile data is used to upload the file to server


*/