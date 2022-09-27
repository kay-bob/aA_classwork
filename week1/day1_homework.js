console.log(4 + 4 /2);
console.log((2 + -7) * 3);
console.log(101 % 10);
console.log(12 - 4 % 3);
console.log(true && false);
console.log(true && !(false || false));
console.log('cat' + 'dog');
console.log(2 + 'pizza');
console.log(2.5 * 'fish');
console.log(5 >= 11);
console.log(5 === 5.0);
console.log(7 !== 7.1);
console.log(5 + 5 > 8);
console.log(6 + 6 !== 12);
console.log(2 > 1 || false);
console.log('true' === true);
console.log(10 % 2 === 0);
console.log(21 % 2 === 0);
console.log(21 % 2 !== 0);
console.log(21 % 2 === 1);
console.log(12 % 3 === 0);
console.log(9 % 3 === 0);
console.log(14 % 3 === 0);
console.log('new york' [0]);
console.log('new york' [1]);
console.log('san franscisco' [2 * 3]);
console.log('bootcamp' [3].toUpperCase());
console.log('bootcamp'.indexOf('T'));
console.log('bootcamp'.indexOf('camp'));
console.log('bootcamp'.indexOf('0') > -1);
console.log('science'.indexOf('x') === -1);
// 1
var idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // ?
idx * 2;
console.log(idx); // ?
// 2
var num = 33;
var isEven = num % 2 === 0;
console.log(isEven); // ?
console.log(!isEven); // ?
// 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); // ?
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // ?
var char = str2[num].toLowerCase(); // ?
console.log(char + '!'); // ?
// 4
var sentence = 'welcome to bootcamp prep';
var lastChar = sentence[sentence.length - 1];
console.log(lastChar); // ?
console.log(sentence.indexOf(lastChar)); // ?
// 5
var age = 30; // try different numbers here

if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}
// 6
var str = 'pizza'; // try different strings here

if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}
// 7
var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
// 8
var num = 15; // try different numbers here

if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}
// 9
var str = 'goodwill store'; 
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}
// 10
var num = -39; 

if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
var num = 15; 
if (num > 5) {
  console.log('if');
}
var num = 4; 
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}
var num = 2; 
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}