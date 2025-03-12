# 🏆 Calculadora de Partidas Rankeadas  

## 📌 Descrição  
Este projeto é uma solução para um desafio do curso de lógica de programação. A calculadora recebe a quantidade de vitórias e derrotas de um jogador e retorna seu saldo de partidas e o nível correspondente com base no número de vitórias.  

## 🚀 Tecnologias Utilizadas  
- JavaScript  

## 📖 Como Funciona  
1. O usuário informa a quantidade de vitórias e derrotas.  
2. A função calcula o saldo de vitórias (`vitórias - derrotas`).  
3. Com base na quantidade de vitórias, o jogador recebe um nível:  
   - Menos de 10 → **Ferro**  
   - Entre 11 e 20 → **Bronze**  
   - Entre 21 e 50 → **Prata**  
   - Entre 51 e 80 → **Ouro**  
   - Entre 81 e 90 → **Diamante**  
   - Entre 91 e 100 → **Lendário**  
   - 101 ou mais → **Imortal**  
4. O resultado é exibido no console.  

## ▶️ Como Executar  
1. Clone este repositório ou copie o código.  
2. Abra um editor de código (como VS Code).  
3. Execute o código em um ambiente JavaScript, como o console do navegador ou Node.js.  

## 📌 Exemplo de Uso  
```javascript  
console.log(calcularNivel(85, 30));  
// Saída: O Herói tem um saldo de 55 e está no nível de Ouro.  
```  

## 📝 Autor  
Desenvolvido como parte do curso de lógica de programação.