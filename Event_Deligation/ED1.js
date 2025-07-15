document.querySelector("#parent").addEventListener("click",function(e){
    if(e.target.classList.contains("like")){
        alert("Thanks for like");
    }
    else if(e.target.classList.contains("share")){
        alert("Thanks for share");
    }
})