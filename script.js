const desafios = [
    "Faça uma dancinha por 30 segundos 💃",
    "Fale 3 palavras começando com a letra Z sem pensar muito!",
    "Imite um animal e poste no grupo da família 🐒",
    "Fique 1 minuto em silêncio absoluto 😶",
    "Desenhe um gato com os olhos fechados 🐱",
    "Fale uma frase 100% sincera sobre seu dia 🌞",
    "Conte uma piada ruim. Muito ruim. 🙃",
    "Invente um novo emoji com seu rosto 🤪",
    "Escreva uma palavra ao contrário sem errar 👀",
    "Faça 5 agachamentos agora mesmo 🏋️",
];

function gerarDesafio() {
    const resultado = document.getElementById("resultado");
    const desafio = desafios[Math.floor(Math.random() * desafios.length)];
    resultado.style.opacity = 0;

    setTimeout(() => {
        resultado.textContent = desafio;
        resultado.style.opacity = 1;
    }, 300);
}
