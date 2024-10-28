const base_url = "https://thronesapi.com";

fetch(base_url + '/api/v2/Characters')
.then(data => data.json())
.then(data => {
  console.log(data);
  data.forEach(character => {
    const option = document.querySelector("#character-list").appendChild(document.createElement("option"));
    option.setAttribute('value', character.id)
    option.innerHTML = `
     ${character.firstName} ${character.lastName}
    `;
  });
});





