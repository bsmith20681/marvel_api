const characterId = 'https://gateway.marvel.com/v1/public/characters?'
const apiKey = '&apikey=bf63e86f55b219bcd579082f0eed4d21'

const thor = 'name=Thor'

const name = document.querySelector('.name')
const description = document.querySelector('.description')


  fetch(characterId + thor)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)

      name.innerHTML = data.data.results[0].name
      description.innerHTML = data.data.results[0].description
    })





//Thor 1009664
//Hulk 1009351
//Spider-Man 1009610
//Captain America 1009220
//Black Widow 1009189
//Thanos 1009652
