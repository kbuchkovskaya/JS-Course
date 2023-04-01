//1
let newWindow = window.open("", "", "height=300, width=300");

setTimeout(function(){
    newWindow.resizeTo(500,500);
}, 2000);

setTimeout(function(){
    newWindow.moveTo(200,200);
}, 2000);

setTimeout(function(){
    newWindow.close();
}, 2000);

//2
function changeCSS(){
    let p = document.getElementById("text");
    p.style.color = "orange";
    p.style.fontSize = 20;
    p.style.fontFamily = "Comic Sans MS";
}

//3
function backgroungChange(color){
    document.body.style.backgroundColor = color;
}

//4
function removeItemFromList(){
    let items = document.getElementById("select");
    items.remove(items.selectedIndex);
}

//5
let btn = document.querySelector("#task5 > button");
let result = document.getElementById("result1");

btn.addEventListener("click", function(){
    result.textContent = "I was pressed";
})

btn.addEventListener("mouseover", function(){
    result.textContent = "Mouse on me!";
})

btn.addEventListener("mouseout", function(){
    result.textContent = "Mouse not on me!";
})

//6
window.addEventListener("resize", updateSize);

updateSize();

function updateSize(){
    document.querySelector("#task6 > label").textContent = "h: " + window.innerHeight + " W: "+ window.innerWidth;
}

