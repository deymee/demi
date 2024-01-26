console.log("Week03 - Objects, Class and Exceptions")
const student1 = {   // Object
    studentID: 1,
    name: "John",
    age: 20,
    isActive: true,
    course: "Web Programming",

    display: function() {
        console.log("Student ID: " + this.studentID)
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("Active: " + this.isActive)
        console.log("Course: " + this.course)
    }
}
console.log(student1)
student1.display()

// const student2 = {   // Object  
//     sid: 2,
//     fullname: "Mary",
//     age: 21,
//     isActive: false,
//     course: "Web Programming"
// }