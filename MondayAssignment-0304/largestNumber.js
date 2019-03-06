function largestNumber(anArray){
  let largestNumber = anArray[0]
  for (let i =0 ; i< anArray.length; i++){
    if (anArray[i] > largestNumber){
      largestNumber = anArray[i]
    }
  }
  console.log(largestNumber)
}



let arrayNumbers = [23,53,43,56,88,999,100]
largestNumber(arrayNumbers);
