const characterId = 'https://gateway.marvel.com/v1/public/characters?name=Thor&apikey=bf63e86f55b219bcd579082f0eed4d21'
const name = document.querySelector('.name')
const description = document.querySelector('.description')


  fetch(characterId)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)

      name.innerHTML = data.data.results[0].name
      description.innerHTML = data.data.results[0].description
    })
