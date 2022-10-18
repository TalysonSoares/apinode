function listar() {
    return [
        {
            id: 1,
            nome: "Talyson"
        },
        {
            id: 2,
            nome: "Ale"
        }
    ];
}

function cadastrar() {
    return "Cadastrar Cliente";
}

function editar() {
    return "Editar Cliente";
}

function excluir() {
    return "Excluir Cliente";
}

module.exports = {
    //listar: listar,
    listar,
    cadastrar,
    editar,
    excluir,
}