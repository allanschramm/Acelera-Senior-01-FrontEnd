let colecoes = require('./listas/listaDados');
console.log(colecoes.nomes);

/*
    aplicar um filtro à lista de nomes. O filtro é uma função callback (filter)
*/
// obtendo valores do console
let input = process.argv[2];

// obter a sublista de nomes que contenham a informação fornecida como entrada
let lista = colecoes.nomes.filter(item => item.includes(input));
console.log(lista);

// obter a sublista de cursos marcados como ativos (status = true)
let cursosAtivos = colecoes.cursos.filter(c => c.status == true);
console.log(cursosAtivos);