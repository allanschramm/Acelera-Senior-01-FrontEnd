// função que recebe dois parâmetros numericos e retorna sua soma
// função nomeada
function calcularSoma(valor1, valor2) {

    if(typeof(valor1) != 'number' || typeof(valor2) != 'number') {
        throw new Error('Os parâmetros devem ser numéricos');
    }
    return valor1 + valor2;
}

exports.somar = calcularSoma;


// função anônima
// neste exemplo, a função recebe dois parâmtros numericos e retorna o maior deles
exports.buscarMaior = function (a, b = 0) {
    if(typeof(a) != 'number' || typeof(b) != 'number') {
        throw new Error('Os parâmetros devem ser numéricos');
    }
    return a > b ? a : b;
}


// arrow function
// exemplo 1: a função recebe como parâmetros o valor de um produto e uma taxa de juros,
// e retorna o valor acrescentado (excedente) após a aplicação desta taxa.
exports.calcularJuros = (valor, taxa) => { 
    return valor * taxa / 100;
}

// exemplo 2: na função a seguir, é aplicada a propriedade length ao parâmetro 's'. Neste caso,
// o parâmetro deve ser uma string ou uma lista.
exports.calcularTamanho = s => s.length;
