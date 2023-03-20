let axios = require('axios');

let lista = [];

axios.get('http://localhost:3200/produtos')
    .then(resposta => {
        lista = resposta.data;
        console.log(lista);
    })