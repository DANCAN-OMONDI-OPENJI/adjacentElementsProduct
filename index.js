const inputArray = [3, 6, -2, -5, 7, 3];
function solution(inputArray) {
    let num = 0;
    for(let j = 0; j < inputArray.length; j++) {
        if(inputArray[j] < inputArray[j-1]) {
            num = inputArray[j]
        }
    }
   let product = num
   for (let i = 0; i < inputArray.length; i++) {
      let mySum =  inputArray[i-1] * inputArray[i]
      if (mySum >= product) {
          product = mySum
      } 
   }
   return product
}
