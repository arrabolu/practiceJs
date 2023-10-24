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

/* const array1 = [20,30,40,1,3,5,222,2,20,30,222,2,2,2,2,2,1,1,1]

 function removeDuplicates(array) {

    let unqArr = []

    array.forEach((num)=>{
        if(!unqArr.includes(num)){
            unqArr.push(num); 
        } 
    })
    return unqArr
 }
 */


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

/*             // 1st Question 

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

console.log("simpleFunction",simpleFunction(strings, caps)) */

// import fs from "fs";

// fs.readFile('"C:\Users\Saivinay.A\Desktop\Test Users DVR and GTG.txt"', 'utf8', (err, data)=>{
//     if(err) throw err
//     console.log(data.toString);
// });

/* function callApi(callback){
    callback()

    eventHandle(callback1)

    
} */

/* const  callback =  function(){
    fetch('https://dummyjson.com/products')
    .then(res =>{
       return res = res.json()
   }).then(data =>{
    console.log(data);
   }).catch(err =>{
    console.log(err);
   })
} */

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
 /*    const result = ""

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

} */
/* 
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
 */

// console.log(Promise.all([promise1,promise2,promise3,promise4]),"Promise.all([promise1,promise2,promise3,promise4])");

/* 
let promise = new Promise((resolve,reject)=>{
    console.log("This message before the promise is resolved")
    resolve("Hello this promise is resolved")
})

console.log("Before calling the promise");
promise.then((result)=>{
        console.log(result);
})

 prom1 = new Promise(()=>{

 },()=>{

 });
 */


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



let sentence = "hello hello world";

subCount('hello')  // indexOf('hello')

function subCount(substring){
    let substringCount = sentence.split(" ").filter((subs)=>{
        return subs == substring
    }).length

   console.log(substringCount,"substringCount");
}

function subCountByIndexOf(substring){
    let index = sentence.indexOf(substring)

    let count = 0

    while(index !== -1){
        count++;
      index =  sentence.indexOf(substring, index+1)  
    }
    
    console.log("subString count for sentence: "+ sentence +"is "+ count);

    // for (let i = 0; i !== -1 ; i++) {
    //    count++;
       
    //   let index = sentence.indexOf(substring,index + 1)
        
    // }

    
}

subCountByIndexOf('l')

function capFirstLetters(){
        let array = sentence.split(' ')
     let result =  array.map((substring)=>{
           return substring.charAt(0).toUpperCase().concat(substring.slice(1))
        }).join(' ')
        console.log(result);
}                                               

capFirstLetters() // charAt(0).toUpperCase() + slice(1)

function removeSpaces(){
    let wordsArray = sentence.split(' ')
    let result = wordsArray.map((word) =>{
        return word.trim()
    }).join('')

    console.log("Removed blank spaces from the sentense: "+result);

}

removeSpaces() // trim()


function checkForPalindrome(){
    let arrayOfWords = sentence.split('')

    let palindromSentense = arrayOfWords.reverse().join('')

    if(palindromSentense.toLowerCase() == sentence.toLowerCase()) console.log("sentence is palindrom");
    else console.log("sentence is not palindrom");
}

checkForPalindrome()  // split() + reverse() + join()



let firstname = 'John ';
let lastname = 'Doe';

console.log(firstname.concat('   ', lastname));   

let count = 0
function calculateStrLength(){
   firstname.split('').forEach(element => {
    count++
   });
}
calculateStrLength()  
console.log(count);


function findLongestWord(sentence){
    const wordsArray = sentence.split(' ')
  let longestWord =  wordsArray.reduce((acc, word) =>{

    // console.log(acc.length);
    // console.log(word.length);

        if(acc?.length < word.length){
            acc = word
        }
        return acc

    },' ')

    console.log(longestWord, "findLongestWord");

}

findLongestWord('manchester united Realmadrid barsalona') // split() + reduce()

function encriptWithShift(word,shiftCount){

    let transformedWord = '';

    for (let i = 0; i < word.length; i++) {
        
       let unicodeVal =  word.charCodeAt(i) + shiftCount

       let toCharacter = String.fromCharCode(unicodeVal)

       console.log(toCharacter);

       transformedWord = transformedWord + toCharacter 

    }
    console.log(`Normal word -------> ${word} , Encripted word -----> ${transformedWord} with shift count ${shiftCount}` ); 
    
}   


encriptWithShift("helloworld",1) // charCodeAt() return unicode of a character + fromCharCode() return character from unicode

function isStringRotational(string1, string2) {
    if (string1.length !== string2.length) return false

    let checkString = string1 + string1

    if(checkString.includes(string2)) return true
    else return false 
}

const isStringRotationall = isStringRotational('abcd','bcda') // abc -> bca , cab

console.log(isStringRotationall);


let palandromeString = ''

for (let index = 0; index < sentence.length; index++) {
   let char = sentence.charAt(index)
   palandromeString =  char + palandromeString
}

console.log(palandromeString, "palandrome");

// anagram  abcd dcba 

 sentence = 'peach'
let  sentence1 = 'cheap'

console.log(sentence1.split('').sort().join(''), "anagram")

console.log(sentence.split('').sort().join(''),"anagram")

// ------------------aaabbbcc ----> a3b3c2---------------

let stringCom = 'aaabbbcc'


 stringCom = 'abbaabbcccccc'

function stringCompression(stringCom){ // aaabbbcc ----> a3b3c2
   
  let  charArray = stringCom.split('')

  let comStr = ''
  
    let currentChar = charArray[0]

    let charCount = 0

    for (let i = 0; i < charArray.length; i++) {
            if(currentChar === charArray[i]){
                charCount++
            }else{
                comStr += currentChar + charCount
                currentChar = charArray[i]
                charCount = 1
            }
    }

   let finalStr = comStr+currentChar+charCount
    
    console.log(finalStr);
}

stringCompression(stringCom)


name1 = "Ronaldo";

function isCharsUnique(name1) {
  let charArray = name.split("");

  let isEveryCharUnique = charArray.every((char, index) => {
    return index == charArray.indexOf(char);
  });

  console.log(isEveryCharUnique);
}

isCharsUnique(name1) 



function hideWordWithEllipsis(name){

    lastChar = name.charAt(name.length - 1)

   let padStartStr = lastChar.padStart(name.length, '.')

 let finalStr =  padStartStr.replace( '.', name.charAt(0))

    
  console.log(finalStr); 

}

hideWordWithEllipsis(name)

const strings = ['flower', 'flour', 'flourish'];

function longestCommonPrefix(strings){

   let firstString = strings[0]

   console.log(firstString);

  let x = strings.reduce((acc,ele)=>{
        if(acc.length > ele.length){
                acc = ele
        }

        return acc
   },firstString)

   console.log(x);

}

longestCommonPrefix(strings)


// helloworld ---> ifmmpxmsme

function implCipher(str,shiftCount){

    let EncriptedText = '';

    for (let i = 0; i < str.length; i++) {
        
        let unicodeVal = str.charCodeAt(i);

        unicodeVal = unicodeVal + shiftCount

      let Encriptedchar = String.fromCharCode(unicodeVal)

    //   EncriptedText += Encriptedchar

      EncriptedText = EncriptedText + Encriptedchar

    }

    console.log(EncriptedText);
}

implCipher('MY SECRET TEXT', 3 )


// myVariableName --> my_variable_name

function toSnakeCasing(camelCasingtext){
    let subString = ''
    let stringsArray = [];
    let lastfoundIndex = 0
    for (let i = 0; i < camelCasingtext.length; i++) {
        if(camelCasingtext.charCodeAt(i) < 97){
            
            subString =  camelCasingtext.slice(lastfoundIndex,i)
            stringsArray.push(subString)
            lastfoundIndex = i 
        }
        
        if(i == camelCasingtext.length -1){
            // console.log( camelCasingtext.slice(-lastfoundIndex));
            subString =  camelCasingtext.slice(lastfoundIndex, camelCasingtext.length)
            stringsArray.push(subString)
        }
    }

    // console.log(stringsArray);

   let transfromedArray = stringsArray.map((substring)=>{
        return substring.toLowerCase()
    })

    let resultantArray = transfromedArray.join('_')
    // console.log(resultantArray);

    return resultantArray
}

console.log(toSnakeCasing('myVariableName'));


// a,e,i,o,u  ----> Vowels 
// 

function countVowelsConsonents(str){
    let char = ''
    let vowelCount = 0
    let consonentCount = 0
        for (let i = 0; i < str.length; i++) {
               char = str.charAt(i)  

               if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
                vowelCount++
               }else{
                consonentCount++
               }
        }

        console.log(vowelCount);
        console.log(consonentCount);
}

countVowelsConsonents('aeiouereafgeageag')


function toTitleCase(str){
        let stringsArray = str.split(' ')

        let selectedStr = ''

        let resultentArray = []

        resultentArray =  stringsArray.map((str)=>{
          return  str.charAt(0).toUpperCase() + str.slice(1)
        })

      resultentArray =  resultentArray.join(' ')

        return resultentArray
}

console.log(toTitleCase('Hello world'));


function isStringRotational(str1,str2) {
    if(str1.length !== str2.length){
            return false;
    }

     if((str1 + str1).includes(str2)){
        return true;
     }

     return false;
}

console.log(isStringRotational('abc', 'abc'));


function sumOfArrayElements(array){
    let resultSum = 0;

    for (let i = 0; i < array.length; i++) {      
      resultSum +=  array[i]
    }

    return resultSum;

}

console.log(sumOfArrayElements([1,22,12,'abc','cded']));


function findMaxAndMin(array){

    let max = array[0]
    let min = array[0]

    for (let i = 0; i < array.length; i++) {
            if(array[i] > max){
                max = array[i];
            }

            if(array[i] < min){
                min = array[i];
            }
    }

    console.log("max value in this array is " + max);
    console.log("min value in this array is " + min);

    return max
}

console.log(findMaxAndMin([32,12,43,1,100]));

function reverseArray(array){
    let reversedArray = [];
    for (let i = array.length - 1 ; i >= 0 ; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray
}

console.log(reverseArray([1,22,12,'abc','cded']));


function removeDuplicates(array){
     let noDuplicates =  array.filter((num,index)=>{
            return array.indexOf(num)  == index;
        })

        return noDuplicates;
}

console.log(removeDuplicates([1,2,3,3,2,12,12,33,54,12,43]))


function  findDuplicates1(array){
    let resultantArray = [];

    for (let i = 0; i < array.length; i++) {

            if(!resultantArray.includes(array[i])) {
                resultantArray.push(array[i]);
            }
    }

    return resultantArray;
}

console.log(findDuplicates1([1,2,3,3,2,12,12,33,54,12,43]));


function findAverage(array){
          let sum =  array.reduce((acc, num)=>{
                return acc = acc + num;
            },0)

            return sum / array.length;
}

console.log(findAverage([1,2,3,4,5]));


function rotateArray(array, shiftCount){

    shiftCount = shiftCount % array.length;
   

    return array.slice(-shiftCount).concat(array.slice(0 ,array.length - shiftCount));

}

console.log(rotateArray([1,2,3,4,5], 1));


function filterEvenNumbs(array){
        return array.filter((num)=>{
            return num % 2 == 0;
        })
}


console.log(filterEvenNumbs([1,2,3,4,5]));


function flattenArray(array){
    return array.flat()
}

console.log(flattenArray([1,2,3,[4,5,6],5,23]));

function mergeArrays(arr1, arr2){
    return [...arr1 , ...arr2].sort();
  }
  
  console.log(mergeArrays([1,12,31,2,4], [1,12,2,31,1,31]))

  function MapAndModify(array){
    return   array.map((num)=>{
           return num * 2
       })
}

console.log(MapAndModify([1,232,2]))

function arrayRotationalCheck(array1,array2){
    if(array1.length !== array2.length){
       return false;
    }

    let stringConcat = array1.join('') + array1.join('')

   if(stringConcat.includes(array2.join(''))) {
       return true;
   }else{
       return false;

   }


}

console.log(arrayRotationalCheck([1,2,3,4,5], [3, 4, 5, 1, 2]));

function arrayIntersection(array1,array2){

   let resultantArray = [];

   for (let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])){
           resultantArray.push(array1[i])
        }
   }

   return resultantArray

}

console.log(arrayIntersection([1,2,3,99,23,11],[11,99,23,12,34]))


// function stringCompression(stringCom){
//     stringCom.split
// }

/* 
String methods 

1.substring(SI, LI)
2.slice(SI, LI)
3.includes('str')
4.concat('',string2)
5.padStart(requredLength,'attacher')  -----> ********9630
6.padEnd(requiredLength, 'attacher') ------> 4333********
7.replace('stringToReplace', 'newStringToReplace')
8.replaceAll('stringToReplace','newStringToReplace')
9.toUpperCase()
10.toLowerCase()
11.trim()
12.split(' ')
13.charAt(index)
14.charCodeAt(index)
15.fromCharCode(unicodeNum)
*/