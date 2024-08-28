// theme-handler.js
const toggleModeButton = document.getElementById("toggleMode");

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

toggleModeButton.addEventListener("click", toggleMode);

// Inicializa o modo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add("light-mode");
    toggleModeButton.className = "fas fa-sun"; // Ícone do sol
} else {
    document.body.classList.remove("light-mode");
    toggleModeButton.className = "fas fa-moon"; // Ícone da lua
}
