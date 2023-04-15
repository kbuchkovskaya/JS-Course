//1
/*
const http = require('http');
//const si = require('systeminformation');
const os = require('node:os'); 
const path = require('path');
const file = "hw10/internal.js"
http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<h1>System Info</h1>");
    /*valueObject = {
        users: 'user',
        osInfo: 'platform',
        time: 'uptime'
    };
    si.get(valueObject).then(data => {
        response.write("<p>User: " + data.users[0].user + "</p>");
        response.write("<p>OS: " + data.osInfo.platform + "</p>");
        response.write("<p>OS: " + data.time.uptime / 60 + "</p>");
        response.end();
    })
    response.write("<p>User: " + os.userInfo().username + "</p>");
    response.write("<p>Platform: " + os.platform() + "</p>");
    response.write("<p>Time: " + os.uptime() / 60 + "</p>");
    response.write("<p>Directory: " + path.dirname(__filename) + "</p>");
    response.write("<p>File: " + path.basename(file) + "</p>");
    response.end();

}).listen(5000);

console.log("Listening");
*/
//2

const http = require('http');
const os = require('node:os'); 
let time = require('./personalmodule');
http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<p>" + time.getGreeting(os.userInfo().username) + "</p>");
    response.end();
}).listen(5000);

console.log("Listening");


