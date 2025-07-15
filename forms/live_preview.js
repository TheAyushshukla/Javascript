// document.querySelector("#nameInput").addEventListener("input",function(e){
//     document.querySelector("#liveName").innerText=e.target.value || "--";
// });

document.querySelector("#msgInput").addEventListener("input",function(e){
    let name=document.querySelector("#counter");
    name.innerText=`${e.target.value.length}/100`;
    if(e.target.value.length===100){
        alert("You reached the limits");
    }
});