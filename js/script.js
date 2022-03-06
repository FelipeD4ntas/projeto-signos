let btn = document.getElementsByTagName('button')[0];
let saida = document.createElement('p');
let box_saida = document.getElementById('box-saida');
let box_sobre = document.querySelector('.box-sobre');
let box_aviso = document.querySelector('#aviso');
let aviso = document.createElement('p');
let sobre = document.createElement('div');
let img = document.createElement('img');
let box_imagens = document.getElementsByClassName('box-imagens')[0];
let status_signo = document.createElement('p');
let box_status = document.getElementById('box-status');
img.setAttribute('class', 'imagens');
saida.setAttribute('id', 'resultado');
sobre.setAttribute('id', 'sobre_signo')
status_signo.setAttribute('id', 'status');
box_saida.appendChild(saida);
box_status.appendChild(status_signo);
box_imagens.appendChild(img);
box_sobre.appendChild(sobre);
box_aviso.appendChild(aviso);
btn.addEventListener('click', clicou)

// Fundos 
import { mudou1, mudou2, mudou3, mudou4 } from './fundo.js';
// Signos
import coleção_signos from './dados.js';
// Função para verificar o range das datas
import retorna_signo from './funcao.js';
// Função para escolher a descrição de acordo com o nome do signo
import retornaDetalhesSigno from './funçãoRetornaDetalhes.js';


function clicou() {
    let datas = {
        dia: document.getElementById('dia').value,
        mes: document.getElementById('mes').value,
        ano: document.getElementById('ano').value
    };
    const { dia, mes, ano } = datas;
    let dia_vazio = dia.length == 0;
    let mes_vazio = mes.length == 0;
    let ano_vazio = ano.length == 0;
    let dataPreenchida = dia_vazio || mes_vazio || ano_vazio;
    let dataLimite = dia > 31 || mes > 12;
    let data_app = new Date(`${ano}/${mes}/${dia} 00:00:00`);
    let nome_signo = retorna_signo(coleção_signos, data_app);

    //Exibindo a foto de acordo com o signo
    if (dataPreenchida) {
        alert('[ATENÇÃO] É necessário digitar Dia, Mês e Ano.');
    } else if (dataLimite) {
        status_signo.style.display = 'none';
        saida.style.display = 'none';
        aviso.style.display = 'none';
        img.style.transform = 'scale(0)';
        alert('[ATENÇÃO] Você digitou uma data inválida!');
    } else {
        img.style.transform = 'scale(1)';
        status_signo.style.display = 'inline-block';
        img.addEventListener('click', virou);
        box_sobre.addEventListener('click', revirou);
        box_sobre.style.display = 'none';
        sobre.style.opacity = '0';
        sobre.style.zIndex = '-1';
        img.style.opacity = '1';
        img.style.zIndex = '1';

        //função para alternar entre a foto do signo e sua descrição
        function virou() {
            let medidas = img.getBoundingClientRect();
            let altura = medidas.height;
            box_sobre.style.display = 'block';
            img.style.opacity = '0';
            img.style.zIndex = '-1';
            sobre.style.opacity = '1';
            sobre.style.zIndex = '1';
            box_sobre.style.maxHeight = `${altura}px`;
        }

        function revirou() {
            box_sobre.style.display = 'none';
            sobre.style.opacity = '0';
            sobre.style.zIndex = '-1';
            img.style.opacity = '1';
            img.style.zIndex = '1';
        }

        //Função para escolher a descrição de acordo com o nome do signo
        retornaDetalhesSigno(nome_signo, status_signo, img, sobre);

        saida.style.display = 'inline-block';
        saida.innerHTML = `Seu signo é: <span>${nome_signo}</span>`;
        aviso.innerHTML = `Clique na foto de seu signo para saber mais!`
    }
}