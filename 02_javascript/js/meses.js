// determinando o ano atual
let data = new Date();
let ano = data.getFullYear();

// definindo uma lista de objetos contendo o mês o num. de dias deste mês
// ano bissexto: 
let meses = [
    { mes: 'Janeiro',   dias: 31 },
    { mes: 'Fevereiro', dias: (ano % 4 == 0) ? 29 : 28 },
    { mes: 'Março',     dias: 31 },
    { mes: 'Abril',     dias: 30 },
    { mes: 'Maio',      dias: 31 },
    { mes: 'Junho',     dias: 30 },
    { mes: 'Julho',     dias: 31 },
    { mes: 'Agosto',    dias: 31 },
    { mes: 'Setembro',  dias: 30 },
    { mes: 'Outubro',   dias: 31 },
    { mes: 'Novembro',  dias: 30 },
    { mes: 'Dezembro',  dias: 31 }
];

// if(ano % 4 == 0) {
//     meses[1].dias = 29;
// } else {
//     meses[1].dias = 28;
// }

// meses[1].dias = (ano % 4 == 0) ? 29 : 28;
// -----------------------------------------------
// referenciando o elemento 'select' pelo id
let mesPreferido = document.getElementById('mesPreferido');

function listarMeses() {
    for (let i = 0; i < meses.length; i++) {
        let option = document.createElement('option');
        option.textContent = meses[i].mes;
        option.setAttribute('value', meses[i].dias);

        mesPreferido.appendChild(option);
    }
}

listarMeses();