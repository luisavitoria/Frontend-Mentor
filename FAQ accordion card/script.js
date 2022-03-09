const botoes = document.querySelectorAll('#botao')

botoes.forEach(elemento => {
    elemento.onclick = evento => {
    evento.preventDefault()

    const paragrafoAdicionar = elemento.nextElementSibling
        
    if(paragrafoAdicionar.style.display == 'block') {
        paragrafoAdicionar.style.display = 'none'
        elemento.style.color = 'black'
        elemento.style.fontWeight = '100'
    }else {
        paragrafoAdicionar.style.display = 'block'
        elemento.style.color = "hsl(238, 29%, 16%)"
        elemento.style.fontWeight = '800'
    }   
        
    }
})