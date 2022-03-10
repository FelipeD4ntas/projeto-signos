const temas = document.getElementsByClassName('tema');
const body = document.body
const fundo = document.getElementsByClassName('fundo')[0];

temas[0].addEventListener('click', mudou1);
temas[1].addEventListener('click', mudou2);
temas[2].addEventListener('click', mudou3);
temas[3].addEventListener('click', mudou4);

function mudou1() {
    temas[0].style.backgroundColor = 'rgb(0, 221, 228)';
    temas[1].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[2].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[3].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    fundo.style.backgroundImage = 'url("imagens/fundo-1.gif")';
    const script = document.createElement('script');
    script.setAttribute('src', 'js/tema_1.js');
    body.appendChild(script);
}

function mudou2() {
    temas[0].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[1].style.backgroundColor = 'rgb(0, 221, 228)';
    temas[2].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[3].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    fundo.style.backgroundImage = 'url("imagens/fundo-2.gif")';
    const script = document.createElement('script');
    script.setAttribute('src', 'js/tema_2.js');
    body.appendChild(script);
}

function mudou3() {
    temas[0].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[1].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[2].style.backgroundColor = 'rgb(0, 221, 228)';
    temas[3].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    fundo.style.backgroundImage = 'url("imagens/fundo-3.gif")';
    const script = document.createElement('script');
    script.setAttribute('src', 'js/tema_3.js');
    body.appendChild(script);
}

function mudou4() {
    temas[0].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[1].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[2].style.backgroundColor = 'rgba(88, 0, 100, 0.502)';
    temas[3].style.backgroundColor = 'rgb(0, 221, 228)';
    fundo.style.backgroundImage = 'url("imagens/fundo-4.gif")';
    const script = document.createElement('script');
    script.setAttribute('src', 'js/tema_4.js');
    body.appendChild(script);
}

export { mudou1, mudou2, mudou3, mudou4 };