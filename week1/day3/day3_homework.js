// function logBetween()
//function logBetweenStepper
//function printFives
//function printReverse
//function sumNums
//function isFactorOf
//function fizzBuzz
//function isPrime
function printForwards(start, end) {
    for (var counter = start; counter <= end; counter++) {
      console.log(counter);
    }
  }
  
  printForwards(4, 11); // feel free to change the numbers being passed
  function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
      console.log(i);
      i--;
    }
  }
  
  printBackwards(-5, 6); // feel free to change the numbers being passed
  function func1(num) {
    return num + 50;
  }
  
  function func2(num) {
    return num + " bottles of beer on the wall";
  }
  
  function func3(num) {
    var x = func1(num);
    return func2(x);
  }
  
  var result = func3(5);
  console.log(result); // What does this print out?
  var foo = function(name) {
    return "Dance " + name + ", dance! "
  }
  
  var bar = function() {
    var str = "";
  
    for (var i = 0; i < 3; i += 1) {
      str += foo("Anthony");
      str += foo("Haseeb");
      str += foo("Winnie");
      str += " | ";
    }
  
    return str;
  }
  
  var result = bar();
  console.log(result); // What does this print out?
  
  function sayHiNTimes(n) {
    var i = 0;
  
    while (i < n) {
      console.log("Hi");
    }
  }

  function isFive(n) {
    if (n = 5) {
      return true;
    } else {
      return false;
    }
  }
