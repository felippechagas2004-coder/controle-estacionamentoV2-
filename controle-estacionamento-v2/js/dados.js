// Camada de dados: tudo que mexe no localStorage fica aqui.
// As outras páginas só chamam essas funções.

// Chave nova para não misturar com os dados da versão anterior do projeto.
const STORAGE_KEY = 'estacionamento_reservas';

function obterVeiculos() {
    // try/catch: se o JSON salvo estiver corrompido, o site não quebra.
    try {
        const dados = localStorage.getItem(STORAGE_KEY);
        return dados ? JSON.parse(dados) : [];
    } catch (erro) {
        console.error('Não foi possível ler os dados salvos:', erro);
        return [];
    }
}

function gravarVeiculos(lista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

function salvarVeiculo(veiculoObj) {
    const veiculos = obterVeiculos();
    veiculos.push(veiculoObj);
    gravarVeiculos(veiculos);
}

// Remove pelo id (único) e não pela placa, para nunca apagar mais de um registro.
function removerVeiculo(id) {
    const veiculos = obterVeiculos().filter(v => v.id !== id);
    gravarVeiculos(veiculos);
}

// Gera um id simples e praticamente único para cada reserva.
function gerarId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// "abc-1234" e "ABC1234" passam a ser a mesma placa: ABC1234
function normalizarPlaca(placa) {
    return placa.toUpperCase().replace(/[\s-]/g, '');
}

function placaJaCadastrada(placa) {
    const alvo = normalizarPlaca(placa);
    return obterVeiculos().some(v => normalizarPlaca(v.placa) === alvo);
}

function vagaJaOcupada(vaga) {
    const alvo = vaga.trim().toLowerCase();
    return obterVeiculos().some(v => v.vaga.trim().toLowerCase() === alvo);
}
