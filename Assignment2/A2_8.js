// 8. Given an array of numbers, write a function that returns the index of the first number that is greater than 10. If no such number exists, return -1.  
function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            return i; 
        }
    }
    return -1; 
}

const a = [2, 3, 6, 7, 8];
console.log(array(a));  
