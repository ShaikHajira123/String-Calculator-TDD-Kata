const Add = require('./calculator.js');

test('Empty string should return 0', () => {
    expect(Add("")).toBe(0);
});


test('One number should return the number itself', () => {
    expect(Add("10")).toBe(10);
    expect(Add("1.3,")).toBe(1.3);
});


test('Two numbers should return their sum', () => {
    expect(Add("1,2")).toBe(3);
    expect(Add("10,20")).toBe(30);
});


test('Multiple numbers should return their sum', () => {
    expect(Add("1,2,3,4,5")).toBe(15);
    expect(Add("5,10,15,20")).toBe(50);
    expect(Add("5.5,10.5,19,10.50")).toBe(45.5);
});