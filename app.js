function iniciarJuego(){
    document.getElementById('pag_principal').style.display = 'none';
    document.getElementById('aparecer_container').style.display = 'none';
    document.getElementById('aparecer_juego').style.display = '';
}

function agregarPalabra(){
    document.getElementById('pag_principal').style.display = 'none';
    document.getElementById('aparecer_container').style.display = '';
    document.getElementById('aparecer_juego').style.display = 'none';
}

function desistir(){
    document.getElementById('pag_principal').style.display = '';
    document.getElementById('aparecer_container').style.display = 'none';
    document.getElementById('aparecer_juego').style.display = 'none';
}