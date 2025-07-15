function getUserAge(age){
    if(isNaN(age)){
        throw new Error("Enter valid age");
    }
    if(age<0 || age>=100){
        throw new Error("Are u immortal or what!")
    }
    return `Valid age: ${age}`;
}
try{
    console.log(getUserAge(99));
}catch(e){
    console.log(e.message);
    alert(e.message);
}