exports.getGreeting = function(userName){
    let date = new Date();
    let time = new Date().getHours();
    let greeting = "";
    if(0 < time <= 6 || 20 <= time <= 23){
        greeting = "Good night, " + userName;
    } else if (6 < time < 12){
        greeting = "Good morning, " + userName;
    } else if (12 <= time < 17){
        greeting = "Good afternoon, " + userName;
    } else if(17 <= time < 20){
        greeting = "Good evening, " + userName;
    }
    return "Date: " + date + " " + greeting;
}

