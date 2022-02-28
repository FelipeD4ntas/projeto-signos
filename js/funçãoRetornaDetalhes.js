function retornaDetalhesSigno(signo, status, imagem, sobre) {
    switch (signo) {
        case 'Aquário':
            status.innerHTML = `Independente e Simpático`;
            imagem.setAttribute('src', 'imagens/aquarius.jpg');
            sobre.innerHTML = `<p>Os aquarianos são amantes dos desafios e da liberdade!</p>
            <p><span>Características positivas dos aquarianos:</span> idealista e inventivo, o aquariano costuma ser tranquilo e justo, ao mesmo tempo que gosta de transformar e não se acomodar nas situações.</p>
            <p><span>Características negativas dos aquarianos:</span> por ser individualista e desapegado, muitos consideram o aquariano frio e sem coração, além de distante, rebelde e imprevisível.</p>
            <p>É talvez o signo mais individualista do zodíaco.</p>`;
            break
        case 'Peixes':
            status.innerHTML = `Imaginativo e Sensível`;
            imagem.setAttribute('src', 'imagens/peixes.jpg');
            sobre.innerHTML = `<p>Emocionais e espiritualizados, esses são os piscianos.</p>
            <p><span>Características positivas dos piscianos:</span> ouvintes natos, são confiáveis, intuitivos, prestativos e preocupados com os demais. São adaptáveis e simpáticos, os tornando bem sociáveis.</p>
            <p><span>Características negativas dos piscianos:</span> a sensibilidade aflorada pode os tornar emocionais demais, tendendo para a depressão, os tornando muito temperamentais e rancorosos. São avoados, escapistas da realidade e por confiarem muito nos outros também costumam ser indecisos e inocentes.</p>
            <p>Peixes é o signo mais sonhador e sensível do zodíaco.</p>`;
            break
        case 'Áries':
            status.innerHTML = `Aventureiro e Energético`;
            imagem.setAttribute('src', 'imagens/aries.jpg');
            sobre.innerHTML = `<p>Os arianos costumam ser individualistas e espontâneos!</p>
            <p>Além disso, são regidos pelo planeta Marte, o que faz com que eles tenham “um pouco” de impaciência.</p>
            <p><span>Características positivas dos arianos:</span> se coloca em primeiro lugar, mas sem esquecer dos demais à sua volta! Motiva as pessoas e é prestativo, além de perseverante e apaixonado.</p>
            <p><span>Características negativas dos arianos:</span> sua agitação faz com que o ariano normalmente seja inquieto, impulsivo ou inconsequente. Por pensar muito nele próprio também é às vezes taxado de egoísta.</p>
            <p>Muitas vezes, o signo de Áries é considerado o signo mais nervoso do zodíaco!</p>`;
            break
        case 'Touro':
            status.innerHTML = `Persistente e Confiável`;
            imagem.setAttribute('src', 'imagens/touro.jpg');
            sobre.innerHTML = `<p>Os taurinos são esforçados e práticos!</p>
            <p>Além disso, são regidos pelo planeta Vênus, e por isso admiram muito a beleza das coisas.</p>
            <p><span>Características positivas dos taurinos:</span> cuidadoso com tudo e com todos, é paciente e produtivo. Desse modo, são pessoas em que se podem confiar e costumam ser muito fiéis.</p>
            <p><span>Características negativas dos taurinos:</span> a teimosia é característica nata de um taurino. Visto que são muito persistentes e obstinado, querem cuidar de tudo e podem se mostrar centralizadores, inflexíveis e materialistas.</p>
            <p>Isto posto, o signo de Touro é o mais teimoso do zodíaco!</p>`;
            break
        case 'Gêmeos':
            status.innerHTML = `Intelectual e Carinhoso`;
            imagem.setAttribute('src', 'imagens/gemeos.jpg');
            sobre.innerHTML = `<p>Os geminianos são extrovertidos e amigões!</p>
            <p>Ainda, são regidos pelo planeta Mercúrio, o que traz grande capacidade de adaptação a eles.</p>
            <p><span>Características positivas dos geminianos:</span> animados e comunicativos, eles tem a mente aberta e são muito espertos.</p>
            <p><span>Características negativas dos geminianos:</span> podem oscilar muito, tonando-se indecisos, inconstantes, ansiosos e ao mesmo tempo evasivos.</p>
            <p>Dessa forma, o signo de Gêmeos é o mais comunicativo do zodíaco.</p>`;
            break
        case 'Câncer':
            status.innerHTML = `Protetor e Simpático`;
            imagem.setAttribute('src', 'imagens/cancer.jpg');
            sobre.innerHTML = `<p>A principal marca dos cancerianos é a sensibilidade e o carinho.</p>
            <p>Inclusive, são regidos pela Lua, que é diretamente ligada ao nosso emocional.</p>
            <p><span>Características positivas dos cancerianos:</span> são dedicados e gentis, sempre ouvindo ou cuidando de alguém por perceberam suas emoções e problemas.</p>
            <p><span>Características negativas dos cancerianos:</span> a carência e o mau humor podem surgir a qualquer momento nos cancerianos, que podem se tornar ciumentos ou se vitimizar</p>
            <p>Desta maneira, o signo de Câncer é o mais sensível do zodíaco.</p>`;
            break
        case 'Leão':
            status.innerHTML = `Generoso e Bondoso`;
            imagem.setAttribute('src', 'imagens/leao.jpg');
            sobre.innerHTML = `<p>Os leoninos são vaidosos e confiantes.</p>
            <p><span>Características positivas dos leoninos:</span> inteligentes e corajosos, são líderes natos. Por outro lado, são expressivos e determinados: quando colocam algo na mente, pode ter certeza que vão até o fim para conquistá-la.</p>
            <p><span>Características negativas dos leoninos:</span> têm a personalidade muito forte, podendo se tornar ambiciosos, mandões ou convencidos demais.</p>
            <p>Sem dúvida, por serem regidos pelo Sol, o nosso astro rei!</p>`;
            break
        case 'Virgem':
            status.innerHTML = `Meticuloso e Prático`;
            imagem.setAttribute('src', 'imagens/virgem.jpg');
            sobre.innerHTML = `<p>Organizados e analíticos: esses são os virginianos.</p>
            <p><span>Características positivas dos virginianos:</span> observação e eficiência são marcas do virginiano, que é bastante atencioso e sincero com os demais e está sempre resolvendo um problema: seja seu ou dos outros.</p>
            <p><span>Características negativas dos virginianos:</span> ser sistemático torna o virginiano cheio de manias, muito crítico e desconfiado. Também pode torná-los ansiosos e perfeccionistas demais.</p>
            <p>Virgem é o signo mais organizado do zodíaco.</p>`;
            break
        case 'Libra':
            status.innerHTML = `Encantador e Sociável`;
            imagem.setAttribute('src', 'imagens/libra.jpg');
            sobre.innerHTML = `<p>Clichê dizer, mas o equilíbrio e a justiça definem os librianos.</p>
            <p><span>Características positivas dos librianos:</span> extremamente diplomáticos, são sinceros e buscam ponderar sempre para chegar no melhor resultado. Para isso contam com sua simpatia, boa comunicação e tranquilidade.</p>
            <p><span>Características negativas dos librianos:</span> querer atingir o equilíbrio sempre torna o libriano indeciso, controlador e com muita mania de organização. Também têm dificuldade de dizer não em algumas situações.</p>
            <p>Libra é o signo mais equilibrado e indeciso do zodíaco.</p>`;
            break
        case 'Escorpião':
            status.innerHTML = `Poderoso e Apaixonado`;
            imagem.setAttribute('src', 'imagens/escorpiao.jpg');
            sobre.innerHTML = `<p>Atraente e intenso: esse é o escorpiano.</p>
            <p><span>Características positivas dos escorpianos:</span> de uma auto-confiança invejável (a não ser pelos leoninos…), têm muita intuição e um instinto protetor maravilhoso. São dedicados e apaixonados.</p>
            <p><span>Características negativas dos escorpianos:</span> sua boa memória, ciúmes e às vezes obsessão fazem com que o nunca esqueçam do que lhe fizeram, se tornando vingativos e rancorosos.</p>
            <p>É provável que Escorpião seja o signo mais intenso do zodíaco!</p>`;
            break
        case 'Sagitário':
            status.innerHTML = `Sincero e Livre`;
            imagem.setAttribute('src', 'imagens/sagitario.jpg');
            sobre.innerHTML = `<p>Independência e liberdade marcam os sagitarianos.</p>
            <p><span>Características positivas dos sagitarianos:</span> são talentosos, inteligentes e justos. São pessoas estimulantes, que gostam de se divertir e têm bastante espontaneidade e vitalidade.</p>     
            <p><span>Características negativas dos sagitarianos:</span> podem aparentar arrogância por saberem demais, rígidos com si mesmos e os outros, um pouco impacientes e sarcásticos.</p>
            <p>O signo mais sincero do zodíaco é Sagitário.</p>`;
            break
        case 'Capricórnio':
            status.innerHTML = `Cômico e Ambicioso`;
            imagem.setAttribute('src', 'imagens/capricornio.jpg');
            sobre.innerHTML = `<p>A responsabilidade é o ponto forte do capricorniano.</p>
            <p><span>Características positivas dos capricornianos:</span> são persistentes e determinados. Sua organização e ambição natas fazem com que sejam muito eficientes e trabalhadores.</p>
            <p><span>Características negativas dos capricornianos:</span> muito certinhos, podem se tornar rígidos e orgulhosos demais. Por serem muito práticos, também podem se tornar frios e pessimistas.</p>
            <p>Quando falamos de personalidades dos signos, o signo mais responsável do zodíaco é Capricórnio.</p>`;
            break
    };
};

export default retornaDetalhesSigno;