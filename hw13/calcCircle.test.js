const calcCircle = require('./calcCircle.js');

describe('Manipulations with circle', () => {

    test('getCircleArea(radius)', () => {
        expect(calcCircle.getCircleArea(9)).toBeCloseTo(Number('254.47'));
    })

    test('getCircleLength(radius)', () => {
        expect(calcCircle.getCircleLength(22)).toBe(Number('138.2'));
    })

    test('empty getCircleArea(radius)', () => {
        expect(calcCircle.getCircleArea()).toBe(NaN);
    })

    test('empty getCircleLength(radius)', () => {
        expect(calcCircle.getCircleLength()).toBe(NaN);
    })
})


