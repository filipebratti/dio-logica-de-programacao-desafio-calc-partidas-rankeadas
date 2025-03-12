function calcularRanking(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let ranking;

  if (vitorias < 10) {
    ranking = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    ranking = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    ranking = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    ranking = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    ranking = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    ranking = "Lendário";
  } else {
    ranking = "Imortal";
  }

  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${ranking}.`
}

let vitorias = 85;
let derrotas = 30;
console.log(calcularRanking(vitorias, derrotas));

console.log(calcularRanking(95, 20));
console.log(calcularRanking(45, 15));
console.log(calcularRanking(110, 30));
