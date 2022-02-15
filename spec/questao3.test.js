const  questao3  = require('../DesafioCapgemini/questao3')

describe("Testando a questao 1", () =>{
    test('escada', () => {
        const test3 = questao3.quantosAnagramaTemNaMesmaPalavra("ovo")

        expect(test3).toBeTruthy();

    });
})