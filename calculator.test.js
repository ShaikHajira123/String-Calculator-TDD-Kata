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