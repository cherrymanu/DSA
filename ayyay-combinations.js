// k_combinations([1, 2, 3], 1)
// *   -> [[1], [2], [3]]
// *
// *   k_combinations([1, 2, 3], 2)
// *   -> [[1,2], [1,3], [2, 3]
// *
// *   k_combinations([1, 2, 3], 3)
// *   -> [[1, 2, 3]]
function k_combinations(set, k) {
  let arrSet = [];

  if (set.length < k) {
    arrSet = [];
  } else if (set.length == k) {
    arrSet = set;
  } else {
    for (let i = 0; i < set.length; i++) {
        
  
    let j=i+1
 
    while(j+k-1<=set.length){
        let arr=[];
        arr=[set[i],...set.slice(j,j+k-1)]
        arrSet.push(arr)
        j++
    }
    }
    
  }

  return arrSet;
}
console.log(k_combinations([1, 2, 3,4], 2));




