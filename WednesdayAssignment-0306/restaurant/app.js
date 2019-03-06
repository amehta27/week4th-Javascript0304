let menuUL = document.getElementById("menuUL")
let starterBtn = document.getElementById('starterBtn')
let entreesBtn = document.getElementById('entreesBtn')
let dessertsBtn = document.getElementById('dessertsBtn')
let allBtn = document.getElementById('allBtn')


let liItems = dishes.map(function(dish) {

  return `<li>
            <div>
            <img src="${dish.imageURL}"/>
            </div>
            <div>
              <p class="title">${dish.title}</p>
              <p>Description: ${dish.description}</p>


              <p>${dish.course}</p>

              <p>${dish.price}</p>
            </div>

          </li>`
})

//console.log(liItems)
menuUL.innerHTML = liItems.join('')
let starters = [];

starterBtn.addEventListener('click',function(){

  let starterDishes = dishes.filter(function(dish){
     return dish.course == "Starters"
   })

  let result = starterDishes.map(function(d){
    return `<li>
              <div>
              <img src="${d.imageURL}"/>
              </div>
              <div>
                <p class="title">${d.title}</p>
                <p>Description: ${d.description}</p>


                <p>${d.course}</p>

                <p>${d.price}</p>
              </div>

            </li>`
          })
          menuUL.innerHTML = result.join('')
        })

// for entrees option


 entreesBtn.addEventListener('click',function(){

  let starterDishes = dishes.filter(function(dish){
     return dish.course == "Entrees"
   })

  let result = starterDishes.map(function(d){
    return `<li>
              <div>
              <img src="${d.imageURL}"/>
              </div>
              <div>
                <p class="title">${d.title}</p>
                <p>Description: ${d.description}</p>


                <p>${d.course}</p>

                <p>${d.price}</p>
              </div>

            </li>`
          })
          menuUL.innerHTML = result.join('')
        })


  //for Dessert option

  dessertsBtn.addEventListener('click',function(){

   let starterDishes = dishes.filter(function(dish){
      return dish.course == "Desserts"
    })

   let result = starterDishes.map(function(d){
     return `<li>
               <div>
               <img src="${d.imageURL}"/>
               </div>
               <div>
                 <p class="title">${d.title}</p>
                 <p>Description: ${d.description}</p>


                 <p>${d.course}</p>

                 <p>${d.price}</p>
               </div>

             </li>`
           })
           menuUL.innerHTML = result.join('')
         })


  //All option


  allBtn.addEventListener('click',function(){

          let liItems = dishes.map(function(dish) {

           return `<li>
                     <div>
                     <img src="${dish.imageURL}"/>
                     </div>
                     <div>
                       <p class="title">${dish.title}</p>
                       <p>Description: ${dish.description}</p>


                       <p>${dish.course}</p>

                       <p>${dish.price}</p>
                     </div>

                   </li>`
         })

         menuUL.innerHTML = liItems.join('')
})
