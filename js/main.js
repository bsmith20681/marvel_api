const characterId = 'https://gateway.marvel.com/v1/public/characters?'
const characterComic = 'https://gateway.marvel.com/v1/public/characters/'
const apiKey = 'apikey=bf63e86f55b219bcd579082f0eed4d21'




//hero's id numbers
const thorId = '1009664'


const comicCover = document.querySelector(".comic-cover")


const heroName = document.querySelector('.heroName')
const heroDescription = document.querySelector('.heroDescription')





function thor(){
  const thor = 'name=Thor'
  fetch(characterId + thor + '&' + apiKey)
    .then(response => response.json())
    .then(data => {

      heroName.innerHTML = data.data.results[0].name
      heroDescription.innerHTML = data.data.results[0].description
    });


  fetch(characterComic + thorId + '/comics?' + apiKey)
    .then(response => response.json())
    .then(data => {
     console.log(data.data.results)
     data.data.results.forEach(result => {
       //console.log(result.thumbnail.path  + "/portrait_incredible.jpg")
       const comicImage = result.thumbnail.path  + "/portrait_incredible.jpg"
       const comicTitle = result.title;
       const comicImageElement = document.createElement('img')
       const characterElement = document.createElement('div')
       const comicTitleElement = document.createElement('p')

       comicTitleElement.textContent = comicTitle
       characterElement.className = "col-lg-3 col-md-3 col-sm-6 cover"
       comicImageElement.src = comicImage;
       comicTitleElement.className = "text-white"

       characterElement.appendChild(comicImageElement)
       characterElement.appendChild(comicTitleElement)
       comicCover.appendChild(characterElement);
     })

    })


}


  $(document).on('mouseover', 'body', function(e){
    $('.cover').slice(0,4).show();
    $(document).off('mouseover')
    $('#loadMore').on('click', function(e) {
     e.preventDefault();
      $('.cover:hidden').slice(0,4).fadeIn('slow');
      console.log("hi")
    });
  });









//Thor 1009664
//Hulk 1009351
//Spider-Man 1009610
//Captain America 1009220
//Black Widow 1009189
//Thanos 1009652
