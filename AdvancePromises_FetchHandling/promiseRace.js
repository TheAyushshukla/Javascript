// first one settle wins

Promise.race([
    fetch("/api/slow"),
    fetch("/api/fast")
])
.then(data=> console.log("winner",data)).catch(err=>console.log("Error",err));