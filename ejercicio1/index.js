const base_url = "https://thronesapi.com";

const selectElement = document.querySelector('#character-list');
const imgContainer = document.querySelector('.character-image');

fetch(base_url + '/api/v2/Characters')
.then(data => data.json())
.then(data => {
  // Pongo la imagen inicial
  imgContainer.setAttribute('src', data[0].imageUrl)
  // LLamo a las funciones
  getCharacters(data);
  showImage(data);
})
.catch(console.error('No ha sido posible la conexión')
);

const getCharacters = (data) => {
  data.forEach(character => {
    const option = selectElement.appendChild(document.createElement("option"));
    option.setAttribute('value', character.id)
    option.innerHTML = `
     ${character.firstName} ${character.lastName}
    `;
  });
};

const showImage = (data) => {
  selectElement.addEventListener('change', (event) => {
    const selectedId = event.target.value;
    const selectedItem = data.find(character => character.id === parseInt(selectedId));
    if (selectedItem) {
      imgContainer.setAttribute('src', selectedItem.imageUrl);
    }
  })
};




