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


function clicou() {
    let dia_nasc = document.getElementById('dia').value;
    let mes_nasc = document.getElementById('mes').value;
    let ano_nasc = document.getElementById('ano').value;
    let data_app = new Date(`${ano_nasc}/${mes_nasc}/${dia_nasc} 00:00:00`);
    let nome_signo = retorna_signo(coleção_signos, data_app);

    //Exibindo a foto de acordo com o signo
    if (dia_nasc.length == 0 || mes_nasc.length == 0 || ano_nasc.length == 0) {
        window.alert('[ATENÇÃO] É necessário digitar Dia, Mês e Ano.');
    } else if (dia_nasc > 31 || mes_nasc > 12) {
        status_signo.style.display = 'none';
        saida.style.display = 'none';
        img.style.transform = 'scale(0)';
        window.alert('[ATENÇÃO] Você digitou uma data inválida!');
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

        //switch para escolher a descrição de acordo com o nome do signo
        switch (nome_signo) {
            case 'Aquário':
                status_signo.innerHTML = `Independente e Simpático`;
                img.setAttribute('src', 'imagens/aquarius.jpg');
                sobre.innerHTML = `<p>Os aquarianos são amantes dos desafios e da liberdade!</p>
                <p><span>Características positivas dos aquarianos:</span> idealista e inventivo, o aquariano costuma ser tranquilo e justo, ao mesmo tempo que gosta de transformar e não se acomodar nas situações.</p>
                <p><span>Características negativas dos aquarianos:</span> por ser individualista e desapegado, muitos consideram o aquariano frio e sem coração, além de distante, rebelde e imprevisível.</p>
                <p>É talvez o signo mais individualista do zodíaco.</p>`;
                break
            case 'Peixes':
                status_signo.innerHTML = `Imaginativo e Sensível`;
                img.setAttribute('src', 'imagens/peixes.jpg');
                sobre.innerHTML = `<p>Emocionais e espiritualizados, esses são os piscianos.</p>
                <p><span>Características positivas dos piscianos:</span> ouvintes natos, são confiáveis, intuitivos, prestativos e preocupados com os demais. São adaptáveis e simpáticos, os tornando bem sociáveis.</p>
                <p><span>Características negativas dos piscianos:</span> a sensibilidade aflorada pode os tornar emocionais demais, tendendo para a depressão, os tornando muito temperamentais e rancorosos. São avoados, escapistas da realidade e por confiarem muito nos outros também costumam ser indecisos e inocentes.</p>
                <p>Peixes é o signo mais sonhador e sensível do zodíaco.</p>`;
                break
            case 'Áries':
                status_signo.innerHTML = `Aventureiro e Energético`;
                img.setAttribute('src', 'imagens/aries.jpg');
                sobre.innerHTML = `<p>Os arianos costumam ser individualistas e espontâneos!</p>
                <p>Além disso, são regidos pelo planeta Marte, o que faz com que eles tenham “um pouco” de impaciência.</p>
                <p><span>Características positivas dos arianos:</span> se coloca em primeiro lugar, mas sem esquecer dos demais à sua volta! Motiva as pessoas e é prestativo, além de perseverante e apaixonado.</p>
                <p><span>Características negativas dos arianos:</span> sua agitação faz com que o ariano normalmente seja inquieto, impulsivo ou inconsequente. Por pensar muito nele próprio também é às vezes taxado de egoísta.</p>
                <p>Muitas vezes, o signo de Áries é considerado o signo mais nervoso do zodíaco!</p>`;
                break
            case 'Touro':
                status_signo.innerHTML = `Persistente e Confiável`;
                img.setAttribute('src', 'imagens/touro.jpg');
                sobre.innerHTML = `<p>Os taurinos são esforçados e práticos!</p>
                <p>Além disso, são regidos pelo planeta Vênus, e por isso admiram muito a beleza das coisas.</p>
                <p><span>Características positivas dos taurinos:</span> cuidadoso com tudo e com todos, é paciente e produtivo. Desse modo, são pessoas em que se podem confiar e costumam ser muito fiéis.</p>
                <p><span>Características negativas dos taurinos:</span> a teimosia é característica nata de um taurino. Visto que são muito persistentes e obstinado, querem cuidar de tudo e podem se mostrar centralizadores, inflexíveis e materialistas.</p>
                <p>Isto posto, o signo de Touro é o mais teimoso do zodíaco!</p>`;
                break
            case 'Gêmeos':
                status_signo.innerHTML = `Intelectual e Carinhoso`;
                img.setAttribute('src', 'imagens/gemeos.jpg');
                sobre.innerHTML = `<p>Os geminianos são extrovertidos e amigões!</p>
                <p>Ainda, são regidos pelo planeta Mercúrio, o que traz grande capacidade de adaptação a eles.</p>
                <p><span>Características positivas dos geminianos:</span> animados e comunicativos, eles tem a mente aberta e são muito espertos.</p>
                <p><span>Características negativas dos geminianos:</span> podem oscilar muito, tonando-se indecisos, inconstantes, ansiosos e ao mesmo tempo evasivos.</p>
                <p>Dessa forma, o signo de Gêmeos é o mais comunicativo do zodíaco.</p>`;
                break
            case 'Câncer':
                status_signo.innerHTML = `Protetor e Simpático`;
                img.setAttribute('src', 'imagens/cancer.jpg');
                sobre.innerHTML = `<p>A principal marca dos cancerianos é a sensibilidade e o carinho.</p>
                <p>Inclusive, são regidos pela Lua, que é diretamente ligada ao nosso emocional.</p>
                <p><span>Características positivas dos cancerianos:</span> são dedicados e gentis, sempre ouvindo ou cuidando de alguém por perceberam suas emoções e problemas.</p>
                <p><span>Características negativas dos cancerianos:</span> a carência e o mau humor podem surgir a qualquer momento nos cancerianos, que podem se tornar ciumentos ou se vitimizar</p>
                <p>Desta maneira, o signo de Câncer é o mais sensível do zodíaco.</p>`;
                break
            case 'Leão':
                status_signo.innerHTML = `Generoso e Bondoso`;
                img.setAttribute('src', 'imagens/leao.jpg');
                sobre.innerHTML = `<p>Os leoninos são vaidosos e confiantes.</p>
                <p><span>Características positivas dos leoninos:</span> inteligentes e corajosos, são líderes natos. Por outro lado, são expressivos e determinados: quando colocam algo na mente, pode ter certeza que vão até o fim para conquistá-la.</p>
                <p><span>Características negativas dos leoninos:</span> têm a personalidade muito forte, podendo se tornar ambiciosos, mandões ou convencidos demais.</p>
                <p>Sem dúvida, por serem regidos pelo Sol, o nosso astro rei!</p>`;
                break
            case 'Virgem':
                status_signo.innerHTML = `Meticuloso e Prático`;
                img.setAttribute('src', 'imagens/virgem.jpg');
                sobre.innerHTML = `<p>Organizados e analíticos: esses são os virginianos.</p>
                <p><span>Características positivas dos virginianos:</span> observação e eficiência são marcas do virginiano, que é bastante atencioso e sincero com os demais e está sempre resolvendo um problema: seja seu ou dos outros.</p>
                <p><span>Características negativas dos virginianos:</span> ser sistemático torna o virginiano cheio de manias, muito crítico e desconfiado. Também pode torná-los ansiosos e perfeccionistas demais.</p>
                <p>Virgem é o signo mais organizado do zodíaco.</p>`;
                break
            case 'Libra':
                status_signo.innerHTML = `Encantador e Sociável`;
                img.setAttribute('src', 'imagens/libra.jpg');
                sobre.innerHTML = `<p>Clichê dizer, mas o equilíbrio e a justiça definem os librianos.</p>
                <p><span>Características positivas dos librianos:</span> extremamente diplomáticos, são sinceros e buscam ponderar sempre para chegar no melhor resultado. Para isso contam com sua simpatia, boa comunicação e tranquilidade.</p>
                <p><span>Características negativas dos librianos:</span> querer atingir o equilíbrio sempre torna o libriano indeciso, controlador e com muita mania de organização. Também têm dificuldade de dizer não em algumas situações.</p>
                <p>Libra é o signo mais equilibrado e indeciso do zodíaco.</p>`;
                break
            case 'Escorpião':
                status_signo.innerHTML = `Poderoso e Apaixonado`;
                img.setAttribute('src', 'imagens/escorpiao.jpg');
                sobre.innerHTML = `<p>Atraente e intenso: esse é o escorpiano.</p>
                <p><span>Características positivas dos escorpianos:</span> de uma auto-confiança invejável (a não ser pelos leoninos…), têm muita intuição e um instinto protetor maravilhoso. São dedicados e apaixonados.</p>
                <p><span>Características negativas dos escorpianos:</span> sua boa memória, ciúmes e às vezes obsessão fazem com que o nunca esqueçam do que lhe fizeram, se tornando vingativos e rancorosos.</p>
                <p>É provável que Escorpião seja o signo mais intenso do zodíaco!</p>`;
                break
            case 'Sagitário':
                status_signo.innerHTML = `Sincero e Livre`;
                img.setAttribute('src', 'imagens/sagitario.jpg');
                sobre.innerHTML = `<p>Independência e liberdade marcam os sagitarianos.</p>
                <p><span>Características positivas dos sagitarianos:</span> são talentosos, inteligentes e justos. São pessoas estimulantes, que gostam de se divertir e têm bastante espontaneidade e vitalidade.</p>     
                <p><span>Características negativas dos sagitarianos:</span> podem aparentar arrogância por saberem demais, rígidos com si mesmos e os outros, um pouco impacientes e sarcásticos.</p>
                <p>O signo mais sincero do zodíaco é Sagitário.</p>`;
                break
            case 'Capricórnio':
                status_signo.innerHTML = `Cômico e Ambicioso`;
                img.setAttribute('src', 'imagens/capricornio.jpg');
                sobre.innerHTML = `<p>A responsabilidade é o ponto forte do capricorniano.</p>
                <p><span>Características positivas dos capricornianos:</span> são persistentes e determinados. Sua organização e ambição natas fazem com que sejam muito eficientes e trabalhadores.</p>
                <p><span>Características negativas dos capricornianos:</span> muito certinhos, podem se tornar rígidos e orgulhosos demais. Por serem muito práticos, também podem se tornar frios e pessimistas.</p>
                <p>Quando falamos de personalidades dos signos, o signo mais responsável do zodíaco é Capricórnio.</p>`;
                break
        }
        saida.style.display = 'inline-block';
        saida.innerHTML = `Seu signo é: <span>${nome_signo}</span>`;
        aviso.innerHTML = `Clique na foto de seu signo para saber mais!`
    }
}