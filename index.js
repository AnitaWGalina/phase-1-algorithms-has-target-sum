function hasTargetSum(arr, targetSum) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum === targetSum) {
    console.log("true");
  } else {
    console.log("false");
  }
}

hasTargetSum([4, 5, 6], 9);

/* 
  Write the Big O time complexity of your function here
  O(n)
  As the array will iterate through each element.
*/

/* 
  Add your pseudocode here
   Iterate through each element using a for loop
   If the hasTargetSum=9 , return a value of true
   Elsereturn false
*/

/*
  Add written explanation of your solution here
  The for loop will iterate through each element of the array 
   and add its value to a running total
   If the hasTargetSum=9 , it will return a value o true
   Else it will return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) console.log("=>", hasTargetSum([4, 3, 6], 9));
console.log("Expecting: true");

console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

module.exports = hasTargetSum;
