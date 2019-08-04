import { plus, minus, times, divided} from './operations';


test('Operation Plus should return +', () =>{
    expect(plus()).toBe('+');
});

test('Operation minus should return -', () => {
    expect(minus()).toBe('-');
});

test('Operation times should return *', () => {
    expect(times()).toBe('*');
});

test('Operation divided should return /', () => {
    expect(divided()).toBe('/');
});