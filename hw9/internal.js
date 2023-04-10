//1
function getPromise(message, delay){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(message);
        }, delay)
    })
}

getPromise("test", 2000).then(function(data){
    console.log(data);
});

//2 
function calcArrProduct(arr){
    let result = 1;
    let isCorrect = true;
    return new Promise(function(resolve, reject){
        for(let i = 0; i < arr.length; i++){
            if(!isNaN(arr[i])){
                result = result * arr[i];
            } else isCorrect = false;
        }
        return isCorrect === false ? reject("Error! Incorrect array!") : resolve(result);
    })
}

calcArrProduct(["rer", 4, 6, "4", "1"])
    .then(result => console.log("Result: " + result))
    .catch(error => console.log(error));


//3 
//without async/await
const delay = (i, time) => new Promise(resolve => setTimeout (() => resolve(i), time)); 

function showNumbers() { 
// your code with using delay( i, time)   
    for(let i = 0; i <= 10; i++){
        time = Math.floor(Math.random() * 4000);
        delay(i, time).then(() => {
            console.log(i);
        }) 
    }
} 

showNumbers(); 


//4
const delay2 = (i, time) => new Promise(resolve => setTimeout (() => resolve(i), time)); 

async function showNumbers2() { 
// your code with using delay( i, time)   
    for(let i = 0; i <= 10; i++){
        time = Math.floor(Math.random() * 4000);
        await delay2(i, time).then(() => {
            console.log(i);
        }) 
    }
} 

showNumbers2();  

