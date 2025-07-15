// Destructing -> quickly extract values from arrays or objects 
const student={name:"Ayus",age:21};
const {name,age}=student;
// console.log(name, age);

let arr=[10,20,30,40];
let [a,b,c,d]=arr;
// console.log(a,b,c,d);

// spread Operator->clone arrays or objects , combine values
let newarr=[1,2,3];
let spreadarr=[...newarr,4,5,6];
// console.log(spreadarr);

let obj1={name:"Ayush",age:21};
let finalObj={...obj1,goal:"Ai Engineer"};
// console.log(finalObj);

// rest parameter ->collect multiple value in single parameter
function sum(...nums){
    console.log(nums.reduce((a,b)=>a+b,0))
}
// sum(1,2,3,4);

let nameArr=["Ayush","Akshay","Umesh"];
// for(let val of nameArr){
//     console.log(val);
// }

// Optional chaining->safely access deeply nested properties 
let myobj={
    name:"Ayush",
    age:21,
    Address:{
        city:"Jaipur",
        Area:"Vaishali Nagar"
    }
}
// console.log(myobj.Address?.Area);// print the address
// console.log(myobj.Address?.street);// not error ->undifined

// object Entries -> Loop through objects easily

let newObj={
    name:"Ayush",
    class:"Ai Enginnering",
    age:21,
    Hobbies:"Codding"
}
// for(let [key,val] of Object.entries(newObj)){
//     console.log(`Keys->${key} , value->${val}`);
// }

const book={
    title:"You can win",
    Author:"Disha",
    pages:300,
    genre:"Self Help"
}
let {title,Author}=book;
console.log(`title->${title} , author->${Author}`);

let bookProperty={...book,rating:4.8};


console.log(bookProperty.genre?.publisher);

function addgenre(...genre){
    console.log(`genre-> ${genre}`);
}
addgenre("sci-fi","Action","comady");