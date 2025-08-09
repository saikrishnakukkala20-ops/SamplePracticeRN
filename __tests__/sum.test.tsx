const sumNumers = require('./../src/utils/sum');
test('add 1 + 2',() => {
    expect(sumNumers(1,2)).toBe(3)
})