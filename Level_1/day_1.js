// console.log("Ayush Shukla");
// let name=prompt("Enter your name:");
// let mood=prompt("How's your mood");
// console.log("MY name is"+name+"My mood is"+mood);

let firstNo=Number(prompt("Enter the first NO->"));
let secondNo=Number(prompt("Enter the second NO->"));
let operatorType=prompt("What's your operater");

let ans;
if(operatorType=='+'){
     ans=firstNo+secondNo;
}
else if(operatorType=='-'){
    ans=firstNo-secondNo;
}
else if(operatorType=='*'){
    ans=firstNo*secondNo;
}
else{
    ans=firstNo/secondNo;
}
console.log("Your ans->"+ans);
alert("Your ans->"+ans);

