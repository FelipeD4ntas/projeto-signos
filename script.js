let btn = document.getElementsByTagName('button')[0];
let saida = document.createElement('p');
let box_saida = document.querySelector('#box-saida');
let img = document.createElement('img');
let box_imagens = document.getElementsByClassName('box-imagens')[0];
img.setAttribute('class', 'imagens');
saida.setAttribute('id', 'resultado');
box_saida.appendChild(saida);
box_imagens.appendChild(img);
btn.addEventListener('click', clicou)

function clicou() {
    // Signos: 
    let coleção_signos = [
        { Nome: 'Aquário', DataInicio: '01-20', DataFim: '02-18' },
        { Nome: 'Peixes', DataInicio: '02-19', DataFim: '03-20' },
        { Nome: 'Áries', DataInicio: '03-21', DataFim: '04-19' },
        { Nome: 'Touro', DataInicio: '04-20', DataFim: '05-20' },
        { Nome: 'Gêmeos', DataInicio: '05-21', DataFim: '06-21' },
        { Nome: 'Câncer', DataInicio: '06-22', DataFim: '07-23' },
        { Nome: 'Leão', DataInicio: '07-24', DataFim: '08-22' },
        { Nome: 'Virgem', DataInicio: '08-23', DataFim: '09-22' },
        { Nome: 'Libra', DataInicio: '09-23', DataFim: '10-22' },
        { Nome: 'Escorpião', DataInicio: '10-23', DataFim: '11-21' },
        { Nome: 'Sagitário', DataInicio: '11-22', DataFim: '12-21' },
        { Nome: 'Capricórnio', DataInicio: '12-22', DataFim: '01-19' }
    ];

    // Função para verificar o range das datas
    const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
        if (tipo_comparacao == 'and') {
            return (data >= data_inicio && data <= data_fim);
        } else if (tipo_comparacao == 'or') {
            return (data >= data_inicio || data <= data_fim);
        }
    }

    // Função de retornar o nome do signo, usando uma Arrow Function
    const retorna_signo = (signos, data) => {
        let ano = data.getFullYear();

        for (const signo of signos) {
            let data_inicio_signo = new Date(`${ano}-${signo['DataInicio']} 00:00:00`);
            let data_fim_signo = new Date(`${ano}-${signo['DataFim']} 23:59:59`);

            let tipo_comparacao = signo['DataInicio'] == '12-22' ? 'or' : 'and';

            if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) {
                return signo['Nome'];
            }
        }
    }

    let dia_nasc = String(document.querySelector('#dia').value);
    let mes_nasc = String(document.querySelector('#mes').value);
    let ano_nasc = String(document.querySelector('#ano').value);
    let data_app = new Date(`${ano_nasc}-${mes_nasc}-${dia_nasc} 00:00:00`);
    const nome_signo = retorna_signo(coleção_signos, data_app);

    //Escolhendo a foto de acordo com o signo

    if (dia_nasc.length == 0 || mes_nasc.length == 0 || ano_nasc.length == 0) {
        window.alert('[ATENÇÃO] É necessário digitar Dia, Mês e Ano.');
    } else {
        switch (nome_signo) {
            case 'Aquário':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/aquarius.jpg');
                break
            case 'Peixes':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/peixes.jpg');
                break
            case 'Áries':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/aries.jpg');
                break
            case 'Touro':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/touro.jpg');
                break
            case 'Gêmeos':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/gemeos.jpg');
                break
            case 'Câncer':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/cancer.jpg');
                break
            case 'Leão':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/leao.jpg');
                break
            case 'Virgem':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/virgem.jpg');
                break
            case 'Libra':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/libra.jpg');
                break
            case 'Escorpião':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/escorpiao.jpg');
                break
            case 'Sagitário':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/sagitario.jpg');
                break
            case 'Capricórnio':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', 'imagens/capricornio.jpg');
                break
        }
        saida.style.display = 'inline-block';
        saida.innerHTML = `Seu signo é: <span>${nome_signo}</span>`;
    }

}