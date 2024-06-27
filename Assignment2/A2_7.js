// 7. Write a function that returns the array sorted by the length of each string, in ascending order.
function sorted(array){
    return array.sort((a,b)=> a.length - b.length);
}

const a=["cat","dog","crocodile","gorila","monkey","hipopotemass"];
console.log(sorted(a));