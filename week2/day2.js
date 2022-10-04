catBuilder("whites", "black", "barbie");
function catBuilder(name, color, toys) {
    let cat = {
        name : name,
        color : color,
        toys : toys
    }
    return cat; // call object
}
console.log(catBuilder("whites", "black", "barbie"));

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num[i] === 0) {
            return false;
        }
    }
    return num;
}

function laligetSum(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {       // isPrime is Helper function
            sum += i;
        }
        return sum;
    }

}
console.log(laligetSum(17));

let dog = {
    'name' : 'a',
    'toys' : 'ball'
}
dog['name'] = 'joel';
console.log(dog['toys']);
console.log(dog.name);
let test = 'name'; // test is assumed as string
console.log(dog[test]);
console.log(dog.test);// undefined bcoz it is looking for 'test' key