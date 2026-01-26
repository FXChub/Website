const pokemon = [
    {name: "Pikachu", image: "Pokemonimage/Pikachu.webp", element: "Electric", game: "Red/Blue", height: "0.4m", weight: "6.0kg"},
    {name: "Charmander", image: "Pokemonimage/Charmander.webp", element: "Fire", game: "Red/Blue", height: "0.6m", weight: "8.5kg"},
    {name: "Squirtle", image: "Pokemonimage/Squirtle.webp", element: "Water", game: "Red/Blue", height: "0.5m", weight: "9.0kg"},
    {name: "Bulbasaur", image: "Pokemonimage/Bulbasaur.webp", element: "Grass/Poison", game: "Red/Blue", height: "0.7m", weight: "6.9kg"},
    {name: "Jigglypuff", image: "Pokemonimage/Jigglypuff.webp", element: "Normal/Fairy", game: "Red/Blue", height: "0.5m", weight: "5.5kg"},
];




const listEl = document.getElementById("pokemon-list");
const searchEl = document.getElementById("search");
const filterElement = document.getElementById("filter-element");
const filterGame = document.getElementById("filter-game");
const filterHeight = document.getElementById("filter-height");
const filterWeight = document.getElementById("filter-weight");

//Filtrere dropdowns
function populateFilters() {
  const elements = new Set();
  const games = new Set();
  const heights = new Set();
  const weights = new Set();

  pokemon.forEach(p => {
    elements.add(p.element);
    games.add(p.game);
    heights.add(p.height);
    weights.add(p.weight);
  });

  for (const e of elements) {
    filterElement.innerHTML += `<option value="${e}">${e}</option>`;
  }
  for (const g of games) {
    filterGame.innerHTML += `<option value="${g}">${g}</option>`;
  }
  for (const t of heights) {
    filterHeight.innerHTML += `<option value="${t}">${t}</option>`;
  }
  for (const w of weights) {
    filterWeight.innerHTML += `<option value="${w}">${w}</option>`;
  }
}

populateFilters();

// Lager listen
function render() {
  const search = searchEl.value.toLowerCase();
  const selectedElement = filterElement.value;
  const selectedGame = filterGame.value;
  const selectedHeight = filterHeight.value;
  const selectedWeight = filterWeight.value;

  const filtered = pokemon.filter(p => {
    return (
      p.name.toLowerCase().includes(search) &&
      (selectedElement === "" || p.element === selectedElement) &&
      (selectedGame === "" || p.game === selectedGame) &&
      (selectedHeight === "" || p.height === selectedHeight) &&
      (selectedWeight === "" || p.weight === selectedWeight)
    );
  });

  // Hvordan oppsett av hver Pokemon skal se ut
listEl.innerHTML = filtered
  .map(
    p => `
      <div class="card">
        <div class="name">${p.name}</div>

        <img src="${p.image}" alt="${p.name}" class="pokemon-img">

        <div class="tag">Element: ${p.element}</div>
        <div class="tag">Game: ${p.game}</div>
        <div class="tag">Height: ${p.height}</div>
        <div class="tag">Weight: ${p.weight}</div>
      </div>
    `
  )
  .join("");

}

render();

searchEl.addEventListener("input", render);
filterElement.addEventListener("change", render);
filterGame.addEventListener("change", render);
filterHeight.addEventListener("change", render);
filterWeight.addEventListener("change", render);