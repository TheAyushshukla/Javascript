// Promise-> An object that represent a task that will complete in the future -either success(resolve) or failed(reject);

let fetchData= new Promise(function(resolve,reject){
    let networking =false;

    setTimeout(()=>{
        if(networking){
            resolve("Data loaded");
        }
        else{
            reject("Network failed");
        }
    },2000);
});

fetchData.then(function(res){
    console.log("Its:",res);
})
.catch(function(err){
    console.log("failed",err);
});