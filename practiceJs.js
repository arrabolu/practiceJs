// Array methods 
phoneProducts = [
    {name : "Iphone",        origin : "US",         price : 1000},
    {name : "Realme",        origin :"china",       price : 100},
    {name : "Samsung",       origin : "South korea",price : 800},
    {name : "Oppo",          origin: "China",       price : 500},
    {name : "Nothing phone", origin : "UK",         price : 700},
    {name : "Asus",          origin : "Tiwan",      price : 500},
    {name : "Oneplus",       origin : "china",      price : 600},
    {name : "Redmi",         origin : "china",      price : 200},
    "iphone"
];

// console.log(phoneProducts)

// Filtering the products  == > return object

let filterProducts =  phoneProducts.filter((item,index)=>{
    if(item.price > 500){
        console.log(index);

        return item;
    }
})  
console.log(filterProducts)

// Map => creates a different array by comparing with calling array ==> returns a array

// let mapproducts = phoneProducts.map((item)=>{
//     item + 1
// })

// console.log(mapproducts)

// difference between map and filter
let numbers =[1,2,3,4,5,6,7,8]
mappedProducts = numbers.map((item)=>{
    item = item+1
    return item 
})
console.log(mappedProducts)

filternumbers = numbers.filter((item)=>{
    item = item+1;
    return item 
})

console.log(filternumbers)

//find method ==> finds the element and returns the 1st cought element ==> returns a object

let findNothingPhone = phoneProducts.find((item)=>{
   if( item.name == "Nothing phone"){
    return item;
   }
})

console.log(findNothingPhone)

//foreach ==> iterates inside the loop ==> no callback function

let findIphoneByForeach = phoneProducts.forEach((item)=>{
    if(item.price > 900){
       console.log(item)
    }

});

// console.log(findIphoneByForeach)

let indexofEight = numbers.forEach((item,index)=>{
    if(item == 8){
        console.log(index)
    }
})

numbers.forEach((item,index)=>{
    item = item * 2;
    console.log(item)
})


//some method ==> Return boolean,  true when there is atleast one object and false when it has zero elements

let issomePhones = phoneProducts.some((item)=>{
  return item.price >900 // only one phone is included
})

console.log(issomePhones)

// Every method ==> Retuns boolean, true when it should contain all elements false when contains one less element
 let isEveryPhone = phoneProducts.every((item)=>{
    return item.price >50
 })
 
 console.log(isEveryPhone) // All phones are included

 //Includes ==> returns boolean when the element is present
 let isIphoneIncluded = phoneProducts.includes( "iphone")
 console.log(isIphoneIncluded)


 //reduce
 let newNumbers = numbers.reduce((pre,item)=>{
   return  item + pre
 })

 console.log(newNumbers)




