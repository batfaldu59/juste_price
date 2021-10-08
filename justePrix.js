function genererNombre(max) {
    return Math.floor(Math.random()*Math.floor(max))
}

let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");

let nombreAleatoire = genererNombre(1001);
let coup = 0;
let nombreChoisie;

function verifier(nombre) {
    let instruction = document.createElement("div");

    if (nombre > nombreAleatoire) {
        instruction.textContent = "#"+coup+ "("+nombre+") C'est moins";
        instruction.className = "instruction moins"; 
    } else if (nombre < nombreAleatoire) {
        instruction.textContent = "#"+coup+ "("+nombre+") C'est plus";
        instruction.className = "instruction plus"; 
    } else {
        instruction.textContent = "#"+coup+ "("+nombre+") Félicitation vous avez trouvé le juste prix";
        instruction.className = "instruction fini";
        input.disabled = true;
    }
    document.querySelector("#instructions").prepend(instruction);
}

// console.log(nombreAleatoire);
error.style.display = "none";

input.addEventListener("keyup", () => {
    if (isNaN(input.value)) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
});

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "sliver";
        coup++;
        nombreChoisie = input.value;
        input.value = '';
        verifier(nombreChoisie);
    }
})
