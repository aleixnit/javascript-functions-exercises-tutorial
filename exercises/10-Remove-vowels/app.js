const rapid = (myString) => {
    // Your code goes here
    let newString = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < myString.length; i++) {
      let currentChar = myString[i].toLowerCase();
      
      // Comprobar si la letra actual es una vocal
      if (!vowels.includes(currentChar)) {
        newString += currentChar.toUpperCase();
      }
    }
    
    return newString;
  };

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
