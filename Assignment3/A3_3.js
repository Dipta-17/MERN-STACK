// 3. Map Operations:
//  Create a map to store student names and their corresponding scores.
//  Write functions to add a student, remove a student, and get a student&#39;s score.
//  Demonstrate the usage of these functions.

const student=new Map();

function add(name,score){
    student.set(name,score);
    console.log(`student name: ${name} student score: ${score}`);
}

function remove(name){
    if (student.has(name)){
        student.delete(name);
        console.log(`deleted student: ${name}`)
    }
    else{
        console.log("student not found")
    }
}
function studendscore(name){
    if(student.has(name)){
        return`student name ${name}: ${student.get(name)}`;
    }
    else{
        return `student not found`;
    }
}

add("Ram",5)
add("shyam",70)
add("jodu",80)

console.log(studendscore("shyam"));

remove("Ram")
console.log(studendscore(("Ram")))
