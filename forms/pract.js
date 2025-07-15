document.querySelector("#submit").addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.querySelector("#userName").value.trim();
    let email=document.querySelector("#userEmail").value.trim();
    let msg=document.querySelector("#msgInput").value.trim();

    if(!name || !email || !msg){
        alert("Fill all the boxes");
        return;
    }
    if(!email.includes("@")){
        alert("Invalid Email");
        return;
    }
    alert("Thanks for the submit");

});
document.querySelector("#userName").addEventListener("input",function(e){
    document.querySelector("#name").innerText=e.target.value || "--";
});
document.querySelector("#userEmail").addEventListener("input",function(e){
    document.querySelector("#email").innerText=e.target.value || "--";
});
document.querySelector("#msgInput").addEventListener("input",function(e){
    document.querySelector("#msg").innerText=e.target.value ||"--";
    document.querySelector("#character").innerText=`${e.target.value.length}/100`;
})