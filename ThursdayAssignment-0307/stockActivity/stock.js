let selectValue = document.getElementById("selectValue")
let selectBtn = document.getElementById("selectBtn")
let data = document.getElementById("data")


let quotes = {
  "APLE":{name : "Apple", price : 0},
  "AMAZ":{name : "Amazon", price :0},
  "ALBAB":{name : "Ali Baba", price :0},
  "GOOG":{name : "Google", price :0},
  "FB":{name : "Facebook", price :0}
}

function getStockQuote(symbol) {

  let stock = quotes[symbol]
  stock.price = getRandomInt(100,500)
  return quotes[symbol]
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// window.setInterval(function(){
//   let result = getStockQuote("AMAZ")
//   console.log(result.name)
//   console.log(result.price)
//
// },2000)

selectBtn.addEventListener('click',function(){
  window.setInterval(function(){
  let result = getStockQuote(selectValue.value)
  let listItem = `<li>${result.name} ${result.price} </li>`

  data.innerHTML = listItem

},2000)

})
