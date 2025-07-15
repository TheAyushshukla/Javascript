document.querySelector("#button").addEventListener("click",function(){
    document.querySelector("#color").style.backgroundColor="red";
})
document.querySelector("#input").addEventListener("input",function(e){
    document.querySelector("#heading").innerText=`Hellow ${e.target.value}`;
})
document.querySelector("#input2").addEventListener("keydown",function(e){
    document.querySelector("#key").innerText=`${e.key} is pressed`;
    alert(`${e.key} is pressed`);
})
document.addEventListener("keydown",function(e){
    console.log("key",e.key);
    if(key=="Enter"){
        alert("Enter is pressed");
    }
})