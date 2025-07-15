// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log(`Hi I'm ${this.name} and my age is ${this.age}`);
//     }
// };
// const s1=new Student("Ayush",21);
// s1.greet();

class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
    isPassed(){
        return this.marks>=33;
    }
    grade(){
        if(this.marks>=90) return "A+";
        else if(this.marks>=75) return "A";
        else if (this.marks>=50) return "B";
        else return "C";
    }
};

const students=[
    new Student("Ayush",96),
    new Student("Ravi",99),
    new Student("Disha",53)
]
students.forEach((s)=>{
    console.log(`${s.name} - ${s.grade()} - ${s.isPassed() ? "Passed" : "Failed"}`);
});
s2=new Student("Ayush Shukla",98);
console.log(s2.grade());
console.log(s2.isPassed());

class user{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hellow ${this.name}`);
    }
};
class Admin extends user{
    constructor(name,role){
        super(name);
        this.role=role;
    }
    deleteuser(user){
        console.log(`${this.name} deleted ${user}`);
    }
};
const admin=new Admin("Ayush","superAdmin");
admin.greet();
admin.deleteuser("ravi");

class BankAccount{
    #balance=0;
    
    deposit(amount){
        this.#balance+=amount;
    }
    getBalance(){
        return this.#balance;
    }
}
const acc=new BankAccount();
console.log(acc.getBalance());
acc.deposit(500);
console.log(acc.getBalance());