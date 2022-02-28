function verifica_data_range(data, data_inicio, data_fim, tipo_comparacao) {
    if (tipo_comparacao == 'and') {
        return (data >= data_inicio && data <= data_fim);
    } else if (tipo_comparacao == 'or') {
        return (data >= data_inicio || data <= data_fim);
    }
}

// Função de retornar o nome do signo
function retorna_signo(signos, data) {
    let ano = data.getFullYear();

    for (let signo of signos) {
        const { DataInicio, DataFim, Nome } = signo;

        let data_inicio_signo = new Date(`${ano}/${DataInicio} 00:00:00`);
        let data_fim_signo = new Date(`${ano}/${DataFim} 23:59:59`);

        let tipo_comparacao = DataInicio == '12/22' ? 'or' : 'and';

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) {
            return Nome;
        };
    };
};

export default retorna_signo;