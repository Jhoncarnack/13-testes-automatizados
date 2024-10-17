const soma = require ('./soma')

test('Deve verificar o resulatdo de uma soma', () => {
    expect(soma(3, 8)).toBe(11)
})

