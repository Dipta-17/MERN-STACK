// 4. Set Operations:
//  Create a set to store a collection of unique courses.
//  Write functions to add a course, remove a course, and check if a course
// exists in the set.
//  Demonstrate the usage of these functions.

const courses=new Map();

function add(course){
     courses.set(course);
     console.log(`the courses are ${course}`)

}

function remove(course){
    if (courses.has(course)){
        courses.delete(course)
        console.log(`the ${course} is deleted`)
    }
    else
    {
        console.log("the course is not found")
    }
}

function checkcourse(course){
    if(courses.has(course)){
        console.log(`the ${course} is exists `);
    }
    else{
        console.log("course is not found")
    }
}

add("MCA")
add("ECE")
add("CSE")
add("BCA")

console.log(checkcourse("MCA"))

remove("BCA")
console.log(checkcourse("BCA"))

