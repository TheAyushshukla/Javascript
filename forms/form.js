const form=document.querySelector("#signupForm");
form.addEventListener("submit",function(e){
    e.preventDefault();

    const name=document.getElementById("username").value.trim();
    const email=document.getElementById("email").value.trim();
    
    if(name==="" || email===""){
        alert("Fill in all fileds");
        return;
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Enter valid email");
        return ;
    }
    alert(`welcome ${name}!`);
    form.reset();
});