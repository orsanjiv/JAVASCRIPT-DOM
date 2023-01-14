// we can pass function as an argument

function sayHi(){
    console.log("hi");
}

function sayHello(){
    console.log("hello");
}

function add(a,b,callback){
    console.log(a+b);
    callback();
}

var a = 10;
var b = 12;

add(a,b,sayHello)
add(a,b,sayHi)

add(a,b,function(){
    console.log("bye bye");
})
