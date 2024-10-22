import soma from './soma'

describe('Teste de Soma', () => {
    it('Deve verificar o resultado de uma soma', () => {
        expect(soma(3, 8)).toBeCloseTo(11)
    })
    it('Deve verificar o resultado incorreto de uma soma', () => {
        expect(soma(3, 8)).not.toBeCloseTo(12)
    })
})

