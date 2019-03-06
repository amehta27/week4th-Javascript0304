function palindrome(str){
   let reversedstr = "";
   let lowstr = str.toLowerCase();

   for(let i= str.length-1; i >=0; i--){
      reversedstr += lowstr[i];
   }
   if (reversedstr == lowstr){
       console.log("The word is Palindrome")
   }
   console.log("The word is not Palindrome")
}

palindrome("mom");
palindrome("cat");
