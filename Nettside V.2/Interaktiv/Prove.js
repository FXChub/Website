function generateList() {
  // Henter brukerens input
  const userInput = document.getElementById("userInput").value;
}
  // Konverterer input til et tall
  const number = parseInt(userInput); {
}

  // Sjekker om input er gyldig

  if (isNaN(number) || number <= 0); {
    document.getElementById("result").innerHTML = "Vennligst skriv inn et gyldig positivt tall.";
  }
  let resultList = "<ul>"; // Starter en uordnet liste

  // Løkke som går fra 1 til brukerens tall
  for (let i = 1; i <= number; i++); {
    resultList += `<li>${i}</li>`; // Legger til hvert tall som en listepunkt
  }

  {
  resultList += "</ul>"; // Avslutter listen

  // Viser resultatet på nettsiden
  document.getElementById("result").innerHTML = resultList;
}