const skryteOrd = [
    "sjenerøs",
    "omgjengelig",
    "ambisiøs",
    "munter",
    "hardtarbeidende",
    "troverdig",
    "tålmodig",
    "optimistisk",
    "følsom",
    "sosial",
    "besluttsom",
    "morsom",
    "blid",
    "vakker",
    "lekende",
    "elskverdig",
    "talentfull",
    "begavet"
];


document.getElementById("btnSkryt").addEventListener("click", genererskryt);

const navnInput = document.getElementById("navnInput");
const skrytOutput = document.getElementById("output");
const antallInput = document.getElementById("antallInput");

function genererskryt() {
    const navn = navnInput.value.trim();
    const antall = parseInt(antallInput.value);

    if (!navn || isNaN(antall) || antall < 1) {
        skrytOutput.textContent = "Skriv inn navn og et gyldig antall.";
        return;
    }

    let skrytMelding = `${navn}, du er så ${skryteOrd[Math.floor(Math.random() * skryteOrd.length)]}!`;

    for (let i = 1; i < antall; i++) {
        skrytMelding += ` Du er også ${skryteOrd[Math.floor(Math.random() * skryteOrd.length)]}!`;
    }

    skrytOutput.textContent = skrytMelding;
}

function genererskryt() {
    const navn = navnInput.value.trim();
    const antall = parseInt(antallInput.value);

    if (!navn || isNaN(antall) || antall < 1) {
        skrytOutput.textContent = "Skriv inn navn og et gyldig antall.";
        return;
    }

    const brukteOrd = new Set();
    let skrytMelding = `${navn}, du er `;

    while (brukteOrd.size < antall && brukteOrd.size < skryteOrd.length) {
        const ord = skryteOrd[Math.floor(Math.random() * skryteOrd.length)];
        brukteOrd.add(ord);
    }

    skrytMelding += [...brukteOrd]
        .map((ord, i) => i === 0 ? `så ${ord}!` : `og også ${ord}!`)
        .join(" ");

    skrytOutput.textContent = skrytMelding;
}
