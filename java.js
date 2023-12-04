/* 
             ======================  Java  ====================
            
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
Final ----> variable , method or class can give this key word is final 
Finally --->Finally block is executed with the try and catch block , This finally block will be executed for sure
Finalize ---> Finalize method is called when jvm called the garbage collector and it will clean the things up
with the help of finalize 

----------------- Access Specifiers -------------

Private ----> Members declared as private can be accessed with the class only
default ----> Members declared as default it can be accessed with in the package only 
protected ---> Members declared as protected can be accessed with in the package by child classes of outside package
Public ----> Members declared as public it can be accessed from anywhere from any other class also

----------  Constructors ----------------
1.No arg constructor
2.Parameterized constructor
3.Default constructor
Constructors are used to intitialize the object ,When a object is created some variables are initialized
If there is no constructor created manually then compiler will create a new default constructor , if a constructor 
is present then the default constructor wont be created , Main purpose of the constructor is to initialize
the object, At the first line of the constructor there will a super() it will call the parent constructor 


*/