function carregar() {
    var msg = document.getElementById('msg');
    var saudacao = document.getElementById('saudacao')
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    
  
   msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        //Bom dia!!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        saudacao.innerHTML = 'Bom Dia!'
       

    }else if(hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        saudacao.innerHTML = 'Boa Tarde!'

    }else {
        //Boa Noite!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        saudacao.innerHTML = 'Boa Noite!'
    }
}
