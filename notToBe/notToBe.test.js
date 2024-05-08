const notToBe = require('./notToBe');

test('Subtrair 2 números', ()=> {
    expect(notToBe(2, 3)).not.toBe(10);
});