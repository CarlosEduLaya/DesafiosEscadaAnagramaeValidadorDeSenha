const  questao1  = require('../DesafioCapgemini/questao1')

describe("Testando a questao 1", () =>{
    test('escada', () => {
        const test1 = questao1.escada(6)

        expect(test1).toBeTruthy();

    });
})