//1

const regex = /^[A-Z]/;

function upperCase(string){
    return regex.test(string) ? console.log("ok") : console.log("not ok");
}

upperCase('Wer');
upperCase('wer');

//2

const regex2 = /\S+@\S+\.\S+/;

function checkEmail(string){
    return regex2.test(string) ? true : false
}

console.log(checkEmail("kbuch@soft.com"));
console.log(checkEmail("kbuch@sertwer"));

//3

const regex3 = /(d)(b)+(d)/;

function chechTask3(string){
    return string.match(regex3) ? true : false
}

console.log(chechTask3("dbbdd"));
console.log(chechTask3("bbdbbb"));

//4

let regex4 = /(\S+\,?\s)/;

function checkTask4(string){
    let newArr = [];
    let arr = string.split(regex4);
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] !== ""){
            newArr.push(arr[i]);
        }
    }
    return newArr.join(',');
}

console.log(checkTask4("Helloo world www"));



