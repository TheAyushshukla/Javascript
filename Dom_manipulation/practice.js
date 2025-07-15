let btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
    let name=document.querySelector("#nameinput").value;
    document.querySelector("#Heading").innerText=`Hellow ${name}`;
})

let btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(){
    let name2=document.getElementById("nameinput").value;
    let heading=document.getElementById("Heading");
    heading.innerText=`I'm Ayush Shukla learning Javascript`;
    heading.style.color="red";
    heading.style.fontSize="5rem";
    heading.style.backgroundColor="black";
    alert("U clicked the butoon");
  
});
let allbtn=document.querySelectorAll("button");
allbtn.forEach(btn=>{
    btn.style.backgroundColor="black";
    btn.style.color="purple";
})

let btn3=document.createElement("button");
btn3.classList.add("btn3");
document.body.appendChild(btn3);
btn3.innerHTML="Button 3";
btn3.style.backgroundColor="black";
btn3.style.color="red"