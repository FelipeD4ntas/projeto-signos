let btn = document.getElementsByTagName('button')[0];
let saida = document.createElement('p');
let box_saida = document.querySelector('#box-saida');
saida.setAttribute('id', 'resultado');
box_saida.appendChild(saida);
btn.addEventListener('click', clicou)

function clicou() {
    // Signos: 
    let coleção_signos = [
        { Nome: "Aquário", DataInicio: "01-20", DataFim: "02-18" },
        { Nome: "Peixes", DataInicio: "02-19", DataFim: "03-20" },
        { Nome: "Áries", DataInicio: "03-21", DataFim: "04-19" },
        { Nome: "Touro", DataInicio: "04-20", DataFim: "05-20" },
        { Nome: "Gêmeos", DataInicio: "05-21", DataFim: "06-21" },
        { Nome: "Câncer", DataInicio: "06-22", DataFim: "07-23" },
        { Nome: "Leão", DataInicio: "07-24", DataFim: "08-22" },
        { Nome: "Virgem", DataInicio: "08-23", DataFim: "09-22" },
        { Nome: "Libra", DataInicio: "09-23", DataFim: "10-22" },
        { Nome: "Escorpião", DataInicio: "10-23", DataFim: "11-21" },
        { Nome: "Sagitário", DataInicio: "11-22", DataFim: "12-21" },
        { Nome: "Capricórnio", DataInicio: "12-22", DataFim: "01-19" }
    ];

    // Função para verificar o range das datas
    const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
        if (tipo_comparacao == "and") {
            return (data >= data_inicio && data <= data_fim);
        } else if (tipo_comparacao == "or") {
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
    let horoscopo = [
        document.querySelector('#aquarius'),
        document.querySelector('#peixes'),
        document.querySelector('#aries'),
        document.querySelector('#touro'),
        document.querySelector('#gemeos'),
        document.querySelector('#cancer'),
        document.querySelector('#leao'),
        document.querySelector('#virgem'),
        document.querySelector('#libra'),
        document.querySelector('#escorpiao'),
        document.querySelector('#sagitario'),
        document.querySelector('#capricornio')
    ]
    const nome_signo = retorna_signo(coleção_signos, data_app);

    
    switch (nome_signo) {
        case 'Aquário':
            horoscopo[0].style.transform = "scale(1)";
            horoscopo[0].style.display = "block";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Peixes':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.transform = "scale(1)";
            horoscopo[1].style.display = "block";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Áries':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.transform = "scale(1)";
            horoscopo[2].style.display = "block";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Touro':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.transform = "scale(1)";
            horoscopo[3].style.display = "block";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Gêmeos':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.transform = "scale(1)";
            horoscopo[4].style.display = "block";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Câncer':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.transform = "scale(1)";
            horoscopo[5].style.display = "block";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Leão':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.transform = "scale(1)";
            horoscopo[6].style.display = "block";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Virgem':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.transform = "scale(1)";
            horoscopo[7].style.display = "block";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Libra':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.transform = "scale(1)";
            horoscopo[8].style.display = "block";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Escorpião':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.transform = "scale(1)";
            horoscopo[9].style.display = "block";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.display = "none";
            break
        case 'Sagitário':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.transform = "scale(1)";
            horoscopo[10].style.display = "block";
            horoscopo[11].style.display = "none";
            break
        case 'Capricórnio':
            horoscopo[0].style.display = "none";
            horoscopo[1].style.display = "none";
            horoscopo[2].style.display = "none";
            horoscopo[3].style.display = "none";
            horoscopo[4].style.display = "none";
            horoscopo[5].style.display = "none";
            horoscopo[6].style.display = "none";
            horoscopo[7].style.display = "none";
            horoscopo[8].style.display = "none";
            horoscopo[9].style.display = "none";
            horoscopo[10].style.display = "none";
            horoscopo[11].style.transform = "scale(1)";
            horoscopo[11].style.display = "block";
            break
    } 
    if (dia_nasc.length == 0 || mes_nasc.length == 0 || ano_nasc.length == 0) {
        window.alert('[ATENÇÃO] É necessário digitar Dia, Mês e Ano.');
    } else {
        saida.style.display = "inline-block";
        saida.innerHTML = `Seu signo é: <span>${nome_signo}</span>`;
    }
   
}