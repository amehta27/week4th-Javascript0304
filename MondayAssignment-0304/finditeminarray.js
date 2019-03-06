


  function finditeminarray(item){
  array = [1,2,3,4,5]
  let found = "";
  for (let i=0 ; i<= array.length; i++){

    if (item == array[i]){
      found = true
      break;
    }
    else {
      found = false
    }
  }
  return found;
}


console.log(finditeminarray(6))
