 /*
Array methods :
map()
filter()
find()
reduce()
includes()
indexOf()
forEach()
sort()
join()
splice(start, delete count,Elements to add)


const array1 = [20,30,40,1,3,5,222]

// includes
console.log(array1.includes(20));
console.log(array1.includes(40));

//indexOf
console.log(array1.indexOf(20) !== -1);
console.log(array1.indexOf(50) !== -1);

// find
console.log(array1.find(a => a === 20) != undefined)

//sort()
console.log(array1.sort());

console.log(array1.join(''));


// how to find anagram  
function findAnagram(string1, string2){ // 

   console.log(string1.toLowerCase().split('').sort().join(''));

   console.log(string2.toLowerCase().split('').sort().join(''));

    return (string1.toLowerCase().split('').sort().join('') === string2.toLowerCase().split('').sort().join(''))
}

console.log(findAnagram('worth','throw'));


// FInd duplicates in a array [1,22,3,45,6,1]
function findDuplicates(array){
    return duplicatNumbs = array.filter((currentNum,currentIndex)=> array.indexOf(currentNum) !== currentIndex)
}
const array4 = [1,2,3,4,6,5,1,3,6,7,89]


console.log(findDuplicates(array));





*/

const array1 = [20,30,40,1,3,5,222,2,20,30,222,2,2,2,2,2,1,1,1]

 function removeDuplicates(array) {

    let unqArr = []

    array.forEach((num)=>{
        if(!unqArr.includes(num)){
            unqArr.push(num); 
        } 
    })
    return unqArr
 }



/* //  console.log( removeDuplicates(array1));



 // Ronaldo is the goat --> odlanor si eht taog
   let  str = "Ronaldo is the goat"
    function reverseString(str){
           return  str.split(' ').map((str)=>{
                   return str.split('').reverse().join('')
            }).join(' ');
    }

    console.log(reverseString(str)); */

/* let str = 'hello'    // level ----> level

    function isPalandrome(str) {
        let string1 = str.toLowerCase(); 

     let string2 = str.toLowerCase().split('').reverse().join('')

        if(string1 === string2) {
            return true
        }
        else{
            return false
        }

    }

    console.log(isPalandrome(str)) */

 /*  function  count0Occerancess(arr,element){
        let count = 0
        arr.map((num)=>{

            if(num === element){
                count++ ;
            }

        })

        return count

    }

console.log(count0Occerancess([1,2,3,4,4,4,5],4));
console.log(count0Occerancess(['apple', 'banana', 'orange', 'banana'], 'banana'));




    function capitalizeWords(str){

        return str.split(' ').map((word)=>{
             return   word.split('')[0].toUpperCase() + word.slice(1)
        }).join(' ');

    }

    console.log(capitalizeWords("hello world")); */

//    let info = {
//     name : ' peter',
//     city : 'London',
//    }

//    let info2 = Object.assign({}, info)
//    let info2 = { ...info}

//    info2.name = 'USA'

//    console.log(info);

            // 1st Question 

function doubleTheNumbers(numbers){
    return numbers.map((num)=>{
        return num * 2 

    })
}

const numbers = [10,2,4,5,6,100]

console.log("Double the numbers ",doubleTheNumbers(numbers));

const strings = ['peter','johndoe','authur','tommy']

 function caps(str){

    return str.map((str)=>{
        return str.toUpperCase()
    })
}



console.log("Capitals",caps(strings));

function squareItSelf(numbers){
    return numbers.map((num)=>{
        return num * num
    })
}

console.log("squareItSelf", squareItSelf(numbers));


function filterEvens(numbers){
    return numbers.filter((num)=>{
        return num % 2 === 0
    })
}

console.log("filterEvens", filterEvens(numbers));


const people = [
    { name: 'peter', age:21},
    { name: 'Tommy', age:18},
    { name: 'John', age:41},
    { name: 'Author', age:22},
]

function getAdults(people) {
    return people.filter((peop)=>{
        return peop.age > 18
    })
}   

console.log("Only Audults",getAdults(people));


function stringsWithA(strings){
    return strings.filter((string)=>{
            return string.includes('a')
    })
}

console.log("stringsWithA",stringsWithA(strings));


function sumWithReduce(numbers){
    const button = document.createElement('button');
    button.textContent = 'hello';
    document.body.appendChild(button);
    return numbers.reduce((acc, num)=>{
            return acc += num
    },0);
}

console.log("SumWithReduce",sumWithReduce(numbers));


function findMaxValue(numbers){
    return numbers.reduce((acc, num)=>{
        if(num > acc){
            acc = num;
        }
        return  acc;
    },0)
}

console.log("findMaxValue",findMaxValue(numbers))

function concatinateAllString(strings){
    return strings.reduce((acc,str)=>{
            acc = acc+str
            return acc
    },'')
}


console.log("concatinateAllString", concatinateAllString(strings));

function doSomething(eating){
    eating()
}

doSomething(eating)

function eating(){
    console.log("I am eating chicken");
}

function simpleFunction(strings , caps){
   return caps(strings)
}

console.log("simpleFunction",simpleFunction(strings, caps))

// import fs from "fs";

// fs.readFile('"C:\Users\Saivinay.A\Desktop\Test Users DVR and GTG.txt"', 'utf8', (err, data)=>{
//     if(err) throw err
//     console.log(data.toString);
// });

/* function callApi(callback){
    callback()

    eventHandle(callback1)

    
} */

const  callback =  function(){
    fetch('https://dummyjson.com/products')
    .then(res =>{
       return res = res.json()
   }).then(data =>{
    console.log(data);
   }).catch(err =>{
    console.log(err);
   })
}

    // callApi(callback)
    
    // const  callback = async function(){
    //  let apicallData = await fetch('https://dummyjson.com/products')
    //      apicallData =  await apicallData.json()
    //      console.log(apicallData);
        
    // }


   /*  function eventHandle(callback1){
        callback1()
    }

    


    function callback1(){
        
            button.addEventListener('click',()=>{
                        
            })
        
    } */
    const result = ""

    const prom1 = new Promise((resolve,reject)=>{

        if(result){
            setTimeout(()=>{
                resolve("Promise resolved successfully")
    
            },1000)
        }else {
            setTimeout(()=>{
                reject("Promise rejected");
            },1000)
        }
    })

    prom1.then((res)=>{
        console.log("Prom1 ",res);
    }).catch((err)=>{
        console.log("Prom1 ",err);
    });


    function getProducts(){
      return  fetch('https://dummyjson.com/products').then((products)=>{
            return products
        }).then((products)=>{
            return products.json()
        }).then((result)=>{
            console.log(result);
        })
    }

    console.log("Get products",getProducts());


   


  document.getElementById('uploadFile').addEventListener('change', (event)=>{

    const file = event.target.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader();

    // Define what to do when the file is loaded
    reader.onload = (e) => {
      const fileContents = e.target.result; // The file contents as a string
      console.log(fileContents);
      // You can process the file contents here
    };

}

});

  let promise1 = Promise.reject("Sucessful 1");
  let promise2 = Promise.reject("Reject 1");
  let promise3 = Promise.reject("Sucessful 2");
  let promise4 = Promise.reject("Sucessful 3");

  Promise.all([promise1,promise2,promise3,promise4]).then((result)=>{
        return  console.log("Result1 all",result);
  }).catch((err) => {
    console.log("Error all",err);
  });

  Promise.allSettled([promise1,promise2,promise3,promise4]).then((result)=>{
    return  console.log("Result2 allSettled",result);
}).catch((err) => {
console.log("Error allSettled",err);
});


// console.log(Promise.all([promise1,promise2,promise3,promise4]),"Promise.all([promise1,promise2,promise3,promise4])");






let promise = new Promise((resolve,reject)=>{
    console.log("This message before the promise is resolved")
    resolve("Hello this promise is resolved")
})

console.log("Before calling the promise");
promise.then((result)=>{
        console.log(result);
})



// for (let i = 0; i < 5; i++)
// {
//     setTimeout(function() { console.log(i); }, i * 1000 );
    
// }

// function sum(a, b=0){
//     return a + b
// }

// function sum(...args){
    
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
    
//     (function (){
        
//     }())
    
//     myObject.func();