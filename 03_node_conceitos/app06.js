let colecoes = require('./listas/listaDados');

// gerar uma nova lista de cursos, com base na lista original
let novosCursos = colecoes.cursos.map( (elemento, posicao) => { 
    return {
        chave: posicao,
        curso: elemento.descricao,
        ativo: (elemento.status ? 'Sim' : 'Não')
    }
});
console.log(novosCursos);