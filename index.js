const name = "peter";

function reverseString(name) {
  console.log(name.split("").reverse().join(""));
}

reverseString(name);

let substrings = [];

function subString() {
  for (let x = 0; x < name.length; x++) {
    for (let y = 0; y < name.length; y++) {
      let char1 = name.charAt(x);
      let char2 = name.charAt(y);

      let result = char1.concat(char2);

      if (!substrings.includes(result)) {   
        substrings.push(result);
      }
    }
  }
  console.log(substrings);
}

subString();





function* generateIds(){

  let id = 1;

  while(true) {
      yield id
      id++;
      if(id == 15){
          break;
      }
  }

}
 
const generatorObject = generateIds();

console.log(generatorObject)


let worldCup = function (country,caption){
  this.country = country;
  this.caption = caption;
 
}



let india = new worldCup('india','rohit')
let Newzealand = new worldCup('Newzealand','kane')
let Australia = new worldCup('Australia','cummings')

console.log(Australia)
console.log(Newzealand)
console.log(india)

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid

console.log(myObject)