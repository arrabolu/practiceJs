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

    AOT compiler converts the TypeScript file into JavaScript files,Initially when are building the application
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

Http Interceptors are commonly used to intercept the request and response and provide

*/
