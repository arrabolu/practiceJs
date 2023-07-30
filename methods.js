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
*/


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


// FInd duplicates in a array
function findDuplicates(array){
    return duplicatNumbs = array.filter((currentNum,currentIndex)=>     array.indexOf(currentNum) !== currentIndex)
}
const array = [1,2,3,4,6,5,1,3,6,7,89]


console.log(findDuplicates(array));











