/* 

==================== Agile Methodolagy ================================

* In this  Agile Methodolagy large project is divided into small chunks will be included in continuous
integration and continuous development where there is no downtime where there is no downtime for the deployment
* we can deliver the delivarables frequently with no delays
* We need to communicate to the client paralley what we are doing 
* One step is not dependent on the another step in this Agile Methodology
* where in WaterFall model there will be downtime for the deployment one step is dependent on another step
* Agile is popularly used in may companies

  Requirements gathering --> System Design --> Coding   --> Testing --> Deployment 

        ====================== Resolver =================

resolve is a interface which is implemented to a created resolver class cli provides the command to 
create a resolver 
    The main use of the resolve we configure the resolve at the route level and when the resolve 
return true then only it navigates to the route , Here Without using resolve generally we put the 
api calls in the oninit and we expect it will get data after navigating to the component, unlike to 
resolve , we will add a resolve object to the route when the promise is resolved then it will route will
be navigated

============== JIT(Just In Time) vs AOT(Ahead of  Time)=============
    We have two types of compiliers in angular those are JIT and AOT , By default Aot is set as true 
from the Angular 9  pre Angular 8 it was using JIT 

    AOT compiler converts the TypeScript file into JavaScript files,Initially when we are building the application
TypeScript files are transpiled into JavaScript files at that time compiler checks(Scans) the code , also 
checks the type checking the build files are generated here, when we put this js files and assets files
in a server browser will download the files and directly renders the index.html, js  and css files , Here we are
not dowloading a compiler browser will just download the js bundles from the server

    JIT , Here in Jit compilation will not happen at the time of build , at the time of build it just traspiles
the ts files to js files and there will be a index.html file with the css files, after puting these files 
into server browser will downloades all the js files with the index.html along with the compiler 
browser will only compiles the mandatory files, If in case browser need to navigate to another component ,
browser interpreter will compiles the js files in just in time,

    ======================== Http Interceptors ============

Http Interceptors are commonly used to intercept the request and response and can manipulate the response
or request sending to server , In App module we need to add provides http interceptors , Useclass which is 
the created interceptor and need to keep multi : true it intercept multiple requests

            ======================== Observables ===============
    Observables are stream of data which will sent from a asynchronous method ,When a Observer subscribes to
the data stream it we can use the data , We can create a new Observable and there will be a callback 
to it and with the help of next() method the values will be sent to the observer / Subscriber to the observable 
three methods 1 next() , error() , complete() , and by using subscribe() we can subscribe to observables
The difference between the observable and Promise, Observables will emit stream of data it like in a 
continuous manner but in promise it will send a data when it is resolved or rejected , At the time of
creating the promise we use resolve and reject mehtods in the promise constructor calling the promise
we can use .then() , .catch() and .finally() , Here it is at the place of taking the promise and 
at observables the methods are at the creation of the Observable

Subject is a special kind of Observable which can act as a observable and observer at the same time
The Main deference between the Subject and observables is that subject will multicast and observable
will only unicast the stream of data which means At one particular time Observable will only send data 
to another node , but subject will send the data to multipule nodes at one particular time
Types of Subject BehaviourSubject, ReplaySubject and AsyncSubject 
        
================ SSO (Authorization code flow ) =================
    When we go to Service Provider page it will be redirected to Identity Provider login where it will 
generate a saml based authentication it checkes whether the creadentials are valid are not if it is valid
it will give a code in the url Which is (Authurization code) with the help of the code we need to call again
IDP (Okta for example) for accesstoken with the authorization code , redirect url , sso login clientid and 
client secret then we can get access token , id token and refresh token and its validity , then we can 
call apis with the given access token this is the authorization code flow in oAuth2.0 


        ========================== Component =================
Component is a Directive and also called as Building block of a angular project , where it consists of .html and .css files and .ts files
combined together in ts file for every component it has a decorator (Componnet decorator) in which we will
pass a matadata of selector tag , templateUrl , and providers array 

         ================ Providers =================

Providers array can be used in the decorators like component , NgModule where when we what to Use a 
Service in a component the we need to add the service in the providers array , When we add the providers 
array in the modular level and add a service to it, it will provide the service to whole project 

it will be stored as {provide : serviceNmae , useClass : serviceName },

we can also use the injection tokens in app module where we create a object with injectionTokens and declare in providers array ,

We can use the injection tokens with @Inject('Token_name') in constructor where we need to inject the service 

In a component we can also inject a service with another way like @inject('ServiceName') 
We can also pass the data form one componnet to another by use of services by emitting the data and subscribing 
 it to the eventEmmiter varibale  in a componnet where we need the data.
 

 ============== Pipes ===============
 With pipes we can trasform the data from one form to another , It is one of the powerful feature of the 
 angular We can create a pipe with ts class we need to annotate with @pipe and in metadata we need to pass the 
 name of the pipe and by default pipes are pure pipes , We have some inbuild pipes in angular like date
 pipe , Currency pipe , lowercase pipe , and uppercase pipe etc , When we create a custom pipe we need to 
 declare in app module and we need to implement pipeTransform object to the custom pipe and there we can 
 override the trasform method , Generally we have two kind of pipes Pure and impure pipe 
 When there is a pure change in the element then only the pure pipe is called , so the pure change is 
 change in the variables or premitive type variables(like Number , string , boolean )
 , When there is a change in referance of referance type(like objects or arrays) changes   it will be considered 
 as a pure change ,If there is a change in property of the reference type it will be called as impure change
  here in order to handle the change we need to change the reference , so in this case pure pipe is not called
Angular generally recommends not to use the pipes for filtering and sorting in application , ONly when we 
handle the impure change we can use it for filtering and sorting , We can make a pipe to impure by 
keeping the pure property in metadata to false , The disadvantage of the impure pipe is it will call for 
every change detection cycle and it will effect the application performance in a high manner
There is another pipe to handle the asynchronous call this is called as async pipe it will show the data
after the promise resolved or observable is subscribed


============= Directives =============================

There are 3 directives in Angular which are 
1. Structural directives --> Where we can change the dom structure with this directive like *ngFor , *ngIf , *ngSwitch
2. Atribute directives ---> Where we can change the Appearance and behavior of the dom with modifing the dom attributes
Ex : ngClass and ngStyle directives , ngModel
3. Component directives ---> Componnet Directives are the important directives , with out component directives 
we cannot create a angular project 

isClassApplied = true 
whiteColor = white

Ex : [ngClass]= "{ 'margin-top-4' : isClassApplied }" --> ngClass can add or remove the styles for any dom element dynamically
Ex : [ngStyle] = "{'color': whiteColor }" --> ngStyle can change the behaviour dynamically it can change the color when there is 
a differenrt use loggined

Building blocks of angular --> Services , Modules , components , templates, metadata, data binding , directives and dependency injection

Life cycle hooks of Angular (8) --> 
constructor ngOnChanges, ngOnInit, ngDoCheck , ngAfterContentInit, ngAfterContentChecked , ngAfterViewInit, ngAfterViewChecked, ngOnDestroy

Angular modules always load eagerly but with the lazy loading concept only the modules will load when the route 
is called 


<----------------one-way-data buinding------------>

data comming from component file to template file(Ui file) is called one way databinding

string interpolation and property binding [] --> componnet file to template file
Event binding () ---> template file to component file 


<------------Renderer 2 -------------->

Renderer2 is a class which allow us to do dom manipulation without accessing dom elements directly
, Usually this Dom manipulation will be also done by ElementRef class in angular with use of nativeElement method
on it when we use like this (Dom manipulation is not a good practice) it will bypass the sync between 
component class and templete class and if we do dom manipulation this app will not work in serverside
and also in desktop apps and mobile apps and it might provide access to XSS vulnerabilities
But we can still manipulate Dom with Renderer 2 which will provide an abstraction layer between component
code and dom element 

<------- @Input Decorator / custom property binding and @Output decorator/ custom event binding---->
input and output decorators are only used in child component when data is passing from child to parent 
or parent to child , When we are passing from child to parent we need to emit data by event emitter 
and need to bind the event emmiter variable with event binding and when we are passing data from 
parent to child we need to use custom property binding 

<------- Html Template Reference variable ------->
Template reference varibale is we can refer a dom element with a reference which will be starting with 
"#SampleTemplateReference" and we can pass that template reference with any event emiting 

We can also put template reference to a component and we can do datatransfer from child to parent component
and with sibling componnets, But the reference of the template will be only passed when there is any
event bindling 

<------------- @viewChild() -------------->

viewChild is used to take the reference of a html element , It will directly pass the html template reference
from the html class to ts class , for a variable we need to decorate with @viewChild('SampleTemplateReference')
and first property will be the element reference , the type of the variable will be ElementRef
With the help of viewChild we can pass value from child to parent and need to use custom property binding
and @input decorator to again pass it from parent to child

ViewChild('')
The defination will be with the help of viewChild it will query the template reference from the html file
and will give to ts file directly  

*/
