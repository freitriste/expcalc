// language-handler.js
const languageSelector = document.getElementById("language");

function updateLanguage() {
    const language = localStorage.getItem('language') || 'pt';
    languageSelector.value = language;
    if (language === "pt") {
        document.getElementById("js_tiltle").textContent = "Cálculo de XP de Nível";
        document.querySelector(".label-nivelInicial").textContent = "Nível Inicial:";
        document.querySelector(".label-nivelFinal").textContent = "Nível Final:";
        document.getElementById("calculateButton").textContent = "Calcular XP";
        document.getElementById("credits").innerHTML = 'Desenvolvido por <a href="https://github.com/freitriste">@freitriste</a> e <a href="https://github.com/matheusvhs">@matheusvhs</a>';
    } else if (language === "en") {
        document.getElementById("js_tiltle").textContent = "Hero XP Calculator";
        document.querySelector(".label-nivelInicial").textContent = "Initial Level:";
        document.querySelector(".label-nivelFinal").textContent = "Final Level:";
        document.getElementById("calculateButton").textContent = "Calculate XP";
        document.getElementById("credits").innerHTML = 'Developed by <a href="https://github.com/freitriste">@freitriste</a> and <a href="https://github.com/matheusvhs">@matheusvhs</a>';
    }

    // Atualiza o resultado após mudar o idioma
    const nivelInicial = parseInt(document.getElementById("nivelInicial").value) - 1;
    const nivelFinal = parseInt(document.getElementById("nivelFinal").value);
    if (!isNaN(nivelInicial) && !isNaN(nivelFinal) && nivelInicial < nivelFinal) {
        const totalXP = calculaXP(nivelInicial, nivelFinal);
        updateResult(nivelInicial, nivelFinal, totalXP);
    }
}

languageSelector.addEventListener("change", function() {
    const language = languageSelector.value;
    localStorage.setItem('language', language);
    updateLanguage();
});
