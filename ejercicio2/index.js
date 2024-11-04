const base_url = "https://pokeapi.co/api/v2/pokemon/";

const imgContainer = document.querySelector('.random-image');

const random = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const miObjeto = {
  "nombre-propiedad": "valor"
};

// Accediendo a la propiedad con guion medio
console.log(miObjeto["nombre-propiedad"]); // Output: "valor"

fetch(base_url + random(1, 151))
  .then(data => data.json())
  .then(data => {
    console.log(data);
    document.body.appendChild(pokemonCard(data));
    other();
  })
  .catch(function (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });

const pokemonCard = (data) => {
  const card = document.createElement('div');
  card.setAttribute('class', "pokemon-card")
  const images = data.sprites.other;
  const mainImg = images["official-artwork"].front_default;
  const name = capitalizeFirstLetter(data.name);
  card.innerHTML = `
    <figure class="pokemon-img__wrapper"><img src="${mainImg}" alt="${name}"/></figure>
    <h2>${name}</h2>
    <button id="other">Another one?</button>
  `;
  return card;
}

const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const other = () => {
  document.querySelector("#other").addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
  }); 
};