const maxSum = (arr, k) => {

    let sum=0;
    let maxSum=0;
    let i=0;
    if(arr.length<k){
        maxSum="invalid";
    }
    for(j=0;j<arr.length;j++){
        sum=sum+arr[j];
        if(j-i==k-1){
            if(maxSum<sum){
                maxSum=sum;
            }
            sum=sum-arr[i];
            i++;
            
        }
    }
    return maxSum
  };
  
  console.log(maxSum([100, 200, 300, 400], 2));
  console.log(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
  console.log(maxSum([2, 3], 4)); // Invalid
