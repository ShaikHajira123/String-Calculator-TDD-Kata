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


test('Newlines between numbers should be allowed', () => {
    expect(Add("1\n2,3")).toBe(6);
});


test('Custom delimiter should be allowed', () => {
    expect(Add("//;\n1;2")).toBe(3);
    expect(Add("//|\n5|6|7")).toBe(18);
});


test('Negative numbers should throw an exception', () => {
    expect(() => Add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    expect(() => Add("//;\n1;-2;-3")).toThrow("Negative numbers not allowed: -2, -3");
});


test('Numbers greater than 1000 should be ignored', () => {
    expect(Add("2,1001")).toBe(2);
    expect(Add("//;\n2;1001")).toBe(2);
});


test('Multiple delimiters with custom lengths should be supported', () => {
    expect(Add("//[*][%]\n1*2%3")).toBe(6);
    expect(Add("//[***]\n5***10***15")).toBe(30);
});