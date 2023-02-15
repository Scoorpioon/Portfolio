const controles = document.querySelectorAll('.controle')
const itens = document.querySelectorAll('.item')
const quantidadeItens = itens.length;
let itemAtual = 0

controles.forEach((botao) => {
    botao.addEventListener('click', () => {
        const botaoEsquerdo = botao.classList.contains('seta-anterior')

        if(botaoEsquerdo) {
            itemAtual -= 1

        } else {
            itemAtual += 1
        }

        if(itemAtual >= quantidadeItens) {
            itemAtual = 0

        }
        if(itemAtual < 0) {
            itemAtual = quantidadeItens - 1

        }

        itens[itemAtual].scrollIntoView({
            inline: 'center',
            behavior: 'smooth'
        })
    })
})