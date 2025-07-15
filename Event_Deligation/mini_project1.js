document.querySelector("#qaSection").addEventListener("click",function(e){
    if(e.target.classList.contains("reply-btn")){
        const parentQA=e.target.parentElement;

    if(parentQA.querySelector(".reply-box")) return;

    const input=document.createElement("input");
    input.placeholder="Type your reply";
    input.classList.add("reply-box");

    const postBtn=document.createElement("button");
    postBtn.innerText="Post Reply";
    postBtn.classList.add("post-reply");

    parentQA.appendChild(input);
    parentQA.appendChild(postBtn);
    }

    if(e.target.classList.contains("post-reply")){
        const parentQA=e.target.parentElement;
        const replyText=parentQA.querySelector(".reply-box").value;

        if(replyText.trim()==""){
            alert("Reply cannot be empty");
            return;
        }

        const reply=document.createElement("p");
        reply.innerText=`${replyText}`;
        parentQA.querySelector(".replies").appendChild(reply);

        parentQA.querySelector(".reply-box").remove();
        e.target.remove();
    }
});

