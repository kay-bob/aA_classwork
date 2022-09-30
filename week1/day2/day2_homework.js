function isOdd(num2){
    return (num2 % 2 !== 0);
}

console.log(isOdd(3));

//function plusFive(num1){

//function threeOrSeven

//function hello(str){



//function yell(string)

// function whisper(string)

//function isSubstring(searchString, subString)

//function echo(string)

//function isEven(num)

//function averageOfFour

function sayHello(name) {
    var msg = 'Hello, ' + name + '. How are you?';
    return msg;
  }
  
  console.log(sayHello('bootcamp prep')); // feel free to change the string being passed

  function checkNumber(num) {
    if (num > 0) {
      return 'positive';
    } else if (num < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
  
  console.log(checkNumber(5)); // feel free to change the number being passed
  