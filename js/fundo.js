let temas = document.getElementsByClassName('tema');
let fundo = document.getElementsByClassName('fundo')[0];

temas[0].addEventListener('click', mudou1);
temas[1].addEventListener('click', mudou2);
temas[2].addEventListener('click', mudou3);
temas[3].addEventListener('click', mudou4);

function mudou1() {
    fundo.style.backgroundImage = 'url("imagens/fundo-1.gif")'
}

function mudou2() {
    fundo.style.backgroundImage = 'url("imagens/fundo-2.gif")'
}

function mudou3() {
    fundo.style.backgroundImage = 'url("imagens/fundo-3.gif")'
}

function mudou4() {
    fundo.style.backgroundImage = 'url("imagens/fundo-4.gif")'
}

export {mudou1, mudou2, mudou3, mudou4};