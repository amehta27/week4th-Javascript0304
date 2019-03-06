let nameTextBox = document.getElementById("nameTextBox")
let btnClickMe = document.getElementById("btnClickMe")
let namelistUl = document.getElementById("listUl")
let complettedTaskUl = document.getElementById("listUlCompleted")

btnClickMe.addEventListener('click',function() {
let listtodo = document.createElement("li")
let span = document.createElement("span")
//let listtodo = namelistUl.appendChild("li")
span.innerHTML= nameTextBox.value;
let deleteButton = document.createElement("button")
let checkbox = document.createElement("input")
checkbox.type = 'checkbox'

deleteButton.innerHTML = "Remove"
listtodo.appendChild(checkbox)
listtodo.appendChild(span)
listtodo.appendChild(deleteButton)
namelistUl.appendChild(listtodo)
checkbox.addEventListener('change', function(){
  if (checkbox.checked == true){
    console.log("checked")
    complettedTaskUl.appendChild(listtodo)
  }else {
    namelistUl.appendChild(listtodo)
  }

})
//console.log(nameTextBox.value)
deleteButton.addEventListener('click', function(){
namelistUl.removeChild(listtodo)
//console.log("delete")
})


//part for completed Task

// let listtodo = document.createElement("li")
// let span = document.createElement("span")
// //let listtodo = namelistUl.appendChild("li")
// span.innerHTML= nameTextBox.value;
// let deleteButton = document.createElement("button")
// let checkbox = document.createElement("input")
// checkbox.type = 'checkbox'
// deleteButton.innerHTML = "Remove"
// listtodo.appendChild(checkbox)
// listtodo.appendChild(span)
// listtodo.appendChild(deleteButton)
// namelistUl.appendChild(listtodo)
// //console.log(nameTextBox.value)
// deleteButton.addEventListener('click', function(){
// namelistUl.removeChild(listtodo)



})
