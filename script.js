// Crie uma função para verificar se um valor é Truthy

function verificarTruthy(valorParaVerificar) {
  return !!valorParaVerificar;
}
console.log(verificarTruthy(" "));
console.log(verificarTruthy(''));
console.log(verificarTruthy(0));
console.log(verificarTruthy(1));

//----------------------------------------------------------------------------------
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return (lado * 4);
}
console.log(perimetro(10));

//----------------------------------------------------------------------------------
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
console.log(nomeCompleto("João", "Rodrigues"));


//----------------------------------------------------------------------------------
// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if (numero % 2 === 0) {
    console.log("É par");
  }
}
verificaPar(10);
//----------------------------------------------------------------------------------
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(tipo) {
  return typeof tipo;
}
console.log(verificaTipo("")); // string 
console.log(verificaTipo(1)); // Number
console.log(verificaTipo(verificaTipo)); //function

//----------------------------------------------------------------------------------
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function mostrar() {
  console.log("João Marcello de Oliveira Rodrigues");
}
window.addEventListener("scroll", mostrar);

//----------------------------------------------------------------------------------
// Corrija o erro abaixo

var totalPaises = 193; // quando a variável é definida dentro da função so pode ser lida internamente.
// quando a definimos externamente, pode ser executada corretamente nas duas funções.

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
