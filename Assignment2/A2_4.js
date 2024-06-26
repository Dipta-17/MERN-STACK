// 4. Merge two arrays and add an additional element at the beginning of the merged array using the spread operator.
let a=[10,40,50,90]
let b=[4,6,3,8]
let newarray=[20, ...a, ...b]
console.log(JSON.stringify(newarray))