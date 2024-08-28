let novamente = "yes";

while (novamente.toLowerCase() === "yes") {
    // Inicializa variáveis
    let total = 0;
    let custos = {
        0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 10: 10, 11: 10, 12: 10, 13: 10, 14: 10, 
        20: 20, 21: 20, 22: 20, 23: 20, 24: 20, 30: 60, 31: 60, 32: 60, 33: 60, 
        34: 60, 40: 100, 41: 100, 42: 100, 43: 100, 44: 100, 50: 0
    };

    let inicio = parseInt(prompt("What is the current tier of the hero? (use 43 for 4.3 stars)"));
    let fim = parseInt(prompt("What is the final desired tier? (use 43 for 4.3 stars)"));

    while (fim <= inicio) {
        alert("The final tier must be greater than the initial.\nPlease enter a valid final tier.");
        fim = parseInt(prompt("What is the final desired tier? (use 43 for 4.3 stars)"));
    }

    for (let key = inicio; key < fim; key++) {
        if (custos.hasOwnProperty(key)) {
            total += custos[key];
        }
    }

    alert(`The amount of shards to tier up from ${inicio} to ${fim} is ${total}!`);

    novamente = prompt("Do you want to calculate for another hero? (yes or no)").trim().toLowerCase();
    if (novamente !== "yes") {
        alert("Thanks for using Frei's sheet. @freitriste");
        break;
    }
}
