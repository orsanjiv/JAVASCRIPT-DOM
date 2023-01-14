// filter is used to pickup the desire data from array 

/*let arr = [16, 3, 9, 23, 11, 23, 44, 12];

let newArr = arr.filter(function(val){
    return val > 11;
});
console.log(newArr);
        OR 
optimized way using array function 
let newArr = arr.filter(val => val>11);
console.log(newArr);
*/  


// Filter in Object array
let arr = [
    {
        Position:"developer",
        Name:"Rakesh"
    },
    {
        Position:"UI/UX Designer",
        Name:"ram"
    },
    {
        Position:"developer",
        Name:"sham"
    },
    {
        Position:"Consultant",
        Name:"radha"
    },
    {
        Position:"Manager",
        Name:"Chaan"
    },
    {
        Position:"developer",
        Name:"David"
    },
    {
        Position:"Android Developer",
        Name:"Robert"
    },
    {
        Position:"developer",
        Name:"Junior"
    }
];

let newArr = arr.filter(val => val.Position="developer");
console.log(newArr)


