const operations = require('./operations');


test('Operation Plus should return +', () =>{
    expect(operations.plus()).toBe('+');
});