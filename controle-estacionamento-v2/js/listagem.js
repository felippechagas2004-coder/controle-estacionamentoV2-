const tabela = document.getElementById('tabela-veiculos');

// Cria uma <td> usando textContent. Assim, qualquer texto digitado pelo usuário
// (inclusive tags HTML) aparece como texto e não é executado como código.
function criarCelula(texto) {
    const td = document.createElement('td');
    td.textContent = texto;
    return td;
}

function renderizarTabela() {
    const veiculos = obterVeiculos();

    tabela.innerHTML = '';

    if (veiculos.length === 0) {
        const tr = document.createElement('tr');
        const td = criarCelula('Nenhuma vaga cadastrada no momento.');
        td.colSpan = 7;
        td.className = 'tabela-vazia';
        tr.appendChild(td);
        tabela.appendChild(tr);
        return;
    }

    veiculos.forEach(v => {
        const tr = document.createElement('tr');

        const tdVaga = document.createElement('td');
        const negrito = document.createElement('strong');
        negrito.textContent = v.vaga;
        tdVaga.appendChild(negrito);

        const tdAcoes = document.createElement('td');
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'btn-excluir';
        botao.textContent = 'Liberar Vaga';
        botao.addEventListener('click', () => excluir(v.id));
        tdAcoes.appendChild(botao);

        tr.appendChild(tdVaga);
        tr.appendChild(criarCelula(v.proprietario));
        tr.appendChild(criarCelula(`Apto ${v.apartamento} (${v.bloco})`));
        tr.appendChild(criarCelula(`${v.veiculo} - ${v.cor}`));
        tr.appendChild(criarCelula(v.placa));
        tr.appendChild(criarCelula(v.entrada));
        tr.appendChild(tdAcoes);

        tabela.appendChild(tr);
    });
}

function excluir(id) {
    if (confirm('Deseja realmente encerrar e liberar a reserva desta vaga?')) {
        removerVeiculo(id);
        renderizarTabela();
    }
}

document.addEventListener('DOMContentLoaded', renderizarTabela);
