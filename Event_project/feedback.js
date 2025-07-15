document.querySelector("#nameInput").addEventListener("input",function(e){
    document.querySelector("#prevName").innerText=e.target.value || "--";
});

document.querySelector("#emailInput").addEventListener("input",function(e){
    document.querySelector("#prevEmail").innerText=e.target.value || "--";
});

document.querySelector("#messageInput").addEventListener("input",function(e){
    document.querySelector("#prevMsg").innerText=e.target.value || "--";
    document.querySelector("#charCount").innerText=`${e.target.value.length}/100 character`;
});
document.querySelector("#submitBtn").addEventListener("click",function(){
    let name=document.querySelector("#nameInput").value.trim();
    let email=document.querySelector("#emailInput").value.trim();
    let message=document.querySelector("#messageInput").value.trim();

    if(!name || !email || !message){
        alert("please fill in all box");
        return;
    }
    alert(`Thank you for your feedback ${name}`);
});

