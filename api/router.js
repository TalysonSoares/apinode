function router(url) {
    if (url === '/clientes') {
        return "Listar Clientes";
    }
    if (url === '/produtos') {
        return "Listar Produtos";
    }

    return "Error 404"
}

module.exports = router;