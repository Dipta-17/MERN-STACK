// 1. Write a function that takes an array of numbers and returns the first and last elements of the array.
function array(x){
    const [first]=x;
    last=x[x.length-1];
    console.log("first element",first)
    console.log("last element",last)
}

let a=[10,30,50,20];
array(a);