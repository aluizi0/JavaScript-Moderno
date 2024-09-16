// Função normal que retorna a soma de dois números
function normalSum(a, b) {
    return a + b;
}
  
// Exibe o resultado da soma normal no console
console.log(`Soma normal: ${normalSum(2, 2)}`);

// Função anônima atribuída a uma constante que retorna a soma de dois números
const anonymousSum = function (a, b) {
    return a + b;
}

// Exibe o resultado da soma anônima no console
console.log(`Soma anônima: ${anonymousSum(2, 2)}`);

// Função de seta (arrow function) que retorna a soma de dois números
const arrowSum = (a, b) => {
    return a + b;
}

// Exibe o resultado da soma com arrow function no console
console.log(`Soma arrow function: ${arrowSum(2, 2)}`);

// Função de seta que retorna a subtração de dois números
const subtract = (a, b) => a - b;

// Exibe o resultado da subtração no console
console.log(`Subtração: ${subtract(5, 2)}`);

// Função de seta que retorna uma string indicando o dobro de um número
const double = n => `O dobro de ${n} é ${n * 2}`;

// Define um número para calcular o dobro
const number = 21;

// Exibe o resultado do cálculo do dobro no console
console.log(`Dobro: ${double(number)}`);

// Lista de cidades
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc'];

// Filtra a lista de cidades para retornar apenas aquelas que começam com a letra 'P'
const startingWithP = towns.filter(town => town[0] === 'P');

// Exibe a lista de cidades que começam com 'P' no console
console.log(startingWithP);