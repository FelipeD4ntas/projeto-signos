const form = document.querySelector('form');
const saida = document.createElement('p');
const box_saida = document.getElementById('box-saida');
const box_sobre = document.querySelector('.box-sobre');
const box_aviso = document.querySelector('#aviso');
const aviso = document.createElement('p');
const sobre = document.createElement('div');
const img = document.createElement('img');
const box_imagens = document.getElementsByClassName('box-imagens')[0];
const status_signo = document.createElement('p');
const box_status = document.getElementById('box-status');

img.setAttribute('class', 'imagens');
saida.setAttribute('id', 'resultado');
sobre.setAttribute('id', 'sobre_signo')
status_signo.setAttribute('id', 'status');
box_saida.appendChild(saida);
box_status.appendChild(status_signo);
box_imagens.appendChild(img);
box_sobre.appendChild(sobre);
box_aviso.appendChild(aviso);


// Fundos 
import { mudou1, mudou2, mudou3, mudou4 } from './fundo.js';
// Signos
import coleção_signos from './dados_signos.js';
// Função para verificar o range das datas
import retorna_signo from './funcao.js';
// Função para escolher a descrição de acordo com o nome do signo
import retornaDetalhesSigno from './funçãoRetornaDetalhes.js';

//função para alternar entre a foto do signo e sua descrição
function virou() {
    let medidas = img.getBoundingClientRect();
    let altura = medidas.height;
    box_sobre.style.display = 'block';
    box_sobre.style.maxHeight = `${altura}px`;
    sobre.style.opacity = '1';
    sobre.style.zIndex = '1';
    img.style.opacity = '0';
    img.style.zIndex = '-1';
};

function revirou() {
    box_sobre.style.display = 'none';
    sobre.style.opacity = '0';
    sobre.style.zIndex = '-1';
    img.style.opacity = '1';
    img.style.zIndex = '1';
};

function obtendoData() {
    const datas = {
        dia: document.getElementById('dia').value,
        mes: document.getElementById('mes').value,
        ano: document.getElementById('ano').value
    };
    const { dia, mes, ano } = datas;
    const dia_vazio = dia.length == 0;
    const mes_vazio = mes.length == 0;
    const ano_vazio = ano.length == 0;
    const dataPreenchida = dia_vazio || mes_vazio || ano_vazio;
    const dataLimite = dia > 31 || mes > 12 || dia <= 0 || mes <= 0 || ano <= 0;
    const data_app = new Date(`${ano}/${mes}/${dia} 00:00:00`);
    const nome_signo = retorna_signo(coleção_signos, data_app);

    verifica_e_RetornaSigno(dataPreenchida, dataLimite, nome_signo);
    retornaDetalhesSigno(nome_signo, status_signo, img, sobre);
};

function verifica_e_RetornaSigno(dataPreenchida, dataLimite, nome_signo) {
    if (dataPreenchida) {
        status_signo.style.display = 'none';
        saida.style.display = 'none';
        aviso.style.display = 'none';
        img.style.transform = 'scale(0)';
        box_sobre.style.opacity = '0';
        box_imagens.style.zIndex = '-1';
        alert('[ATENÇÃO] É necessário digitar Dia, Mês e Ano.');
    } else if (dataLimite) {
        status_signo.style.display = 'none';
        saida.style.display = 'none';
        aviso.style.display = 'none';
        img.style.transform = 'scale(0)';
        box_sobre.style.opacity = '0';
        box_imagens.style.zIndex = '-1';
        alert('[ATENÇÃO] Você digitou uma data inválida!');
    } else {
        img.addEventListener('click', virou);
        box_sobre.addEventListener('click', revirou);
        status_signo.style.display = 'inline-block';
        aviso.style.display = 'block';
        sobre.style.opacity = '0';
        sobre.style.zIndex = '-1';
        img.style.opacity = '1';
        img.style.zIndex = '1';
        img.style.transform = 'scale(1)';
        box_sobre.style.display = 'none';
        box_sobre.style.opacity = '1';
        box_imagens.style.zIndex = '1';
        exibindoInformacoesDoSigno(nome_signo);
    };
};

function exibindoInformacoesDoSigno(nome_signo) {
    saida.style.display = 'inline-block';
    saida.innerHTML = `Seu signo é: <span>${nome_signo}</span>`;
    aviso.innerHTML = `Clique na foto de seu signo para saber mais!`
};

function clicou(event) {
    event.preventDefault();
    obtendoData();
    virou();
    revirou(); 
};

form.addEventListener('submit', clicou);