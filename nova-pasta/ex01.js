let fs = require('fs');

fs.mkdir('exercicio01', () => {});

let hoje = new Date(); //pegando a data atual

let ano = hoje.getFullYear();
let mes = hoje.getMonth() + 1;
let dia = hoje.getDate();

fs.mkdir('exercicio01/'+ano, () => {
    fs.mkdir(`exercicio01/${ano}/${mes}`, () => {
        fs.mkdir(`exercicio01/${ano}/${mes}/${dia}`, () => {
            
            let alunos = [
                'Maria',
                'Chiquim',
                'Zezim',
                'Tiao',
            ];
            
            alunos.map((cadaAluno) => {
                fs.appendFile(`exercicio01/${ano}/${mes}/${dia}/alunos.txt`, cadaAluno+'\n', () => {})
            })
        });
    });
});





