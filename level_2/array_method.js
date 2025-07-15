let price=[10,12,13,14,15];

let newPrice=price.map(P=>P*2);
// console.log(newPrice)

let newP=price.filter(P=> P%2==0);
// console.log(newP);

let totalPrice=price.reduce((Add,curr)=>Add+curr,0);
// console.log(totalPrice);

let username=[{name:"Ayush",age:21},{name:"Ashish",age:14},{name:"Disha",age:25}];

let adult=username.filter(Age=>Age.age>18).map(user=>user.name);
// console.log(adult);

let no=[1,2,3,4,5,6,7];
let squareNo=no.filter(odd=>(odd%2!=0)).map(sq=>sq**2);
// console.log(squareNo);

let user=[{name:"Ayush",age:21},{name:"Kartik",age:24},{name:"Khushi",age:11},{name:"Parul",age:15}];

let totalAdult=user.filter(aligible=>aligible.age>18).reduce((sum,initial)=>sum + initial.age,0);

// console.log(totalAdult)

let celcius=[0,10,20,30];
let fehrenheit=celcius.map(temp=>(temp*1.8)+32);
// console.log(fehrenheit);

let products = [
  { name: "Phone", price: 999 },
  { name: "Laptop", price: 50000 },
  { name: "Charger", price: 150 },
  { name: "Monitor", price: 1200 }
];

let primium=products.filter(val=>val.price>1000).map(custName=>custName.name);
console.log(primium);

let emails = [
  "ayushshukla@gmail.com",
  "someone@yahoo.com",
  "test@gmail.com",
  "admin@outlook.com",
  "hero@gmail.com"
];
let valid=emails.filter(isValid=>isValid.includes("@gmail.com")).length
console.log(valid)