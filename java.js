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
               -------------------------------------------
               |                  |                       |
               List(I)          Queue(I)               Set(I)     Map(I)

List : (java.util.List)
1.It will allow duplicate values to store
2.Access the items easily with indexing
3.Contains ordered elements
4.Elements can easily inserted with respect to the position

Set : (java.util.Set)
1.It will not allow duplicates values
2.Set don't have ordered elements, So searching and inserting is not done by index based

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

*/