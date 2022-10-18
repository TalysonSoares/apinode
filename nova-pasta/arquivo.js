let fs = require('fs');

fs.mkdir('nova-pasta', () => {
    console.log('aconteceu alguma coisa')
});

fs.writeFile('nova-pasta/contatos.txt', 'Testando\r\n', () => {});