

// Find consecutive numbers that equal to the sum of k

//From a unsorted array, check whether there are any two numbers that will sum up to a given number
// O(n^2)
// sumFinder([6,4,3,2,1,7], 9); = true
// sumFinder([6,4,3,2,1,7], 2); = false


function sumFinder(arr, sum) {
    let len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] + arr[j] == sum) {
          return true;
        }
      }
    }
  
    return false;
  }
console.log(sumFinder([6,4,3,2,1,7], 9));