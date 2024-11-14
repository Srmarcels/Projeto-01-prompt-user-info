alert('Bem-vindo ao nosso site!');

let nome = prompt('Digite o seu nome');
let idade = prompt('Digite a sua idade');
let MensagemdeErro;

// Verifica se o nome foi fornecido
if (!nome) {
    MensagemdeErro = 'Erro: Nome não fornecido. Por favor, digite seu nome.';
    alert(MensagemdeErro);

} 
// Verifica se a idade foi fornecida e é um número válido
else if (!idade || isNaN(idade)) {
    MensagemdeErro = 'Erro: Idade não fornecida ou inválida. Por favor, digite uma idade válida.';
    alert(MensagemdeErro);
} 
// Verifica se a idade é maior ou igual a 18
else if (idade >= 18) {
    alert('Pode tirar a habilitação!');
} 
// Caso a idade seja menor que 18
else {
    alert('Ainda não pode tirar a habilitação.');
}






