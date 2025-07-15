// localStorage.setItem("username","Ayush");
// let user=localStorage.getItem("username");
// console.log(user);
// localStorage.clear();
// console.log(user);



// localStorage.setItem("name","Ayush_Shukla");
// localStorage.setItem("DOB","05-07-2007");
// let name=localStorage.getItem("name");
// let dob=localStorage.getItem("DOB");
// console.log(name);
// console.log(dob);

// setting objects 
localStorage.setItem("myself",JSON.stringify({myName:"Ayush Shukla",myage:"21"}));
let user=JSON.parse(localStorage.getItem("myself"));
console.log(user.myage);
console.log(user.myName);