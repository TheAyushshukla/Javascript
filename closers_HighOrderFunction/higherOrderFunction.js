function sayhellow(){
    console.log(`Hellow , I'm Ayush Shukla`);
}
function greet(callback){
    console.log("hellow");
    callback();
}
// greet(sayhellow);
function greetPerson(name){
    return function(){
        console.log(`Hellow ${name}`);
    }
}
let person=greetPerson("Ayush Shukla");
// person();

const nums=[1,2,3,4,5];
let mpArr=nums.map(n => n*2);
// console.log(mpArr);

let ar=[1,2,3,4,5,6,7,8,9];
// console.log(ar.filter(n => n%2==0));

// console.log(ar.reduce((acc,val) => acc+val,0));

function myFilter(arr,logicFun){
    let result=[];
    for(let val of arr){
        if(logicFun(val)){
            result.push(val);
        }
    }
    return result;
}
const constant=myFilter([1,2,3,4,5,6],(n) =>n%2!=0);
console.log(constant);