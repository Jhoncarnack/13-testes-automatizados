import divisao from './divisao'

describe ('Teste de Subtração', () => {
    it('Deve verificar o resultado de uma divisao', () => {
        expect(divisao(6.6, 2)).toBeCloseTo(3.3)
        expect(divisao(2, 8)).toBeCloseTo(0.25)
        expect(divisao(60, 2)).toBeCloseTo(30)
    })
    
    it('Deve verificar o resultado incorreto de uma divisao', () => {
        expect(divisao(6, 2)).not.toBeCloseTo(20)
    }) 
})