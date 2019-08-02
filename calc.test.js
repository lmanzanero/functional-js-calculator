import { one, two, three } from './nums';
import { plus, minus, times, divided } from './operations';

test('one(plus(one())) should return 2', () => {
    expect(eval(one(plus(one())))).toBe(2);
});

test('one(plus()) should return 1', () => {
    expect(one(plus())).toBe("1 +");
});

test('plus(one()) should return 1', () => {
    expect(plus(one())).toBe("+ 1");
});
 