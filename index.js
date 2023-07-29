function hasTargetSum(array, target) {
  for(let i=0; i<array.length-1; i++){
  for(j=i+1; j<array.length; j++){
    if(array[i]+ array[j]===target){
      return true
    }
  }
  }
  return false
}
hasTargetSum([4,5,6,7,2,1], 11)

  // I am required to write a function that checks if any two numbers in
  // an array add up to a certain target
  //eg if array =[0,2.4.6] and target=6, the function returns true. Otherwise it
  // should return false




/* 
  Write the Big O time complexity of your function here
*/

/*  Add your pseudocode here
let i=o, i<array.length, i++ and j=array.length-1-i, j<array.length, j++
i is the first item in the array and j is the second item in the array
iterate through all elements of the array and add the element at index position i to elements at
the index position j
if(index[i]+index[j])===target,
return true,
Else return false
 
*/


/*
  Add written explanation of your solution here
  The function iterates through all the elements of the array and adds it to the next
  element of the array. If the result is the target then it terminates and returns true.
  If the result is not the turget it adds the first element to the third element and so forth.
  If the iteration is complete and the result is not equal to the target, then it takes the second element
  and starts the iteration again. 
  Total posible steps will be 
  1st iteration = n steps
  2nd iteration = n-1 steps
  .
  .
  .
  nth iteration = n-(n-1)=1
  time complexity = O(n*n)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
