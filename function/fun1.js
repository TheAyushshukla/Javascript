function check_even(a){
    if(a%2==0) return true;
    return false;
}
// console.log(check_even(23));
function square_no(n){
    return n**2;
}
// console.log(square_no(6))
function BodyMassIndex(weight,height){
    return weight/(height*height);
}
let BMI=BodyMassIndex(65,1.75);
BMI=Number(BMI.toFixed(2));
// console.log( BMI)

let Bmi=(weight,height)=>{
    return weight/(height*height);
}
console.log(Bmi(5,10))