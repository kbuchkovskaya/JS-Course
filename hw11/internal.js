//1
//Click on window -> type run and hit enter -> in the command window copy:
//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

let ajaxRequest = new XMLHttpRequest();

const button = document.getElementsByTagName('button').item(0);

function updateButtonText(){
    ajaxRequest.open('GET', 'data.json', true);
    ajaxRequest.send(button.innerText = "Your vote is accepted: " + new Date());   
}

button.addEventListener('click', updateButtonText);

//2

let ajaxRequest = new XMLHttpRequest();

const button = document.getElementsByName("books").item(0);
const list = document.getElementsByTagName("ul").item(0);

function showList(){
    ajaxRequest.open('GET', 'data.json', true);
    ajaxRequest.send(button.style.visibility = 'hidden');
    ajaxRequest.send(list.style = 'visible');
}

button.addEventListener('click', showList);
