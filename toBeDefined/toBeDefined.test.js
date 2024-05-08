const toBeDefined = require('./toBeDefined');

test('Verifica a variavel com o valor definido', ()=> {
    expect(toBeDefined()).toBeDefined(); 
});