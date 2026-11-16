function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    if(imagem.classList.contains('dashboard__item__img--rented')){
        let confirmar = confirm('tem certeza que deseja devolver esse jogo?');

        if (!confirmar) {
            return;
        }
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'alugar';
    } else {
       imagem.classList.add('dashboard__item__img--rented'); 
       botao.classList.add('dashboard__item__button--return');
       botao.textContent = 'devolver';
    }

    contarJogosAlugados();
}

function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(`quantidade de jogos alugados: ${jogosAlugados.length}`);
}