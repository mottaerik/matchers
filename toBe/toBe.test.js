const toBe = require('./toBe');

test('Somar 2 números', ()=> {
    expect(toBe(1, 2)).toBe(3);
});