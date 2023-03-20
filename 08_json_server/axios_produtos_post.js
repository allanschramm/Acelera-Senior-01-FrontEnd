let axios = require('axios');

let descricao = process.argv[2]
let preco = parseFloat(process.argv[3]);

// definindo o objeto a ser incluído
let produto = { "descricao": descricao, "preco": preco };

// adicionando o produto
axios.post('http://localhost:3200/produtos', produto)
    .then(resposta => {
        console.log(resposta.data);
        console.log('Produto incluído com sucesso');
    });