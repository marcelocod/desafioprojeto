// Variável para o nome do herói
let nomeDoHeroi = "Aatrox";

// Variável para a quantidade de XP
let xpDoHeroi = 12000;

// Função para determinar o nível do herói com base na XP
function determinarNivelHeroi(xp) {
    if (xp < 1000) {
      return "Ferro";
    } else if (xp >= 1000 && xp < 2000) {
      return "Bronze";
    } else if (xp >= 2000 && xp < 5000) {
      return "Prata";
    } else if (xp >= 5000 && xp < 7000) {
      return "Ouro";
    } else if (xp >= 7000 && xp < 8000) {
      return "Platina";
    } else if (xp >= 8000 && xp < 9000) {
      return "Ascendente";
    } else {
      return "Radiante";
    }
  }
  
  // Exibindo o nível do herói
  let nivelHeroi = determinarNivelHeroi(xpDoHeroi);
  console.log(`O herói ${nomeDoHeroi} está no nível ${nivelHeroi}`);
  

