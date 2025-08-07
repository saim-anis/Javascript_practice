
// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// for (i = 10; i<=100; i++){
// console.log(i)
// }

//6-august-2025
// CHAPTER 11 to 20 ASSIGNMENT



var Firstno = 20 ;
var Secondno = 20 ;

if(Firstno == Secondno){
    console.log("Ok Thek h")
}

//------------2-----------

var Age = prompt("Enter Your Age");

if(Age >= 18){
    alert("you are eligible")
}else{
    console.log("Tum chotay ho")
}

// ----------If-Else & Nested Conditions-----3--------

var Marks = prompt("Enter marks");

if(Marks >= 80){
    alert("A")
}else if(Marks >= 60){
     alert("B")
}else if (Marks >= 40){
    alert("C")
}else{
    alert("Fail")
}

//---------------4-----------
let score = prompt("Enter Score");
if (score > 90){
    console.log("Excellent")
}else if(score >= 70 & score <= 90){
console.log("Good")
}else{
    console.log("Needs improvement")
}

//-------------Arrays------------
let fruitsArr = ["Apple","Mango","Banana","Orange","Watermelon"]

console.log(fruitsArr [0])
console.log(fruitsArr [fruitsArr.length -1])

//Adding removing assignments

let arr = [1,2,3,4,5,6,7]
arr.push(8)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)


fruitsArr.splice(1,0,"grapes")
console.log(fruitsArr)


//----------slice method

let Newarr =fruitsArr.slice(2,3)
console.log(Newarr)
console.log(fruitsArr)

//--------loops--------
for (i = 5; i <= 5; i++) {
    for (j = 10; j >= 1; j--) {
        console.log(i + " x " + j + " = " + (i * j))
    }
}
