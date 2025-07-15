const toggleBtn=document.querySelector("#toggleBtn");
const body=document.body;
const para=document.querySelector("#para");

const currentTheme=localStorage.getItem("theme");
if(currentTheme==="dark"){
    body.classList.add("dark-mode");
}
toggleBtn.addEventListener("click",function(){
    body.classList.toggle("dark-mode");

if(body.classList.contains("dark-mode")){
    localStorage.setItem("theme","dark");
    para.innerText="Dark theme is added";
    console.log(localStorage.getItem("theme"));
}
else{
    localStorage.setItem("theme","light");
    para.innerText="Light theme is added";
    console.log(localStorage.getItem("theme"));
}
});

