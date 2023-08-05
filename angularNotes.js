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
three mthods 1 next() , error() , complete() , and by using subscribe() we can subscribe to observables
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



*/
