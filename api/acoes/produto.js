function listar() {
    return [
        {
            id: 1,
            nome: "Ypioca"
        },
        {
            id: 2,
            nome: "Heineken"
        },

    ];
}

function cadastrar() {
    return "Cadastrar Produto";
}

function editar() {
    return "Editar Produtos";
}

function excluir() {
    return "Excluir Produto";
}






module.exports = {
    listar: listar,
    cadastrar: cadastrar,
    editar: editar,
    excluir: excluir,
}