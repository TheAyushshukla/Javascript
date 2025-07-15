let input=document.getElementById("input");
input.addEventListener("input",function(e){
    document.querySelector("#output").innerText=`Hellow ${e.target.value}`;
})

document.querySelector("#input2").addEventListener("input",function(e){
    let count=0;
    document.querySelector("#count").innerText=e.target.value.length;
})