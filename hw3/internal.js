//1
let numbers = [2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] === 4) {
        continue;
    }
}

while(numbers.length <= 3){
    if (numbers.includes(3)){
        continue;
    }
}

//2
for(let i = 0; i < 15; i++){
    if(i % 2 == 0) {
        console.log('even')
    } else console.log('odd')
}

//3
let arr = [];
function randArray(q){
    for(let i = 0; i < q; i++) {
        arr[i] = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
    }
    return arr;
}
                             
console.log(randArray(4));

//4
let a = Number(prompt('Enter integer a='));
let b = Number(prompt('Enter integer b='));

function raiseToDegree(a, b){
    if(Number.isInteger(a) === true && Number.isInteger(b) === true){
        let result = Math.pow(a, b);
        return alert('Result = ' + result);
    } else alert('Numbers are not integer!');
}

raiseToDegree(a, b);

//5
function findMin() {
    min = arguments[0];
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] < min) {
            min = arguments[i];
        }
    }
}

findMin(8, 1, -3, -6, 2);
console.log('Min: ' + min);

//6
let isUnique;
function findUnique(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i !== j) {
                if(arr[i] !== arr[j]){
                    isUnique = true;
                } else {
                    isUnique = false; 
                    break;
                }
            }
        } 
    }
    if(isUnique === true){
        console.log('Values are unique');
    } else {
        console.log('Values are not unique');
    }
}

findUnique([2, 5, -6, 4, 7, -6]);


//7
function lastElement(arr, quantityOfElements){       
    if(quantityOfElements > arr.length){
        arr.forEach(element => {
            console.log(element);
        });
    } else {
        for(let i = arr.length - quantityOfElements; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}

lastElement([2, 4 ,5 ,7], 3);


//8
let string = 'i love js';
let stringArray = string.split(' ');
for(let i = 0; i < stringArray.length; i++){
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
}
let newString = stringArray.join(" ");

console.log(newString);

