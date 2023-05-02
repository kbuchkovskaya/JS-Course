function getCircleLength(radius){
    return Number(parseFloat(2 * radius * Math.PI).toFixed(1));
}

function getCircleArea(radius){
    return Math.PI * Math.pow(radius, 2);
}

//console.log(getCircleLength(22));

module.exports = {
    getCircleLength: getCircleLength,
    getCircleArea: getCircleArea
}