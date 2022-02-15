
function escada(numero){
    let escada = [];
    for(let i = 0; i < numero; i++){
        escada.push("*".repeat(i)); 
    };
    for(let t = 1; t < escada.length; t++){
        var escadaInvertida = escada[t].padStart(numero-1, ' ');
        console.log(escadaInvertida);
    };

    return escadaInvertida;

}
module.exports = {escada};
escada(6)