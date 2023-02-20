const mudarTema = document.getElementById('tema');
let temaEscuro = false;

mudarTema.addEventListener('click', () => {
    if(temaEscuro === false) {
        console.log('Tema mudado para escuro.')
        temaEscuro = true
    } else {
        console.log('Tema mudado para claro.')
        temaEscuro = false
    }
})