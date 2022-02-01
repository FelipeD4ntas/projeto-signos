let btn = document.getElementsByTagName('button')[0];
let saida = document.createElement('p');
let box_saida = document.querySelector('#box-saida');
let img = document.createElement('img');
let box_imagens = document.getElementsByClassName('box-imagens')[0];
let status_signo = document.createElement('p');
let box_status = document.querySelector('#box-status');
img.setAttribute('class', 'imagens');
saida.setAttribute('id', 'resultado');
status_signo.setAttribute('id', 'status');
box_saida.appendChild(saida);
box_status.appendChild(status_signo);
box_imagens.appendChild(img);
btn.addEventListener('click', clicou)

// Signos: 
import coleção_signos from "./dados.js";
// Função para verificar o range das datas
import retorna_signo from "./funcao.js";

function clicou() {
    let dia_nasc = String(document.querySelector('#dia').value);
    let mes_nasc = String(document.querySelector('#mes').value);
    let ano_nasc = String(document.querySelector('#ano').value);
    let data_app = new Date(`${ano_nasc}-${mes_nasc}-${dia_nasc} 00:00:00`);
    const nome_signo = retorna_signo(coleção_signos, data_app);

    //Exibindo a foto de acordo com o signo
    if (dia_nasc.length == 0 || mes_nasc.length == 0 || ano_nasc.length == 0) {
        window.alert('[ATENÇÃO] É necessário digitar Dia, Mês e Ano.');
    } else {
        switch (nome_signo) {
            case 'Aquário':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Independente e Simpático`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/aquarius.jpg');
                break
            case 'Peixes':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Imaginativo e Sensível`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/peixes.jpg');
                break
            case 'Áries':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Aventureiro e Energético`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/aries.jpg');
                break
            case 'Touro':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Persistente e Confiável`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/touro.jpg');
                break
            case 'Gêmeos':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Intelectual e Carinhoso`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/gemeos.jpg');
                break
            case 'Câncer':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Protetor e Simpático`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/cancer.jpg');
                break
            case 'Leão':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Generoso e Bondoso`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/leao.jpg');
                break
            case 'Virgem':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Meticuloso e Prático`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/virgem.jpg');
                break
            case 'Libra':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Encantador e Sociável`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/libra.jpg');
                break
            case 'Escorpião':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Poderoso e Apaixonado`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/escorpiao.jpg');
                break
            case 'Sagitário':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Sincero e Livre`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/sagitario.jpg');
                break
            case 'Capricórnio':
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Cômico e Ambicioso`;
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/capricornio.jpg');
                break
            default:
                status_signo.style.display = 'inline-block';
                status_signo.innerHTML = `Você está usando um Iphone<br>Tente ver por um celular Android.`;
        }
        saida.style.display = 'inline-block';
        saida.innerHTML = `Seu signo é: <span>${nome_signo}</span>`;
    }

}