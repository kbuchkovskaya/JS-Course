//1
let x = 1; 
let y = 2;  

let res1 = String(x) + String(y); 
console.log(res1);
console.log( typeof res1);

let res2 = String(Boolean(x)) + String(y);
console.log(res2); // "true2" 
console.log( typeof res2); // "string" 

let res3 = Boolean(x + y); 
console.log(res3); // true 
console.log( typeof res3); // " boolean " 

let res4 = x + y + NaN;
console.log(res4); // NaN 
console.log( typeof res4); // "number" 

//2
let a = prompt('Enter the number', '1');
if (a % 2 == 0 && a > 0) {
    console.log('Number is oven and possitive');
} else if ((a % 7) == 0) {
    console.log('Number is multiple of 7')
} else console.log('Other numbers')

//3
const arr = [];
arr.push(1);
arr.push('string');
arr.push(true);
arr.push(null);
alert('Number of elements: ' + arr.length);
arr.push(prompt('Add element to the array: ', '2'));
alert('Fifth element: ' +  arr[4]);
arr.shift();
alert(arr);

//4
let cities = [" Rome ", " Lviv ", " Warsaw "]; 
console.log(cities.join(' * '));

//5
let isAdult = prompt('How old are you', '18');
alert(isAdult >= 18 ? 'You have reached the age of majority' : 'You are still too young')

//6
alert('Triangle');
let firstSide = prompt('First side of triangle = ');
let secondSide = prompt('Second side of triangle = ');
let thirdSide = prompt('Third side of triangle = ');
if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
    alert('Incorrect data!');    
} else {
    let p = (parseFloat(firstSide) + parseFloat(secondSide) + parseFloat(thirdSide)) / 2;
    let area = Math.sqrt(p * (p - parseFloat(firstSide)) * (p - parseFloat(secondSide)) * (p - parseFloat(thirdSide)));
    alert('Area = ' + area.toFixed(3));
}
if (Math.pow(firstSide, 2) + Math.pow(secondSide, 2) == Math.pow(thirdSide, 2) || 
    Math.pow(secondSide, 2) + Math.pow(thirdSide, 2) === Math.pow(firstSide, 2) ||
    Math.pow(thirdSide, 2) + Math.pow(firstSide, 2) === Math.pow(secondSide, 2) ){
    console.log('Triangle is rectangular');
} else console.log('Triangle is not rectangular');

//7
let today = new Date;
let time = today.getHours();
console.log(time);
switch(time){
    case 23:
        alert('Good night');
        break;
    case 0:
        alert('Good night');
        break;
    case 1:
        alert('Good night');
        break;
    case 2:
        alert('Good night');
        break;
    case 3:
        alert('Good night');
        break;
    case 4:
        alert('Good night');
        break;
    case 5:
        alert('Good morning');
        break;
    case 6:
        alert('Good morning');
        break;
    case 7:
        alert('Good morning');
        break;
    case 8:
        alert('Good morning');
        break;
    case 9:
        alert('Good morning');
        break;
    case 10:
        alert('Good morning');
        break;
    case 11:
        alert('Good day');
        break;
    case 12:
        alert('Good day')
        break;
    case 13:
        alert('Good day')
        break;
    case 14:
        alert('Good day')
        break;
    case 15:
        alert('Good day')
        break;
    case 16:
        alert('Good day')
        break;
    case 17:
        alert('Good evening')
        break;
    case 18:
        alert('Good evening');
        break;
    case 19:
        alert('Good evening');
        break;
    case 20:
        alert('Good evening');
        break;
    case 21:
        alert('Good evening');
        break;
    case 22:
        alert('Good evening');
        break;
    default:
        alert('Hello');
        break;
    }

if (time == 23 || (0 < time && time < 5)) {
    alert('Good night');
} else if (5 <= time && time < 11) {
    alert('Good morning');
} else if (11 <= time && time < 17) {
    alert('Good day');
} else if(17 <= time && time < 23) {
    alert('Good evening');
} else ('Hello');

