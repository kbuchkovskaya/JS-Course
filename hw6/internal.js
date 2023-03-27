//1
document.getElementsByTagName("div")[0].innerHTML = "Last";
document.getElementById("test").innerHTML = "Last";

//2
document.getElementsByClassName("image").src = "dog.jpg";

//3
let paraghraps = document.querySelectorAll("#text > p");

for(let i = 0; i < paraghraps.length; i++){
    console.log("Selector text " + i + ": "+ paraghraps[i].innerText);
}

//4
let lis = document.getElementById("list");
console.log(lis.firstElementChild.textContent);
console.log(lis.lastElementChild.textContent);
console.log(lis.firstElementChild.nextElementSibling.textContent);
console.log(lis.lastElementChild.previousElementSibling.textContent);
console.log(lis.children.item(2).textContent);

//5
document.getElementsByTagName("h1")[0].style = "background-color:green";

let ps = document.querySelectorAll("#myDiv p");
ps[0].style.fontWeight = "bold";
ps[1].style.color = "red";
ps[2].style.textDecoration = "underline";
ps[3].style.fontStyle = "italic";

let lis2 = document.querySelectorAll("#myList li");
let l = [];
lis2.forEach(element => {
    element.style.display = "inline";
})

document.querySelector("span").style.visibility = "hidden";

//6
let prompt1 = prompt("Message 1: ");
let input1 = document.getElementById("input1")
input1.value = prompt1;

let prompt2 = prompt("Message 2: ");
let input2 = document.getElementById("input2")
input2.value = prompt2;

input1.setAttribute("value", prompt2);
input2.setAttribute("value", prompt1);


