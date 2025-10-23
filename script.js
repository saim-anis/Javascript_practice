// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// for (i = 10; i<=100; i++){
// console.log(i)
// }




// var Firstno = 20 ;
// var Secondno = 20 ;

// if(Firstno == Secondno){
//     console.log("Ok Thek h")
// }

//------------2-----------

// var Age = prompt("Enter Your Age");

// if(Age >= 18){
//     alert("you are eligible")
// }else{
//     console.log("Tum chotay ho")
// }

// ----------If-Else & Nested Conditions-----3--------

// var Marks = prompt("Enter marks");

// if(Marks >= 80){
//     alert("A")
// }else if(Marks >= 60){
//      alert("B")
// }else if (Marks >= 40){
//     alert("C")
// }else{
//     alert("Fail")
// }

//---------------4-----------
// let score = prompt("Enter Score");
// if (score > 90){
//     console.log("Excellent")
// }else if(score >= 70 & score <= 90){
// console.log("Good")
// }else{
//     console.log("Needs improvement")
// }

//-------------Arrays------------
// let fruitsArr = ["Apple","Mango","Banana","Orange","Watermelon"]

// console.log(fruitsArr [0])
// console.log(fruitsArr [fruitsArr.length -1])

//Adding removing assignments

// let arr = [1,2,3,4,5,6,7]
// arr.push(8)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(0)
// console.log(arr)

// fruitsArr.splice(1,0,"grapes")
// console.log(fruitsArr)

//----------slice method

// let Newarr =fruitsArr.slice(2,3)
// console.log(Newarr)
// console.log(fruitsArr)

// //--------loops--------
// for (i = 5; i <= 5; i++) {
//     for (j = 10; j >= 1; j--) {
//         console.log(i + " x " + j + " = " + (i * j))
//     }
// }

// let Students = {
//     Name: "Ali",
//     Fathername: "Rehman",
//     Age: 20,
//     Gender: "Male",
//     Favoritethings: [
//         { Food: ["Biryani", "Haleem", "Pizza"] },
//         { Hobby: "Programming" },
//         { Colour: ["Blue", "Red", "Green"] }
//     ]

// }
// console.log(Students.Name)
// or
// console.log(Students["Name"])

// console.log(Students["Favoritethings"][0].Food[0])

// let car = {Electric: ["Tesla", "Byd", "Deepal", "Hyundai","Toyota","Bmw"]}
// console.log(car["Electric"][0])

// let person = {
//     Studentname: "Farhan",
//     Class: 10,
//     Marks: [
//         { Sindhi: "20" },
//         { English: "50" },
//         { Urdu: "90" },
//         { Computer: "100" },
//     ]
// };

// console.log(person.Marks[2])

// let inTag = document.getElementById("h1")

// a = h1.innerText = (`My name is ${person.Studentname} I study in Class ${person.Class} I achives ${person.Marks[3].Computer} Marks in Computer Science`)
// console.log(a)

// // let col = Math.ceil(Math.random()) * 2
// // console.log(col);

// function generateColor() {
//       // Random hex color
//       let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//       // Apply color to box
//       document.getElementById("colorBox").style.backgroundColor = randomColor;

//  document.getElementById("colorBox") = + randomColor;

// }
//       generateColor()

      let text ="hello world"
      let newText = text.replace("hello","Jello")
      console.log(newText)

      console.log(text.charAt(0))

      let strtoInt = "abc"
      let method = parseInt(strtoInt)
      console.log(method)


      let Num = Math.random() * 100
    //   console.log(Num)

      console.log(Num.toFixed(2)) //only 2 will stay in after decimal

let Countries = ["Canada","London","America","Dubai",
    
    "Palestine","Bahrain","Qatar","Yemen"]

//Check that value is found or not

console.log(Countries.includes("Yemen"))


let Int = "545"


let InttoStr = parseInt(Int)


console.log(InttoStr + 5)


for (let i = 10; i >= 1; i--) {
console.log([i] * 2)
  
}
// i 10 h right now
// I say that jab
// i (10) 0 se big and equal hojaye tb tk chalao


let junior = ["Ali","Kamran","Rehan"]
let Senior = ["Farzan","Ahmed","Imran"]



console.log(junior.join("_+_"))


console.log(junior.concat( Senior))

console.log(junior.indexOf("Rehan"));



console.log(Senior.isArray)

let integer = "1.226666"

let result = parseInt(integer)

console.log(result )



// convert array into string

console.log(Senior.toString())

  // Convert String to Array

  let Senior1 = "Saim" 

console.log(Senior1.split())


let Myname = "Saim"

console.log(Myname)

let Round = 16.5

let Mathround = Math.round(Round)

console.log(Mathround);


let submitBtn = document.getElementById("Submit")

// Function is invoked/call

// submitBtn.addEventListener("click",  submission()) 


submitBtn.addEventListener("click",  submission)

async function submission() {
  console.log("Function is Running");

  // Function click hone pr chalega

setTimeout(() => {
  // alert("after 3 seconds")
  let prompt1 = prompt("Enter first no",39)

   let prompt2 = prompt("Enter Second no" ,2)
   
   let alertMsg = alert(parseInt(prompt1) + parseInt(prompt2))
  
   console.log(alertMsg);
}, 3000);

}
