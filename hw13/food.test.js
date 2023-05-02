const food = require('./food.js');

describe('Test filtered food', () => {

    const sortedArray = food.filterFoodPrice(food.food, 12, 40);

    test('3 filtered items', () => {
        expect(sortedArray).toHaveLength(3);
    })

    test('Sorted array contain { kind: pepper, price: 27 }', () =>{
        const item = sortedArray.some((item) => item.kind === 'pepper' && item.price === 27);
        expect(item).toBeTruthy();
    })

    test('Sorted array contains 2, 3, 4 element of initial array', () => {
        expect(sortedArray[1]).toEqual(food.food[1]);
        expect(sortedArray[2]).toEqual(food.food[2]);
        expect(sortedArray[3]).toEqual(food.food[3]);
    })

    test('First element.price of sorted array greater than min', () => {
        expect(sortedArray[0].price).toBeGreaterThan(12);
    })

    test('Third element.price of sorted array less than max', () => {
        expect(sortedArray[2].price).toBeLessThan(40);
    })

    test('Sorted array does not contain { kind: lemon, price: 50 }', () => {
        const element = sortedArray.some((item) => item.kind === 'lemon' && item.price === 50);
        expect(element).toBeFalsy();
    })

    test('Check 5th element of array is undefined', () => {
        expect(sortedArray[4]).toBeUndefined();
    })

    test('Check sorted array has not the same length as initial array', () => {
        expect(sortedArray).not.toHaveLength((food.food).length);
    })

})