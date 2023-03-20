let promise = new Promise( (resolve, reject) => {
    // gerar um numero aleatorio (entre 0 e 1)
    let x = Math.random();

    // Regra: consideraremos que valores a partir de 0.5 são aceitáveis. Abaixo de
    // 0.5, os valores são inaceitaveis.

    if(x >= 0.5) {
        resolve('Valor calculado: ' + x);
    } else {
        reject('Valor inválido - insuficiente!!! ' + x);
    }
});

console.log('ANTES DO PROMISE:');
promise
    .then(s => s.toUpperCase())
    .then(s => s.substring(6))
    .then(resposta => console.log(resposta))
    //.then(s => console.log(s))
    .catch(erro => console.error(erro));

console.log('APÓS O PROMISE.');