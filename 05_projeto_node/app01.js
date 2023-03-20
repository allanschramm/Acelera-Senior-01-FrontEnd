let moment = require('moment');

//moment.locale('pt-BR');
//moment.locale('ja-JP');
moment.locale('it-IT');

const now = moment();
console.log(now);
console.log(now.format("DD/MM/yyyy"));
console.log(now.format("DD/MM/yyyy - dddd - (MMMM)"));