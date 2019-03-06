function smallestNumber(anArray){
  let smallestNumber = anArray[0];
  for(let i = 0; i< anArray.length; i++){
     if (smallestNumber > anArray[i]){
       smallestNumber = anArray[i]
     }
}
 console.log(smallestNumber);
}

let arrayNumbers = [23,53,43,56,88,999,100]
smallestNumber(arrayNumbers);



// function largestNumber(anArray){
//   let largestNumber = anArray[0]
//   for (let i =0 ; i< anArray.length; i++){
//     if (anArray[i] > largestNumber){
//       largestNumber = anArray[i]
//     }
//   }
//   console.log(largestNumber)
// }
