const http = require('http');

const produto = require('./acoes/produto');
const cliente = require('./acoes/cliente');
const router = require('./router');

const host = 'localhost';
const port = '8000';


//funcao que vai ser executada sempre que houver alguma requisiçao por parte do clinte
function execusao(pedido, resposta) {
    //Definindo o tipo de conteudo da resposta, para json
    resposta.setHeader('Content-Type', 'application/json');

    //pedindo ao router qual o conteudo da url acessada
    let conteudo = router(pedido.url)

    //enviando o conteudo que tinha no router como resposta pro cliente
    resposta.end(conteudo)
}

//criando servidor e definindo a funcao que ficara sendo executada
const server = http.createServer(execusao);

//subindo o servidor para ficar escutando as requisições
server.listen(port, host, () => {
    console.log(`Servidor rodando no endereco http://${host}:${port}`)
});