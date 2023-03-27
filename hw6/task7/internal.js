//7
const main = document.createElement("main");
main.setAttribute("class", " mainClass check item ")
document.body.appendChild(main);

const div = document.createElement("div");
div.setAttribute("id", "myDiv");
main.appendChild(div);

const p = document.createElement("p");
p.innerText = "First paragraph";
div.appendChild(p);