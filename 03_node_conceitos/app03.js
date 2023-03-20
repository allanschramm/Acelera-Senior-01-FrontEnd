let fn = require('./funcoes/callbacks');

let res1 = fn.executar(function(item) { 
    return item.length;         // number
});

console.log(`res1 = ${res1}`);

let res2 = fn.executar(function(item){
    return item == 'Impacta';   // boolean
});

console.log(`res2 = ${res2}`);

