const  questao2  = require('./questao2')

describe("Testando a questao 2", () =>{
    test('validadorSenha', () => {
        const test1 = questao2.validadorSenha("Ca@123")

        expect(test1).toBe("Sua senha está ok");
    });

})

describe("Testando a questao 2", () =>{
    test('validadorSenha', () => {
        const test2 = questao2.validadorSenha("Ca@13")

        expect(test2).toBe("Sua senha tem 5 caracteres falta adicionar 1 caractere(s)");

    });

})

describe("Testando a questao 2", () =>{
    test('validadorSenha', () => {
        const test3 = questao2.validadorSenha("Caa133")

        expect(test3).toBe("Sua senha não está atendendo os requisistos");

    });

})