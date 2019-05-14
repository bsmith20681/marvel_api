const characterId = 'https://gateway.marvel.com/v1/public/characters?'
const characterComic = 'https://gateway.marvel.com/v1/public/characters/'
const apiKey = 'apikey=bf63e86f55b219bcd579082f0eed4d21'


//hero's id numbers
const thorId = '1009664'
const hulkId = '1009351'
const spiderManId = '1009610'
const ironManId = '1009368'
const wolverineId = '1009718'
const thanosId = '1009652'


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
     data.data.results.forEach(result => {
       const comicImage = result.thumbnail.path  + "/portrait_incredible.jpg"
       const comicTitle = result.title;
       const comicImageElement = document.createElement('img')
       const characterElement = document.createElement('div')
       const comicTitleElement = document.createElement('p')

       comicTitleElement.textContent = comicTitle
       characterElement.className = "col-lg-3 col-md-3 col-sm-6 test cover"
       comicImageElement.src = comicImage;
       comicTitleElement.className = "text-white"

       characterElement.appendChild(comicImageElement)
       characterElement.appendChild(comicTitleElement)
       comicCover.appendChild(characterElement);
     })
     //line of jquery that allows for the first 4 comic book pages to be display when page loads
     $('.cover').slice(4,data.data.results.length).css('display', 'none')
    })
}

function hulk(){
  const hulk = 'name=Hulk'
  fetch(characterId + hulk + '&' + apiKey)
    .then(response => response.json())
    .then(data => {

      heroName.innerHTML = data.data.results[0].name
      heroDescription.innerHTML = data.data.results[0].description
    });


  fetch(characterComic + hulkId + '/comics?' + apiKey)
    .then(response => response.json())
    .then(data => {
     data.data.results.forEach(result => {
       const comicImage = result.thumbnail.path  + "/portrait_incredible.jpg"
       const comicTitle = result.title;
       const comicImageElement = document.createElement('img')
       const characterElement = document.createElement('div')
       const comicTitleElement = document.createElement('p')

       comicTitleElement.textContent = comicTitle
       characterElement.className = "col-lg-3 col-md-3 col-sm-6 test cover"
       comicImageElement.src = comicImage;
       comicTitleElement.className = "text-white"

       characterElement.appendChild(comicImageElement)
       characterElement.appendChild(comicTitleElement)
       comicCover.appendChild(characterElement);
     })
     //line of jquery that allows for the first 4 comic book pages to be display when page loads
     $('.cover').slice(4,data.data.results.length).css('display', 'none')
    })
}

function spiderMan(){
  const spiderMan = 'name=Spider-Man'
  fetch(characterId + spiderMan + '&' + apiKey)
    .then(response => response.json())
    .then(data => {

      heroName.innerHTML = data.data.results[0].name
      heroDescription.innerHTML = data.data.results[0].description
    });


  fetch(characterComic + spiderManId + '/comics?' + apiKey)
    .then(response => response.json())
    .then(data => {
     data.data.results.forEach(result => {
       const comicImage = result.thumbnail.path  + "/portrait_incredible.jpg"
       const comicTitle = result.title;
       const comicImageElement = document.createElement('img')
       const characterElement = document.createElement('div')
       const comicTitleElement = document.createElement('p')

       comicTitleElement.textContent = comicTitle
       characterElement.className = "col-lg-3 col-md-3 col-sm-6 test cover"
       comicImageElement.src = comicImage;
       comicTitleElement.className = "text-white"

       characterElement.appendChild(comicImageElement)
       characterElement.appendChild(comicTitleElement)
       comicCover.appendChild(characterElement);
     })
     //line of jquery that allows for the first 4 comic book pages to be display when page loads
     $('.cover').slice(4,data.data.results.length).css('display', 'none')
    })
}

function ironMan(){
  const ironMan = 'name=iron%20man'
  fetch(characterId + ironMan + '&' + apiKey)
    .then(response => response.json())
    .then(data => {

      heroName.innerHTML = data.data.results[0].name
      heroDescription.innerHTML = data.data.results[0].description
    });


  fetch(characterComic + ironManId + '/comics?' + apiKey)
    .then(response => response.json())
    .then(data => {
     data.data.results.forEach(result => {
       const comicImage = result.thumbnail.path  + "/portrait_incredible.jpg"
       const comicTitle = result.title;
       const comicImageElement = document.createElement('img')
       const characterElement = document.createElement('div')
       const comicTitleElement = document.createElement('p')

       comicTitleElement.textContent = comicTitle
       characterElement.className = "col-lg-3 col-md-3 col-sm-6 test cover"
       comicImageElement.src = comicImage;
       comicTitleElement.className = "text-white"

       characterElement.appendChild(comicImageElement)
       characterElement.appendChild(comicTitleElement)
       comicCover.appendChild(characterElement);
     })
     //line of jquery that allows for the first 4 comic book pages to be display when page loads
     $('.cover').slice(4,data.data.results.length).css('display', 'none')
    })
}

function wolverine(){
  const wolverine = 'name=wolverine'
  fetch(characterId + wolverine + '&' + apiKey)
    .then(response => response.json())
    .then(data => {

      heroName.innerHTML = data.data.results[0].name
      heroDescription.innerHTML = data.data.results[0].description
    });


  fetch(characterComic + wolverineId + '/comics?' + apiKey)
    .then(response => response.json())
    .then(data => {
     data.data.results.forEach(result => {
       const comicImage = result.thumbnail.path  + "/portrait_incredible.jpg"
       const comicTitle = result.title;
       const comicImageElement = document.createElement('img')
       const characterElement = document.createElement('div')
       const comicTitleElement = document.createElement('p')

       comicTitleElement.textContent = comicTitle
       characterElement.className = "col-lg-3 col-md-3 col-sm-6 test cover"
       comicImageElement.src = comicImage;
       comicTitleElement.className = "text-white"

       characterElement.appendChild(comicImageElement)
       characterElement.appendChild(comicTitleElement)
       comicCover.appendChild(characterElement);
     })
     //line of jquery that allows for the first 4 comic book pages to be display when page loads
     $('.cover').slice(4,data.data.results.length).css('display', 'none')
    })
}

function thanos(){
  const thanos = 'name=thanos'
  fetch(characterId + thanos + '&' + apiKey)
    .then(response => response.json())
    .then(data => {

      heroName.innerHTML = data.data.results[0].name
      heroDescription.innerHTML = data.data.results[0].description
    });


  fetch(characterComic + thanosId + '/comics?' + apiKey)
    .then(response => response.json())
    .then(data => {
     data.data.results.forEach(result => {
       const comicImage = result.thumbnail.path  + "/portrait_incredible.jpg"
       const comicTitle = result.title;
       const comicImageElement = document.createElement('img')
       const characterElement = document.createElement('div')
       const comicTitleElement = document.createElement('p')

       comicTitleElement.textContent = comicTitle
       characterElement.className = "col-lg-3 col-md-3 col-sm-6 test cover"
       comicImageElement.src = comicImage;
       comicTitleElement.className = "text-white"

       characterElement.appendChild(comicImageElement)
       characterElement.appendChild(comicTitleElement)
       comicCover.appendChild(characterElement);
     })
     //line of jquery that allows for the first 4 comic book pages to be display when page loads
     $('.cover').slice(4,data.data.results.length).css('display', 'none')
    })
}



//line of jquery function that shows 4 comic covers at a time
$(document).on('click','#loadMore',function(){
   $('#loadMore').click(function(e) {
   e.preventDefault();
    $('.cover:hidden').slice(0,4).fadeIn('slow');
    if($('.cover:hidden').length == 0){
      $('#loadMore').text('No More Content').addClass("noContent")
    }
   });
})

//removes loading gif
window.addEventListener('load', function(){
  const nameLoader = document.querySelector('.name-loader');
  const comicLoader = document.querySelector('.comic-loader');

  nameLoader.className += ' hidden';
  comicLoader.className += ' hidden';
});
