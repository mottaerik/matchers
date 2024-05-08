const toBeUndefined = require('./toBeUndefined');

test('Variavel com o valor indefinido', ()=> {
    expect(toBeUndefined()).toBeUndefined(); 
});