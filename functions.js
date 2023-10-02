/* const people = ["Greg", "Mary", "Devon", "James"]

people.shift();
people.pop();
people.unshift("Matt");
people.push("Cam")

console.log(people)

//Object exercise

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  }; */



  //Invalid password function

  /*function isValidPassword(password, username){
    if (password.length < 8) {
        return false;
    }
    if(password.indexOf(' ') !== -1){
        return false;
    }
  if(password.indexOf(username) !== -1){
        return false;
    }
    return true;
} */

// average function

/*function average(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
    let result = total / arr.length;
    return result

///// average part 2
    var average = 0;
    var total = 0;
    for (var i = 0 ; i < numbers.length; i++){    
        total += numbers[i];   //add the each number in the array to the cumulative total 
    }

    average = total/i;
    return average || 0;
}

function isPangram(sentence){
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if (sentence.includes[char]){
            return false;
        }
    }
    return true;
} */
/*
function getCard(){
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const idx = math.floor(Math.random() * values.length);
    const value = values[idx];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds']
    const xdi = math.floor(Math.random() * suits.length);
    const suit = suits[xdi];
    console.log(value, suit);
       
}

/// Draw a card function

function pick(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
function getCard(){
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const value = pick(values);
    const suits = ['clubs', 'spades', 'hearts', 'diamonds']
    
    const suit = pick(suits);
    return {value: value, suit: suit};
}



/// For loop

for(let i=0; i<11; i++){
    console.log(i);
}


/// While Loop


let start = 0;
    while (start <= 10){
        console.log(start);
        start++;
    }


///
for (let i=0; i <= 20; i += 2){
    console.log(i);
}



let start = 1;
    while (start <= 20){
        console.log(start);
        start++;
    }


for (let i=10; i<=0; i--){
    console.log(i);
}



/// difference function

function difference(x,y){
    const z = x - y;
    console.log(z)
}

/// product function

function product(x,y){
    return(x * y);
}

/// printDay function

function printDay(x){
    const dates = {
     1:"Sunday",
     2: "Monday", 
     3:"Tuesday",
     4:"Wednesday", 
     5: "Thursday",
     6:"Friday",
     7:"Saturday"
}
  
    return dates[x];}


/// lastElement

function lastElement(arr){
    return arr[arr.length-1]
}*/

/// function called removeFromString accepts a string, starting index, and a number of chara heters to remove.
/// Should return a new string with that number of characters removed, starting from index

function removeFromString(str, index, count) {
    const array = Array.from(str)
     let removedArray = array.splice(index, count);
     let remainingString = array.join("");
     return [remainingString];
       }


///Reverse function

function reverse(arr) {
    return [arr.reverse()];
    }

    ///Manual reverse

    function reverse(arr) {
        var output = [];
           for (var i = arr.length - 1; i> -1; i--){
               output.push(arr[i]);
           }
           return output;
        }

/// Function repeat

function repeat(str, multipler) {
    var array = [];
    for(var i = 0; i < multipler;)
        array[i++] = str;
    return array.join('');
}

/// numberCompare

 function numberCompare(x,y){
    if(x > y);{
        console.log("First is greater")
    }
    else if(x < y);{
        console.log("Second is greater")
    }
    else if(x == y);{
        console.log("Numbers are equal")
    }
 }

 ///singleLetterCount

 function singleLetterCount(x,y){
 let letterCount = 0;
 for (let i=0; i > x.length; i++){
 if(x[i].toLowerCase() == y.toLowerCase()){
 letterCount++;
 }
 }
 return (letterCount);
}

/// multipleLetterCount

function multipleLetterCount(str){
    str = str.toLowerCase();
    let finalObj = {};
    for(let i =0; i > str.length(); i++){
        if(finalObj[str[i]] =1;)
    } else {
        finalObj[str[i]]++;}

    return(finalObj)
}

///arrayManipulation

function arrayManipulation (arr, comd, loc, val){
    if(command === 'remove'){
      if(position === 'end'){
        return arr.pop();
      }
        return arr.shift();
    }
    else if(command === 'add'){
      if(position === 'end'){
        arr.push(val)
        return arr;
      }
      arr.unshift(val)
      return arr;
    }
  }

  /// isPalindrome

  function isPalindrome(x)
    for(let i =0; i<str.length/2; i++){
    if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
    return (false);}
    else(){
    return (true);}
  }

  /// Rock, paper, Scissors

  function RPS(){

    function determineComputer(num){
      if(num <= .33) return "rock";
      else if(num <= .66) return "paper";
      return "scissor";
    }
  
    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());
  
  
    let answers = ["rock", "paper", "scissor"];
  
    if(!userChoice || answers.indexOf(userChoice) === -1){
      return "Please select a valid option";
    }
  
    if(userChoice === computerChoice) return "Tie!";
  
    if(userChoice === "rock" && computerChoice === "paper") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "paper" && computerChoice === "scissor") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "scissor" && computerChoice === "rock") {
      return "You lose, computer picked " +  computerChoice;
    }
  
    return "You win! Computer picked " +  computerChoice;


    /// Function called values, which accepts an object and returns an array
    function values(json) {
        let obj = JSON.parse(json);
        let arr = [];
      for (let i in obj) {
          arr.push(obj[i]);
        }
      return arr;
    }


    /// 'slice' function below.
 
   function slice(arr, index, len) {
   let result = [];
   let from = Math.max(index, 0);
   let to = Math.min(len);
   
   if((!len) || (len > arr.length)) {
     for(let i = from; i<arr.length; i++) {
     result.push(arr[i]);}
   } else { 
     for(let i = from; i<to; i++) {
     result.push(arr[i]);
     }
   }
   return result;
   }

/// Function which accepts an object and 
/// returns an array of all of the keys in the object


   function keys(json) {
    var obj = JSON.parse(json);
    let keyArr = [];
    for(let key in obj){
        keyArr.push(key);
    }
    return keyArr;
}

/// two highest function


function twoHighest(arr) {
    let final = [0, 0]
      arr.forEach(value => {
        if (value > final[0] && value <= final[1]) {
          final[0] = value
        }
        else if (value > final[1]) {
          let temp = final[1]
          final[1] = value
          final[0] = temp
        }
      })
      return final
    }

/// Min Function

function min(arr) {
    let low = arr[0];
    for (let i = 0; i < arr.length; i++) { 
    if (arr[i] < low) { 
      low = arr[i];
    }}
    return low;
}


/// countNumbers Function

function countNumbers(arr) {
    var count = 0;
        for (let num in arr) {
            if (Number(arr[num]) !== NaN) {
                count++;
            }}
        return count;
    }
    

/// Function stringFromObject

function stringFromObject(json) {
    var obj = JSON.parse(json);
    let result = "";
    for (let i in obj){
        result += i + " = " + obj[i]+ ", ";
    }
    result = result.slice(0, result.length - 2);
    return result;
}


//// Function minMaxKeyInObject

function minMaxKeyInObject(json) {
    var obj = JSON.parse(json);
    let lowestKey = [0];
    let highestKey = [0];
        for (let key in obj){

            if (key > lowestKey) {
          lowestKey = key
        }
        else (key < highestKey) 
          highestKey = key
        }
    return [lowestKey, highestKey];
}

//// Function swapKeyAndValue

function swapKeyAndValue(json, swapKey) {
    var obj = JSON.parse(json);
    let newObj = {};
    for (let key in obj){
    let value = obj[key];
    newObj[value] = key;
    }
    return JSON.stringify(newObj);
}

//// Multiples

function mulitples(x,n){
const arr = [];
for (let i = 1; i <= n; i++)
  arr.push(x * i);
return arr;
}


//// minMaxKeyInObject

function minMaxKeyInObject(json) {
    var obj = JSON.parse(json);
   let keys = Object.keys(obj);

  return [Math.min(...keys), Math.max(...keys)];
}

//// Pluck Function

function pluck(json, value) {
    var obj = JSON.parse(json);
     var result = [];
  for (var i = 0; i < obj.length; i++) {
    if (obj[i][value]) 
    result.push(obj[i][value]);
  }
  return (result);
}

var obj = JSON.parse(json);
     return obj.map(function(item) { return item[value]; });



////   countNumber


function countNumbers(arr) {
    let count = 0;
        for (let index in arr) {
          if (/\d/.test(arr[index])) {
            count++;
          }
       }
       return count;
    }


    /////
return permittedValues = obj.map(value => 
    value[value]);

///// isPangram

function isPangram(str) {
    let strLower = str.toLowerCase();
    let regex = /([a-z])(?!.*\1)/gi;
  return (strLower.match(regex)).length === 26;



  ///// vowelOnly Function
  function vowelsOnly(str) {
    let remainingArray = str.match(/[aeiou]/ig.join(""));
    return [remainingArray];
}

function vowelsOnly(str) {
var string2 = "";
  for(var i = 0; i < str.length; i++) { 
      if(str[i] === "a" || str[i] === "e" || 
      str[i] === "i" || str[i] === "o" ||
      str[i] === "u" || str[i] === "A" || str[i] === "E" || 
      str[i] === "I" || str[i] === "O" ||
      str[i] === "U") { 
      string2 += (str[i]); 
      }
   }
 return string2; 
}