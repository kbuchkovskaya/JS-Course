//1
function culcRectangleArea(width, height){
try {
    if(isNaN(width) || isNaN(height)){
        throw new IncorrectValue("Entered values are not a numbers");
    } else {
        let area = width * height;
        alert('Area = ' + area);
    }
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
}

}

class IncorrectValue{
    constructor(message){
        this.name = "IncorrectValue";
        this.message = message;
    }
}

width = prompt('Enter width of rectangle: ');
height = prompt('Enter height of rectangle: ');
culcRectangleArea(width, height);

//2
let age = prompt("Your age: ");

class EmptyString{
    constructor(message){
        this.name = "EmptyString";
        this.message = message;
    }
}

class NotANumber{
    constructor(message){
        this.name = "NotANumber";
        this.message = message;
    }
}

class AgeUnder14{
    constructor(message){
        this.name = "AgeUnder14";
        this.message = message;
    }
}

function checkAge(age){
    if(age === ''){
        try {
            throw new EmptyString("The field is empty! Please enter your age");
        } catch (exception) {
            console.log(exception.name);
            console.log(exception.message);
        }
    } else if(isNaN(age)){
        try {
            throw new NotANumber("Entered age is not a number");
        } catch (exception) {
            console.log(exception.name);
            console.log(exception.message);
        }
    } else if(age < 14){
        try {
            throw new AgeUnder14("Your age is under 14");
        } catch (exception) {
            console.log(exception.name);
            console.log(exception.message);
        }
    } else {
        console.log("You are qllowed to watching");
    }
}

checkAge(age);

//3
class MonthException{
    constructor(message){
        this.name = 'MonthException';
        this.message = message;
    }
}

let numberOfMonth = prompt('Enter number of month:' );

function showMonthName(numberOfMonth){
    try {
        switch(numberOfMonth){
            case '1': alert('January');
                break;
            case '2': alert('February');
                break;
            case '3': alert('March');   
                break;
            case '4': alert('April');
                break;
            case '5': alert('May');
                break;
            case '6': alert('June');
                break;
            case '7': alert('July');
                break;
            case '8': alert('August');
                break;
            case '9': alert('September');
                break;
            case '10': alert('October');
                break;
            case '11': alert('November');
                break;
            case '12': alert('December');
                break;
            default: throw new MonthException('Incorrect number of month');
}
    } catch (exception) {
        console.log(exception.name);
        console.log(exception.message);
    }
}
showMonthName(numberOfMonth);

//4
class IdException{
    constructor(message){
        this.name = "IncorrectID";
        this.message = message;
    }
}

let id = Number(prompt('Enter user id: '));

let user = new Object;

function showUserId(id){
    if(id > 0){
        user.id = id;
        return user;
    } else
    try {
        throw new IdException("Id cannot be less than 0: " + id); 
    }
    catch (exception) {   
        console.log(exception.name);
        console.log(exception.message);
    }

}

console.log(showUserId(id));

class IdsException{
    constructor(message){
        this.name = "IncorrectIds";
        this.message = message;
    }
}

let correctIds = [];

function showUserIds(ids){
    for (let i = 0; i < ids.length; i++) {
        showUserId(ids[i]);
        if(ids[i] > 0){
            correctIds.push({id : ids[i]});
        }
    }
    return console.log(correctIds);
}
    
showUserIds([-12, 3, -7, 4, 8]);

