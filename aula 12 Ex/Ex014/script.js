function carregar() {
   var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'Manhã-circulo-removebg-preview.png'
        document.body.style.background = '#717749'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde-circulo-removebg-preview.png'
        document.body.style.background = '#a73c08'
    } else {
        //BOA NOITE!
        img.src = 'noite-circulo-removebg-preview.png'
        document.body.style.background = '#1a2a4e'
    }
}

