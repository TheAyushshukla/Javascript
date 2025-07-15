// try{
//     let data=JSON.parse('name','Ayush');
//     console.log(data);
// }catch(e){
//     console.log("Error cautch",e.message);
// }finally{
//     console.log("Execution complete");
// }

function divide(a,b){
    if(b===0){
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}
try{
    console.log(divide(10,0));
}catch(e){
      console.log("cautch Error",e.message);
}