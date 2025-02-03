// Array com os nomes dos arquivos de imagens, com o caminho // Definindo um array de imagens
const imagens = [
    "img/D_NQ_NP_723170-MLB81742375222_012025-O.webp",
    "img/D_NQ_NP_751772-MLB81742249430_012025-O.webp",
    "img/D_NQ_NP_780355-MLB81742375228_012025-O.webp",
    "img/D_NQ_NP_837219-MLB81742249434_012025-O.webp"
];

// Inicializando a variável para controlar o índice
let indiceAtual = 0;

function rd(){ 
    var im = document.querySelector("#imagem")
    im.classList.add("animate__fadeIn")
    setTimeout(() => {
        im.classList.remove("animate__fadeIn")
    }, 500);
}

// Função para alterar a imagem
function alterarImagem() {
    
    // Pegando o elemento de imagem do HTML
    const imagemElement = document.getElementById("imagem");

    
    // Aumentando o índice atual
    indiceAtual = indiceAtual + 1;

    // Verificando se o índice ultrapassou o número de imagens, se sim, volta para o índice 0
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    // Alterando a imagem exibida
    imagemElement.src = imagens[indiceAtual];
}



