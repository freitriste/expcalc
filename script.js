document.getElementById("xpForm").addEventListener("submit", function(event) {
    event.preventDefault();

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

    const nivelInicial = parseInt(document.getElementById("nivelInicial").value);
    const nivelFinal = parseInt(document.getElementById("nivelFinal").value);

    if (nivelFinal <= nivelInicial) {
        document.getElementById("resultado").textContent = language === 'pt' ? "O nível final deve ser maior que o nível inicial." : "The final level must be higher than the initial level.";
        return;
    }

    let totalXp = 0;
    for (let i = nivelInicial; i < nivelFinal; i++) {
        totalXp += xp_values[i];
    }

    // Formatar o número de XP com separadores de milhares
    const formattedXp = totalXp.toLocaleString(language === 'pt' ? 'pt-BR' : 'en-US');

    document.getElementById("resultado").textContent = language === 'pt'
        ? `O total de XP necessário para subir do nível ${nivelInicial} ao nível ${nivelFinal} é ${formattedXp}.`
        : `The total XP required to go from level ${nivelInicial} to level ${nivelFinal} is ${formattedXp}.`;
});

const languageSelector = document.getElementById("language");
let language = languageSelector.value;

languageSelector.addEventListener("change", function() {
    language = this.value;
    updateLanguage();
});

function updateLanguage() {
    document.getElementById("title").textContent = language === 'pt' ? "Cálculo de XP de Nível" : "Level XP Calculator";
    document.querySelector(".label-nivelInicial").textContent = language === 'pt' ? "Nível Inicial:" : "Initial Level:";
    document.querySelector(".label-nivelFinal").textContent = language === 'pt' ? "Nível Final:" : "Final Level:";
    document.getElementById("calculateButton").textContent = language === 'pt' ? "Calcular XP" : "Calculate XP";
    document.getElementById("credits").textContent = language === 'pt' 
        ? "Desenvolvido por @freitriste" 
        : "Developed by @freitriste";
}

// Chame a função para definir o idioma inicial
updateLanguage();
