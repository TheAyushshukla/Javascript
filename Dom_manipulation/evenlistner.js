let btn=document.getElementById("greet-btn");

btn.addEventListener("click",function() {
    let name=document.getElementById("username").value;
    let heading=document.getElementById("heading");
    heading.innerHTML=`Hi ${name}`;
    heading.style.color="red";
    heading.style.fontSize="2rem";
})