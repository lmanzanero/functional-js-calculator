import { one, two, three, four, five, six, seven, eight, nine, ten } from './nums';
import { plus, minus, times, divided } from './operations';

test('one(plus(two())) should return 3', () => {
    expect(one(plus(two()))).toBe(3);
});

test('two(plus(two())) should return 4', () => {
    expect(two(plus(two()))).toBe(4);
});

test('one(minus(one)) should return 0', () => {
    expect(one(minus(one()))).toBe(0);
});


test('four(minus(two())) should return 2', () => {
    expect(four(minus(two()))).toBe(2);
});

test('four(times(four())) should return 16', () => {
    expect(four(times(four()))).toBe(16);
});

test('five(divided(two())) should return 2.5', () => {
    expect(five(divided(two()))).toBe(2.5);
});

test('ten(times(ten())) should return 100', () => {
    expect(ten(times(ten()))).toBe(100);
});


test('five(times(two(plus(seven())))) should return 17', () => {
    expect(five(times(two()))).toBe(10);
});

 