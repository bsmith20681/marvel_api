const characterId = 'https://gateway.marvel.com/v1/public/characters?'
const characterComic = 'https://gateway.marvel.com/v1/public/characters/'
const apiKey = 'apikey=bf63e86f55b219bcd579082f0eed4d21'




//hero's id numbers
const thorId = '1009664'


const comicCover = document.querySelector(".comicCover")


const heroName = document.querySelector('.heroName')
const heroDescription = document.querySelector('.heroDescription')
const heroComic = document.querySelector('.heroComic')
const comicCover1 = document.querySelector('.comicCover1')
const comicCover2 = document.querySelector('.comicCover2')
const comicCover3 = document.querySelector('.comicCover3')
const comicTitle1 = document.querySelector('.comicTitle1')
const comicTitle2 = document.querySelector('.comicTitle2')
const comicTitle3 = document.querySelector('.comicTitle3')
const comicDescription1 = document.querySelector('.comicDescription1')
const comicDescription2 = document.querySelector('.comicDescription2')
const comicDescription3 = document.querySelector('.comicDescription3')




function thor(){
  const thor = 'name=Thor'
  fetch(characterId + thor + '&' + apiKey)
    .then(response => response.json())
    .then(data => {
    //  console.log(data.data)

      heroName.innerHTML = data.data.results[0].name
      heroDescription.innerHTML = data.data.results[0].description
      //heroComic.innerHTML = data.data.results[0].
    });

  fetch(characterComic + thorId + '/comics?' + apiKey)
    .then(response => response.json())
    .then(data => {
     //console.log(data.data.results)
     data.data.results.forEach(result => {
       console.log(result.thumbnail.path  + "/portrait_incredible.jpg")
       const characterImage = result.thumbnail.path  + "/portrait_incredible.jpg"
       const imageElement = document.createElement('img')
       imageElement.src = characterImage;
       comicCover.appendChild(imageElement);
     })

    })

}







//Thor 1009664
//Hulk 1009351
//Spider-Man 1009610
//Captain America 1009220
//Black Widow 1009189
//Thanos 1009652
