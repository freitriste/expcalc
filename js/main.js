// main.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("xpForm");
    const resultado = document.getElementById("resultado");

    // Função para atualizar o resultado
    window.updateResult = function(nivelInicial, nivelFinal, totalXP) {
        const language = localStorage.getItem('language') || 'pt';
        if (language === "pt") {
            resultado.textContent = `O total de XP necessário para subir do nível ${nivelInicial + 1} ao nível ${nivelFinal} é ${formatNumber(totalXP)}`;
        } else if (language === "en") {
            resultado.textContent = `The total XP required to level up from level ${nivelInicial + 1} to level ${nivelFinal} is ${formatNumber(totalXP)}`;
        }
    };

    // Evento de envio do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nivelInicial = parseInt(document.getElementById("nivelInicial").value) - 1;
        const nivelFinal = parseInt(document.getElementById("nivelFinal").value);
        const totalXP = calculaXP(nivelInicial, nivelFinal);
        updateResult(nivelInicial, nivelFinal, totalXP);
    });

    // Inicializa o idioma e tema ao carregar a página
    updateLanguage();
});
