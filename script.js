function escolherPersonagem(personagem) {
    let mensagem;
    switch (personagem) {
        case 'cavalheiro':
            mensagem ='⚔️ Você escolheu a classe Cavalheiro! Pronto para a Batalha!';
        break;
        case 'mago':
            mensagem = '✨ Você escolheu a classe Mago! Prepare-se para soltar magia e feitoços!';
            break;
        case 'orc':
            mensagem = '👹 Você escolheu a raça Orc! Prepare-se para destruir algumas cabeças!';
            break;
        default:
            mensagem = '⚠️ Escolha inválida!';
    }
    document.getElementById("mensagem").innerText = mensagem;
}