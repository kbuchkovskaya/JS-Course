//1
let building = {
    quantityOfStairs: 2,
    area: 56,
    hasWindows: true
};

let count = 0;

function propsCount(object){
    for (let key in object){
        if(object.hasOwnProperty(key)){
            count++;
        }
    }
    return count;
}

console.log("Quantity of properties: " + propsCount(building));

//2
let obj = {
    firstProp: 23,
    secondProp: 34,
    thirdProp: 2323, 
    forthProp: 56,
    fifthProp: 76
};

function showProps(object){
    //Also enter an array of object property values ?????????
    console.log(Object.getOwnPropertyNames(object));
}

showProps(obj);

//3
class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.name + " " + this.surname;
    }
}

class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName2(middleName){
        return super.showFullName() + " " + middleName;
    }
    showCourse(){
        return 2023 - this.year;
    }
}

const student1 = new Student("Kateryna", "Buchkovska", 2015);
console.log(student1);
console.log(student1.showFullName2("Yur"));
console.log("Course: " + student1.showCourse());

//4
class Worker {
    _experience = Number(1.2);
    setExperience(value){
        this._experience = Number(value);
    }
    getExperience(){
        return Number(this._experience);
    }
    constructor(name, lastName, dayRate, workingDays){
        this.name = name;
        this.lastName = lastName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.showSalary() * this._experience;
    }
    showSalaryWithNewExperience(){
        return this.showSalary() * this.getExperience();
    }
}

let workers = [];

function sort(workers){
    ws = workers[0];
    console.log(ws);
    for(let i = 0; i < workers.length-1; i++){
        if(workers[i].showSalary() > workers[i+1].showSalary()){
            ws = workers[i];
            console.log(ws);
            workers[i] = workers[i+1];
            workers[i+1] = ws;
        }
    }
    return workers;
}

let worker1 = new Worker("John", "Smith", 2, 5);
workers.push(worker1);
let worker2 = new Worker("Anna", "Huff", 5, 1);
workers.push(worker2);
let worker3 = new Worker("Brayan", "Ban", 5, 9);
workers.push(worker3);

console.log("Salary: " + worker1.showSalary());
worker2.setExperience(1.5);
console.log("New experiecne:  " + worker2.getExperience());
console.log(worker2.showSalaryWithExperience());

sort(workers);
console.log("Sorted array: ");
for(let i = 0; i < workers.length; i++){
    console.log(workers[i].name + " " + workers[i].showSalaryWithNewExperience());
}

//5
console.log(" ---- ");

class GeometricFigure {
    getArea(){
        return Number(0);
    }
    toString(){
        return Object.getPrototypeOf (this).constructor.name; 
    }
}

class Triangle extends GeometricFigure{
    constructor(side1, side2, side3){
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getSide1(){
        return this.side1;
    }
    getSide2(){
        return this.side2;
    }
    getSide3(){
        return this.side3;
    }
    getArea(){
        let p = (parseFloat(this.getSide1()) + parseFloat(this.getSide2()) + parseFloat(this.getSide3())) / 2;
        let area = Math.sqrt(p * (p - parseFloat(this.getSide1())) * (p - parseFloat(this.getSide2())) * (p - parseFloat(this.getSide3())));
        return super.getArea() + Number(area);
    }
}

class Square extends GeometricFigure{
    constructor(side){
        super();
        this.side = side;
    }
    getArea(){
        return Math.pow(this.side, 2);
    }
}

class Circle extends GeometricFigure{
    constructor(radious){
        super();
        this.radious = radious;
    } 
    getArea(){
        return Number(3.14) * Math.pow(this.radious, 2);
    }
}

function handleFigures(figures){
    let a = Number(0);
    for(let i = 0; i < figures.length; i++){
        if(figures[i] instanceof GeometricFigure){
            console.log(figures[i].toString() + " : "  + figures[i].getArea());
            a = a + Number(figures[i].getArea());
        }
    }
    console.log("Area: " + a);
}

let figures = [];

const triangle1 = new Triangle(3, 3, 1);
figures.push(triangle1);
const circle1 = new Circle(3);
figures.push(circle1);
const square1 = new Square(4);
figures.push(square1);

handleFigures(figures);





