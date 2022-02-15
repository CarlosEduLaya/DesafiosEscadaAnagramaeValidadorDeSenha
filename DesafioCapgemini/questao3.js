function quantosAnagramaTemNaMesmaPalavra(palavra){
    var resultado = [];
    let vereficaTamanhoPalavra = palavra.length;
    for(let i = 0; i < vereficaTamanhoPalavra; i++){
        let eliminaLetra = palavra.substring(i);
        let palavraAoContraria = eliminaLetra.split('').reverse().join('');      
        let igual = (eliminaLetra === palavraAoContraria);
        if(igual === true){
            resultado.push(igual);
        }
    };
    console.log(`Nessa palavra e possivel encontrar essa quantidade ${resultado.length} de anagramas`);
};


quantosAnagramaTemNaMesmaPalavra("ovo");