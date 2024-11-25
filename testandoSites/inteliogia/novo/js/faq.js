
const btnVerMais = document.querySelector('#abrirMais')
const perguntasOcultas = document.querySelectorAll('.oculto')

btnVerMais.addEventListener('click', () => {
    perguntasOcultas.forEach((p) => {
        p.classList.toggle('oculto')
    })

    if (btnVerMais.innerHTML == 'Ver mais') {
        btnVerMais.innerHTML = 'Ver menos'
    } else {
        btnVerMais.innerHTML = 'Ver mais'
    }
})