const sum = require('./sum')

test('Adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

const sum2 = require('./sum')

test('Adds 4 + 5 to equal 9', () => {
    expect(sum(4,5)).toBe(9);
})

const sum3 = require('./sum')

test('Adds 4 + 3 to equal 7', () => {
    expect(sum(4,3)).toBe(7);
})