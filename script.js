// script.js
document.addEventListener('DOMContentLoaded', () => {
    const botaoAdicionarItens = document.getElementById('botaoAdicionarItens');
    const contagemDeItens = document.getElementById('contagemDeItens');

    let contagem = 0;  // Contador de itens

    botaoAdicionarItens.addEventListener('click', () => {
        // Incrementa o contador de itens
        contagem++;
        contagemDeItens.textContent = contagem;
    });
});
