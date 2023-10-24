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
