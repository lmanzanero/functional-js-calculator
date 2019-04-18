import { one, two, three } from './nums';
import { plus, minus, times, divided } from './operations';

test('one(plus(one())) should return 2', () => {
    expect(one(plus(one()))).toBe(2);
});