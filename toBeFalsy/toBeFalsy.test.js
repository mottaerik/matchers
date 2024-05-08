const toBeFalsy = require('./toBeFalsy');

test('Testa se é um valor falsy', ()=> {
    expect(toBeFalsy()).toBeFalsy();
});