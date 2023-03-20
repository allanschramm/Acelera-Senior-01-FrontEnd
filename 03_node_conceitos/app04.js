let colecoes = require('./listas/listaDados');
let fn = require('./funcoes/callbacks');

console.log('Lista Original:');
console.log(colecoes.nomes);

// aplicação da função buscar
// exemplo 1 - sublista de nomes que iniciam com a letra 'A'
let res1 = fn.buscar(colecoes.nomes, item => item.startsWith('A') || item.startsWith('a'));
console.log('res1 (sublista - nomes iniciando com A: ');
console.log(res1);

// exemplo 2 - sublista de nomes que contenham a letra 'm'
let res2 = fn.buscar(colecoes.nomes, item => item.toUpperCase().includes('M'));
console.log('res2 (sublista - nomes que contenham a letra m: ');
console.log(res2);
