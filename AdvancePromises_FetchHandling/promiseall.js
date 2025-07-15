const { use } = require("react");

async function getAll(){
    try{
        const [user,posts]= await Promise.all([
            fetch("/api/user").then(res=>res.json()),
            fetch("/api/posts").then(res=>res.json())
        ]);
        console.log(user,posts);
    }
    catch(err){
        console.error("one of them is failed",err.message)
    }
}

// all promises run together (parallet)
// It waits until ALL finished
//if any one fails,.catch runs
