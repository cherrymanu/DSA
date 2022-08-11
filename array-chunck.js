

function chunk(arr,size){

    let arrayResult=[];
    let startWindow=0;

    for(let endWindow=0;endWindow<arr.length;endWindow++){

        if(endWindow-startWindow==size-1){
            arrayResult.push(arr.slice(startWindow,endWindow+1))
            startWindow=startWindow+size;
        }
        // if(endWindow/size>1 ){
        //     arrayResult.push(arr.slice(endWindow,arr.length))
        //     break
        // }

        if(arr.length%size!=0&&endWindow>=(size*2)){
            arrayResult.push(arr.slice(arr.length-arr.length%size,arr.length))
            break;

        }
        if(arr.length%size!=0&&endWindow>=(size*2)){
            arrayResult.push(arr.slice(arr.length-arr.length%size,arr.length))
            break;

        }
    }

    console.log(arrayResult);


}

chunk([1, 2, 3, 4], 2) 
//--> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) 
//--> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) 
//
//--> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) 
//--> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) 
//--> [[ 1, 2, 3, 4, 5]]
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// var citrus = fruits.slice(1, 3);
chunk(fruits,2);
//--> [[ 1, 2], [3, 4]]