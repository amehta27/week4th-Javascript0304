let names = ["John","Mary", "Alex", "Steve", "Mary", "John"]
notDuplicateArray = []

  for (let i=0;i < names.length ; i++){
    let element = names[i]
      if(notDuplicateArray == 0){
         notDuplicateArray.push(element)
      }else{

       let found = false
       for(let j =0; j<notDuplicateArray.length ;j++){
          if(element == notDuplicateArray[j]){
            found = true;
            break
       }
     }

       if (found == false){
       notDuplicateArray.push(element)
       }
}
}
console.log(names)
console.log(notDuplicateArray)



//
// for(let j=0 ; j<notDuplicateArray.length; j++){
//   if(array[i] !== notDuplicateArray[j]){
//  notDuplicateArray.push(array[i]);
//  }
//
// }



//function removeduplicate(namesArray){

//  for(i=0; i<namesArray.length; i++){
//     if(namesArray[i] !== namesArray[i+1]){
//       notDuplicateArray.push(namesArray[i])
//     }
//  }
//
//  console.log(notDuplicateArray);
// }

// for each (var item not in namesarray){
//   if(namesArray[i] !== namesArray[i+1]){
  //       notDuplicateArray.push(namesArray[i])
  //     }
// }
