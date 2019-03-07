let menuUL = document.getElementById("menuUL");

let liItems = news.articles.map(function(newsone){
  let source = null
  if (newsone.urlToImage == null){
    source = "https://media.gettyimages.com/photos/former-mayor-of-new-york-city-michael-bloomberg-makes-a-statement-picture-id650330306?s=612x612"
  }
  else{
    source = newsone.urlToImage
  }


  



   return `<li>
           <div>
           <img src="${source}"/>
           </div>
           <div>
           <p>${newsone.author}</p>
           <p>${newsone.title}</p>
           <p>${newsone.description}</p>
           <p>${newsone.url}</p>
           <p>${newsone.publishedAt}</p>
           </div>
           </li>`

})



menuUL.innerHTML = liItems.join('')
