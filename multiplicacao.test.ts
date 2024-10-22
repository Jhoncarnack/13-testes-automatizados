import multiplicacao from './multiplicacao'

describe ('Teste de Subtração', () => {
    it('Deve verificar o resultado de uma multiplicacao', () => {
        expect(multiplicacao(6.5, 2)).toBeCloseTo(13.0)
        expect(multiplicacao(2, 8)).toBeCloseTo(16)
        expect(multiplicacao(60, 2)).toBeCloseTo(120)
    })
    
    it('Deve verificar o resultado incorreto de uma multiplicacao', () => {
        expect(multiplicacao(6, 2)).not.toBeCloseTo(20)
    }) 
})