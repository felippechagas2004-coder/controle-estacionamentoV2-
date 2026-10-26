# Controle de Estacionamento

Sistema Criado para controlar as vagas de estacionamento do meu condomínio.
Feito utilizado as instruções passadas pelo professor usando HTML, CSS e JavaScript 

## Como abrir o projeto

Abra o `index.html` no navegador ou pra facilitar pode utilizar a extensão Live Server do VS Code.

## Estrutura
`index.html`: lista das vagas reservadas
`cadastro.html`: formulário de nova reserva
`css/style.css`: estilos
`js/dados.js`: funções que leem e gravam no localStorage
`js/cadastro.js`: lógica do formulário
`js/listagem.js`: lógica da tabela

## Sobre o projeto

Sistema web para gerenciar as vagas de um condomínio, desenvolvido com HTML, CSS e JavaScript  sem frameworks. Pelo formulário de cadastro, permite o usuario fazer a reserva de uma vaga do seu condominio, onde diante do cadastro é precisso informar o proprietário, bloco, apartamento, modelo e cor do veículo, placa e número da vaga. 

Os dados são validados (formato da placa, placa ou vaga duplicadas) apresentanado "Essa vaga já está ocupada. Escolha outra."

salvos no localStorage do navegador e exibidos na tela de listagem, onde é possível liberar a vaga quando a reserva não for mais necessária. O projeto é dividido em duas telas (listagem e cadastro) e em três arquivos JavaScript, um para cada responsabilidade: dados, formulário e tabela.

