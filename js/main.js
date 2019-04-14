const characterId = 'https://gateway.marvel.com/v1/public/characters?'
const characterComic = 'https://gateway.marvel.com/v1/public/characters/'
const apiKey = 'apikey=bf63e86f55b219bcd579082f0eed4d21'


//hero's id numbers
const thorId = '1009664'


const heroName = document.querySelector('.heroName')
const heroDescription = document.querySelector('.heroDescription')
const heroComic = document.querySelector('.heroComic')
const comicCover1 = document.querySelector('.comicCover1')
const comicCover2 = document.querySelector('.comicCover2')
const comicCover3 = document.querySelector('.comicCover3')


function thor(){
  const thor = 'name=Thor'
  fetch(characterId + thor + '&' + apiKey)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)

      heroName.innerHTML = data.data.results[0].name
      heroDescription.innerHTML = data.data.results[0].description
      //heroComic.innerHTML = data.data.results[0].
    });

  fetch(characterComic + thorId + '/comics?' + apiKey)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      comicCover1.src = data.data.results[0].images[0].path + "/portrait_incredible.jpg"
      comicCover2.src = data.data.results[1].images[0].path + "/portrait_incredible.jpg"
      comicCover3.src = data.data.results[2].images[0].path + "/portrait_incredible.jpg"

    })
}







//Thor 1009664
//Hulk 1009351
//Spider-Man 1009610
//Captain America 1009220
//Black Widow 1009189
//Thanos 1009652
