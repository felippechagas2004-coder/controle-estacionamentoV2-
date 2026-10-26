const form = document.getElementById('form-cadastro');
const mensagemErro = document.getElementById('mensagem-erro');

// Placa antiga (ABC1234) ou Mercosul (ABC1D23), já sem hífen e em maiúsculas.
const REGEX_PLACA = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;

function mostrarErro(texto) {
    mensagemErro.textContent = texto;
    mensagemErro.hidden = false;
}

function limparErro() {
    mensagemErro.textContent = '';
    mensagemErro.hidden = true;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    limparErro();

    // .trim() tira espaços sobrando no começo e no fim.
    const placa = normalizarPlaca(document.getElementById('placa').value);
    const vaga = document.getElementById('vaga').value.trim();

    // Validações: se falhar, mostra o erro na tela e para por aqui (return).
    if (!REGEX_PLACA.test(placa)) {
        mostrarErro('Placa inválida. Use o formato ABC-1234 ou ABC1D23.');
        return;
    }
    if (placaJaCadastrada(placa)) {
        mostrarErro('Essa placa já possui uma vaga reservada.');
        return;
    }
    if (vagaJaOcupada(vaga)) {
        mostrarErro('Essa vaga já está ocupada. Escolha outra.');
        return;
    }

    const novoVeiculo = {
        id: gerarId(),
        proprietario: document.getElementById('proprietario').value.trim(),
        bloco: document.getElementById('bloco').value.trim(),
        apartamento: document.getElementById('apartamento').value.trim(),
        veiculo: document.getElementById('veiculo').value.trim(),
        cor: document.getElementById('cor').value.trim(),
        placa,
        vaga,
        entrada: new Date().toLocaleString('pt-BR')
    };

    console.log('Cadastro de reserva realizado com sucesso:', novoVeiculo);

    salvarVeiculo(novoVeiculo);

    alert('Reserva de vaga cadastrada com sucesso!');

    window.location.href = 'index.html';
});
