/*
create a list of 5 number
console log the total number of elements in it
console log the third element 
change the 4th value to something else
Insert a new value at end
remove a value from the end
Loop over the entire list
Loop over the entire list by skip count 2

*/


// TASK 1 
// let list = [1,2,3,4,5]
//

// TASK 2
//console.log(list.length)
//

// TASK 3
//console.log(list[2])
//

// TASK 4
//list[3] = 10
//console.log(list)
//

// TASK 5
// list.push(6)
// console.log(list)
//

// TASK 6
// list.pop()
// console.log(list)
//

// TASK 7
// for (const i of list){
//     console.log(list)
// }
//

// TASK 8
// for (let i= 0;i<list.length; i=i+2){
//     console.log(list[i])
// }
//

// let list = [1,2,3,4,5,6,7,8,9,10]
// let new_list = list.filter(x => x % 2 == 0)
// console.log (new_list)

// let list = ["iqra","azam","nazia","ahsan"]
// let new_list = list.filter(x => x.length > 4)
// console.log(new_list)

// let list = [2,17,19,5,7,18]
// let new_list = list.filter(x => x > 10)
// console.log(new_list)

// let list = ["adfw","bedfvgsdf","azaxcdeafd","griuhgn" "pgjjufhg","asj"]
// let new_list = list.filter(x => x.startsWith("a"))
// console.log(new_list)

// let list = [1,-5,7,2,-3,-9,6,0]
// let new_list = list.filter(x => x >= 0)
// console.log(new_list)

// let list = [
//     {
//         "id" : 1,
//         "name" : "Ahsan",
//         "grade" : 7
//     }
//     ,
//     {
//         "id" : 2,
//         "name" : "Abubakar",
//         "grade" : 12
//     }
// ]
// let new_list = list.filter(x => x.name == "Ahsan")
// console.log(new_list)

// const students = [
//   { name: "Ali", score: 80 },
//   { name: "Sara", score: 45 },
//   { name: "Ahmed", score: 60 },
//   { name: "Zara", score: 30 }
// ];
// let new_list = students.filter(x => x.score >= 50)
// console.log(new_list)

const items = [
  { name: "Laptop", available: true },
  { name: "Mouse", available: false },
  { name: "Keyboard", available: true },
  { name: "Monitor", available: false }
];

let new_list = items.filter(x => x.available == true)
console.log(new_list)