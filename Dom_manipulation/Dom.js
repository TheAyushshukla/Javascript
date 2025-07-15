function greetuser(){
    let name=document.getElementById("username").value;
    let heading =document.getElementById("heading");
    heading.innerHTML=`Hi ${name}`;
    heading.style.color="blue";
    heading.style.fontSize="40px";
}