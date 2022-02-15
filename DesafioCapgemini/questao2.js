function validadorSenha(senha){
    let vereficaTamanhoSenha = senha.length;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){6,}$/;
    var mensagem = "";
    if(vereficaTamanhoSenha > 6){
        regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/;
    }
    let vereficaSeEstaTudoOk = regex.test(senha);

    
    if(vereficaSeEstaTudoOk == true){
        mensagem = "Sua senha está ok";

        console.log("Sua senha está ok"); 
    }else if(vereficaTamanhoSenha < 6 || vereficaSeEstaTudoOk == false){
        if(vereficaTamanhoSenha < 6 ){

            mensagem = `Sua senha tem ${vereficaTamanhoSenha} caracteres falta adicionar ${6 - vereficaTamanhoSenha} caractere(s)`;
            console.log(`Sua senha tem ${vereficaTamanhoSenha} caracteres falta adicionar ${6 - vereficaTamanhoSenha} caractere(s)`)
        }else{

            mensagem = "Sua senha não está atendendo os requisistos";
    
            console.log("Sua senha não está atendendo os requisistos"); 
        }
    }
    return mensagem;

}

module.exports = {validadorSenha};
validadorSenha("Ca1131");