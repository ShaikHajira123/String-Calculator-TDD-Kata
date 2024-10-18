const Add = require('./calculator.js');

test('Empty string should return 0', () => {
    expect(Add("")).toBe(0);
});