// 9. Write a function that removes the third element from an array and returns a new array with the removed element. Do not modify the original array.  
function array(arr){
    let a=[];
    for (let i=0;i<arr.length;i++)
        {
            if(i!==2){
                a.push(arr[i]);
            }
        }
        return a;
}
const b=[10,50,3,7,40];
console.log(array(b));

