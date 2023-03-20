// código em Node.js para criar um servidor de aplicações
let http = require('http');
let fs = require('fs');
let url = require('url');

// definindo o componente usado como servidor
let server = http.createServer(function(request, response) {
    fs.readFile(__dirname + '/index.html', function(erro, conteudo) {
        if(erro) {
            response.writeHead(404, { 'Content-Type': 'text/html'});
            response.write('<h1>Página não encontrada.</h1>');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html'});
            response.write(conteudo);
        }
        response.end();
    });
});
server.listen(3000, )