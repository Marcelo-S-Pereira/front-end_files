const botaoFiltrar = document.querySelector('.btn-filtrar');
console.log(botaoFiltrar);

botaoFiltrar.addEventListener('click', function () {
    const categoriaSelecionada = document.querySelector('#categoria').value;

    const precoMaximoSelecionado = document.querySelector('#preco').value;

    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        const temFiltroDeCategoria = categoriaSelecionada !== '';

        const cartaNaoBateComFiltroCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria && cartaNaoBateComFiltroCategoria) {
            mostrarCarta = false;
        };

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        };


        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove; ('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        };



    })


});
