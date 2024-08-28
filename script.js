document.addEventListener("DOMContentLoaded", function() {
    const xp_values = [
        0, 100, 200, 300, 400, 500, 600, 700, 800, 900,
        1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900,
        2000, 2100, 2300, 2700, 3200, 3900, 4600, 5500, 6600, 8000,
        9500, 12000, 14000, 17000, 20000, 24000, 29000, 35000, 41000, 49000,
        59000, 71000, 85000, 110000, 130000, 150000, 180000, 220000, 260000, 310000,
        370000, 440000, 530000, 630000, 760000, 910000, 1100000, 1400000, 1600000, 1900000,
        2100000, 2300000, 2500000, 2800000, 3100000, 3400000, 3700000, 4100000, 4500000, 4900000,
        5400000, 5900000, 6500000, 7200000, 7900000, 8700000, 9500000, 11000000, 12000000, 13000000,
        13000000, 14000000, 14000000, 15000000, 16000000, 17000000, 18000000, 19000000, 20000000, 21000000,
        22000000, 23000000, 24000000, 25000000, 26000000, 27000000, 28000000, 30000000, 31000000, 33000000,
        35000000, 37000000, 39000000, 41000000, 43000000, 45000000, 47000000, 49000000, 51000000, 53000000,
        55000000, 57000000, 59000000, 61000000, 63000000, 65000000, 67000000, 69000000, 71000000, 73000000,
        75000000, 77000000, 79000000, 81000000, 83000000, 85000000, 87000000, 89000000, 91000000, 93000000,
        95000000, 97000000, 100000000, 105000000, 108000000, 115000000, 120000000, 125000000, 130000000, 135000000,
        140000000, 145000000, 150000000, 155000000, 160000000, 165000000, 170000000, 175000000, 180000000, 185000000
    ];

    const form = document.getElementById("xpForm");
    const resultado = document.getElementById("resultado");
    const languageSelector = document.getElementById("language");
    const toggleModeButton = document.getElementById("toggleMode");

    // Função para formatar números com separador de milhar
    function formatNumber(number) {
        return number.toLocaleString();
    }

    // Função para calcular XP
    function calculaXP(nivelInicial, nivelFinal) {
        let totalXP = 0;
        for (let i = nivelInicial + 1; i < nivelFinal; i++) {
            totalXP += xp_values[i];
        }
        return totalXP;
    }

    // Função para atualizar o idioma
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
    }

    // Função para atualizar o resultado
    function updateResult(nivelInicial, nivelFinal, totalXP) {
        const language = localStorage.getItem('language') || 'pt';
        if (language === "pt") {
            resultado.textContent = `O total de XP necessário para subir do nível ${nivelInicial + 1} ao nível ${nivelFinal} é ${formatNumber(totalXP)}`;
        } else if (language === "en") {
            resultado.textContent = `The total XP required to level up from level ${nivelInicial + 1} to level ${nivelFinal} is ${formatNumber(totalXP)}`;
        }
    }

    // Função para alternar entre modos
    function toggleMode() {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem('theme', 'light');
            toggleModeButton.className = "fas fa-sun"; // Ícone do sol
        } else {
            localStorage.setItem('theme', 'dark');
            toggleModeButton.className = "fas fa-moon"; // Ícone da lua
        }
    }

    // Evento de envio do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nivelInicial = parseInt(document.getElementById("nivelInicial").value) - 1;
        const nivelFinal = parseInt(document.getElementById("nivelFinal").value);
        const totalXP = calculaXP(nivelInicial, nivelFinal);
        updateResult(nivelInicial, nivelFinal, totalXP);
    });

    // Evento de mudança de idioma
    languageSelector.addEventListener("change", function() {
        const language = languageSelector.value;
        localStorage.setItem('language', language);
        updateLanguage();
        const nivelInicial = parseInt(document.getElementById("nivelInicial").value) - 1;
        const nivelFinal = parseInt(document.getElementById("nivelFinal").value);
        if (!isNaN(nivelInicial) && !isNaN(nivelFinal) && nivelInicial < nivelFinal) {
            const totalXP = calculaXP(nivelInicial, nivelFinal);
            updateResult(nivelInicial, nivelFinal, totalXP);
        }
    });

    // Evento de alternância de modo
    toggleModeButton.addEventListener("click", toggleMode);

    // Inicializa o idioma e o modo
    updateLanguage();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add("light-mode");
        toggleModeButton.className = "fas fa-sun"; // Ícone do sol
    } else {
        document.body.classList.remove("light-mode");
        toggleModeButton.className = "fas fa-moon"; // Ícone da lua
    }
});
