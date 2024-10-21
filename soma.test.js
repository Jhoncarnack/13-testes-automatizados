const soma = require ('./soma')

describe('Teste deSoma', () => {
    it('Deve verificar o resultado de uma soma', () => {
        expect(soma(3, 8)).toBe(11)
    })
    it('Deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 8)).not.toBe(12)
    })
})

