function myMap(arr,logicFun){
    let result=[];
    for(let val of arr){
        result.push(logicFun(val));
    }
    return result;
}
const sq=myMap([1,2,3,4,5],(n)=>n**2);
// console.log(sq);

function myReduce(arr,logic,initial){
    let sum=initial;
    for(let val of arr){
       sum= logic(val,sum);
    }
    return sum;
}
const accu=myReduce([1,2,3,4,5,6,7,8,9],(add,sum)=>add+sum,0);
// console.log(accu);
// let arr=[1,2,3,5,6];
// arr.forEach(function(n){
//     console.log(n);
// });

function myForEach(arr,logic){
    for(let val of arr){
        logic(val);
    }
};
myForEach(["Ayush","Ashish","Disha"],(name)=>{
    console.log(`Hellow My name is ${name}`);
});