function validadorSenha(senha){
    let vereficaTamanhoSenha = senha.length;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){6,}$/;
    if(vereficaTamanhoSenha > 6){
        regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/;
    }
    let vereficaSeEstaTudoOk = regex.test(senha);

    if(vereficaTamanhoSenha < 6){
        console.log(`Sua senha tem ${vereficaTamanhoSenha} caracteres falta adicionar ${6 - vereficaTamanhoSenha} caractere(s)`)
    }
    if(vereficaSeEstaTudoOk == true){
        console.log("Sua senha está ok"); 
    }else{
        console.log("Sua senha não está atendendo os requisistos"); 
    }

}

validadorSenha("Ca@");