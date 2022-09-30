let str = 'cat';
str[0] = 'x';
console.log(str);
let arr = ['hi',10,9,true,undefined,null,[1,2]];
console.log(arr);
console.log(arr[0]);
console.log(arr[6]);
console.log(arr[6][1]);
let fruits = ['apple', 'orange', 'pear'];
fruits.length;
console.log(fruits);
fruits.indexOf('pear');//2
fruits.includes('watermelon');//return False
fruits.push('watermelon');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('grape');
fruits.unshift('kiwi');
console.log(fruits);
fruits.shift();
console.log(fruits);
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(fruits.concat(numbers));
console.log(fruits);
console.log(numbers.slice());
console.log(numbers.slice(1));
console.log(numbers.slice(0,3));//0(first argument is inclusive) and 3(second argument is exclusive)
let string = 'hi my name is Zendaya';
console.log(string.split(' '));// return as array with space
console.log(numbers.join('---'));
for (let i = 0; i < numbers.length;i++){
    let ele = numbers [i];
    console.log(ele);
}
for(let i = numbers.length-1; i>0; i--){
    let ele = numbers[i];
    console.log(ele);
}

