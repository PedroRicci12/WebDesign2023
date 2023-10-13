function myFunc() {
    console.log('Teste');
}

function chamaAlerta() {
    alert('Teste');
}

function playExplosion() {
    document.querySelector('#explosion').play();
}

function mudaTexto() {
    document.querySelector('#btn2').innerHTML = 'Texto alterado';
    playExplosion();
}

document.querySelector('#btn1').addEventListener('click', myFunc);
document.querySelector('#btn2').onclick = mudaTexto;
document.querySelector('#btnAudio').addEventListener('click', playExplosion);