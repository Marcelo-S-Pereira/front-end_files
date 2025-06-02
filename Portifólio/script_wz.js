function sendWz(event){
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    /* coloque seu numero de celular codigo de país + DDD + numero cel */
    const num = '550000000000'; 

    const concat = `Olá! me chamo ${nome}, ${mensagem}`
    const mensFormat = encodeURIComponent(concat);

    const url = `https://wa.me/${num}?text=${mensFormat}`;

    window.open(url, '_blank')

    console.log(url)

}
