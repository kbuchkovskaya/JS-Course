//1
let arr = ["Tom", "Sam", "Ray", "Bob"]; 
let [x,y,,...z] = arr ; 

console.log(x); // "Tom" 
console.log(y); // "Sam" 
console.log(z); // [Bob] 

//2
let data = { 
    names: ["Sam", "Tom", "Ray", "Bob"], 
    ages: [20, 24, 22, 26], 
}; 
    
let [name1, name2, name3, name4] = data.names; 
let [age1, age2, age3, age4] = data.ages;
    
console.log(name2); // "Tom" 
console.log(age2); // 24 
console.log(name4); // "Bob" 
console.log(age4); // 26 


//3
function mul (...elements) { 
    let sum = 0;
    for(let element of elements){
        if(typeof element === 'number'){
            sum += element;
        }
    }
    return sum;
 } 
 
 console.log( mul (1, "str", 2, 3, true )); // 6 
 console.log( mul ( null , "str", false , true )); // 0 

 //4

 let server = {
    data: 0,
    convertToString: function () {
        return this.data + "";
    }
};

let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.result = this.server.convertToString();
    }
};

client.calc(123);

console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//5
let keys = [1, 2, 3, 4]; 
let values = ["div", "span", "b", " i "]; 

let map = mapBuilder (keys, values);

function mapBuilder (keys, values){
    let result = new Map();
    keys.forEach((key, index) => {
        result.set(key, values[index]);
    })
    return result;
}; 

console.log(map);

console.log(map.size); // 4 
console.log(map.get(2)); // "span" 