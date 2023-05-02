const { test } = require('node:test');
const addNumbers = require('./internal.js');

//1
describe('Sum of 2 numbers', () => {
    test('Result of adding 0,1 to 0,2 is 0,3', () => {
        expect(addNumbers(Number("0,1"), Number("0,2"))).toBe(Number("0,3"));
    })
})

//2
describe('Item in array', () => {

    const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

    test('Admin in array', () => {
        expect(userList.includes("admin"));
    })

    test('First element in array is Nick', () => {
        expect(userList[0]).toContain("Nick");
    })

    test('Last element in array is new_user_2', () => {
        expect(userList[userList.length -1]).toContain('new_user_2');
    })

    test('Length of array is 5', () => {
        expect(userList).toHaveLength(5);
    })

    test('Third element of array has type string', () => {
        expect(typeof userList[3]).toBe('string');
    })

    test('Array has no 8th element', () => {
        expect(userList).not.toHaveLength(8);
    })
})

