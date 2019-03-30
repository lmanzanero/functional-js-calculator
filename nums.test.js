const  numbers = require('./nums');

test('Number one should return 1', () => {
    expect(numbers.one()).toBe(1);
});

test('Number two should return 2', () => {
    expect(numbers.two()).toBe(2);
});

test('Number three  should return 3', () => {
    expect(numbers.three()).toBe(3);
});