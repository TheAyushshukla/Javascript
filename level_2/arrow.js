

let greet=(name)=>`Hellow ${name}`;
// console.log(greet("Ayush"));

let square=(no)=> no**2;
// console.log(square(2));

let sq=(no)=> {return no**2};

// console.log(sq(5));

 let getuser=()=>({
    name:"Ayush",
    city:"jaipur"
 });
//  console.log(getuser());

let createUser=(name,email)=>({
    id:Date.now(),
    name:name,
    email:email
});
// console.log(createUser("Ayush","ayushshukla@gmail.com"));

let getProductDetail=(productName,price)=>({
    productName:productName,
    price:price,
    isPremium:(price >50000)
});
// console.log(getProductDetail("Iphone",150000))
let student={
    name:"Ayush",
    age:21,
    subjects:["js","DSA","Html","css"],
    showInfo:function(){
        console.log(`hi, I'm ${this.name} and I'm ${this.age} old.`)
    },
    listSub:function(){
        this.subjects.forEach((sub)=>{
            console.log(`${this.name} is studying ${sub}`)
        })
    },
    addSub:function(newsub){
        this.subjects.push(newsub);
    },
    changeName:function(newName){
        this.name=newName;
    },
    showDetail:function(){
        this.showInfo();
        this.listSub();
    }   

};
// student.showInfo();
// student.listSub();
student.addSub("Python");
student.changeName("Ayush Shukla");
student.showDetail();