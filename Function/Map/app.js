// It is used when we performing operation in element of array and stores the updated array in new array

alert("js is working");

let arr = [1,2,3,4,5,6,7];
//multiplying the each array element to 3
    // let mapArray = arr.map(function(val){
    //     return val*3;
    // });
// optimized way using arrow function

    let mapArray = arr.map(val => val*3);
    console.log(mapArray);

// BTS 
    // let mapArray = [];
    // for(var i = 0; i<arr.length;i++){
    //     mapArray[i] = arr[i]*3;
    // }
    // console.log(mapArray);