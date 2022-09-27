function average(num1,num2){
    let sum = num1 + num2;
    let avg = sum/2;
    return avg;
}
console.log(average(10,2));
function average2(num1,num2){
    let sum = sumNums(num1,num2)
    let avg = sum/2;
    return avg;
}
function sumNums(num1,num2){
    return num1 + num2;
}
console.log(average2(10,2));