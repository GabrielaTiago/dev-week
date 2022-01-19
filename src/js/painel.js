/* quando clicar na seta temos que esconder todas as imagens e mostrar a próxima
    imagem atual começa em 0
*/

const imagensPainel = document.querySelectorAll('.imagem-painel')
const setAvancar = document.getElementById('btn-avancar')
const setVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

/*  esconder todas as imagens / pegar todas as imagens usando o DOM e remover a classe mostrar */
function esconderImagens(){
        imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

/* mostrar a próxima imagem / pegar todas as imagens, desobrir qual a próxima e colocar a classe mostrar nela*/
function mostrarImagens(){
    imagensPainel[imagemAtual].classList.add('mostrar')
}
        
setAvancar.addEventListener('click', function() {

    /* testa se o contador da imagemAtual é igual ao total de imagens */
    if(imagemAtual === imagensPainel.length -1){
        return
    }
    /* assim que o botão avançar for clicado, é necessário adicionar 1 ao contador imagens */
    imagemAtual++

    esconderImagens()
    mostrarImagens()
})

setVoltar.addEventListener('click', function() {

    if(imagemAtual === 0){
        return
    }
 
    imagemAtual--

    esconderImagens()
    mostrarImagens()
})