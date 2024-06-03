/*Desafio Classificador de nível de Herói*/

/*Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

let heroi = {
    nome: "Pedro",
    xp: 0,
    nivel: ""
};

heroi.xp = 1200;

if (heroi.xp <= 1000) {
    heroi.nivel = "Ferro"
    console.log(heroi.nivel);
} else if (heroi.xp = 1001 <= 2000) {
    heroi.nivel = "bronze"
    console.log(heroi.nivel);
} else if (heroi.xp = 2001 <= 5000) {
    heroi.nivel = "Prata"
    console.log(heroi.nivel);
} else if (heroi.xp = 5001 <= 7000) {
    heroi.nivel = "Ouro"
    console.log(heroi.nivel);
} else if (heroi.xp = 7001 <= 8000) {
    heroi.nivel = "Platina"
    console.log(heroi.nivel);
} else if (heroi.xp = 8001 <= 9000) {
    heroi.nivelnivel = "Ascendente"
    console.log(heroi.nivel);
} else if (heroi.xp = 9001 <= 10000) {
    heroi.nivel = "Radiante"
    console.log(heroi.nivel);
}

console.log("O herói de nome " + heroi.nome + " está no nível " + heroi.nivel + " !!")
