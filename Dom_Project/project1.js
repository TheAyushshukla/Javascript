let postBtn=document.querySelector("#postBtn");

postBtn.addEventListener("click",function(){
    let input=document.getElementById("commentInput");
    let commentText=input.value;
    

    if(commentText===""){
        alert("please write something 😅");
        return;
    }
    let comment=document.createElement("div");
    comment.classList.add("comment");
    comment.innerText=commentText;

    if(commentText.length>=20){
        alert("Ur limit expired");
        input.value="";
    }
    
    let deleteBtn=document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText="Delete";
    deleteBtn.style.marginLeft="80%";
    deleteBtn.style.backgroundColor="#212121";
    deleteBtn.style.color="red";
    
    deleteBtn.addEventListener("click",function(){
        comment.remove();
    })
    comment.appendChild(deleteBtn);
    document.getElementById("commentSection").append(comment);
    input.value="";
})