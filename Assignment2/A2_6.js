// 6. Write a function that takes an array of numbers and returns an object with two properties: sum, the sum of all the numbers, and product, the product of all the numbers using reduce method.
let array=[2,6,8,5,7]
function arr(array){
    let sum=0
    let product=1
    for (let a of array){
        sum=sum+a;
        product=product*a

    }
    console.log("the sum of the element",sum)
    console.log("the multiplication of element",product)
}
arr(array)