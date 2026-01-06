const falaBot = document.getElementById("falaBot");
const emocao = document.getElementById("emocao");
const input = document.getElementById("input");

// memória simples
let memoria = {};

function enviar() {
  const texto = input.value.trim();
  if (!texto) return;

  input.value = "";

  pensar();

  setTimeout(() => {
    responder(texto.toLowerCase());
  }, 800);
}

function pensar() {
  emocao.textContent = "🤔";
  falaBot.textContent = "Pensando...";
}

function responder(pergunta) {
  // SE JÁ SABE
  if (memoria[pergunta]) {
    emocao.textContent = "😄";
    falaBot.textContent = memoria[pergunta];
    return;
  }

  // RESPOSTAS SIMPLES (BASE DE INTELIGÊNCIA)
  let resposta = "";

  if (pergunta.includes("buraco negro")) {
    resposta = "Um buraco negro é uma região do espaço com gravidade tão forte que nem a luz consegue escapar.";
  } 
  else if (pergunta.includes("fotossíntese")) {
    resposta = "A fotossíntese é o processo em que as plantas usam luz solar para produzir energia.";
  } 
  else {
    emocao.textContent = "😕";
    falaBot.textContent = "Não encontrei isso ainda. Quer me ensinar?";
    return;
  }

  // SALVA NA MEMÓRIA
  memoria[pergunta] = resposta;

  emocao.textContent = "🙂";
  falaBot.textContent = resposta + " (conhecimento armazenado)";
}
