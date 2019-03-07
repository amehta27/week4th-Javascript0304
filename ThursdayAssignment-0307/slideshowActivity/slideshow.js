let menuUL = document.getElementById("data");


let liItems = slides.map(function(slide){

   return `<li>
           <div>
           <img src="${slide.imageURL}"/>
           </div>
           <div>
           <p>${slide.title}</p>

           </div>
           </li>`

})



menuUL.innerHTML = liItems.join('')
