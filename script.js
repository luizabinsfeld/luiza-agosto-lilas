// Variável para saber se a pessoa já apoiou ou não
let curtiu = false;

function botaoClicado() {
    console.log("Botão de apoio clicado");
    
    // Captura o botão inteiro e o lugar onde fica o número (span)
    let botao = document.getElementById("btnApoio");
    let texto = document.getElementById("contador");

    if (curtiu === false) {
        // Se não curtiu, adiciona 1
        texto.textContent = parseInt(texto.textContent) + 1;
        curtiu = true;
        botao.style.backgroundColor = "#9370DB"; // Fica com um lilás mais escuro ao clicar
        botao.style.color = "#FFFFFF"; // Fonte branca ao clicar
    } else {
        // Se já curtiu, retira o curtir
        texto.textContent = parseInt(texto.textContent) - 1;
        curtiu = false;
        botao.style.backgroundColor = "#D8BFD8"; // Volta pra cor normal
        botao.style.color = "#000000"; // Volta a fonte preta
    }
}