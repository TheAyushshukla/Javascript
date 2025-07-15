// chaining-> Its when u call then again and again -each then returns a new promise

function loginUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("user logged IN")
        },1000)
    });
}
function getUserCart(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${user}-> Cart loaded`);
        },1000);
    });
}

function placeOrder(cart){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${cart}-> Order Placed`)
        },1000);
    });
}

loginUser()
        .then(res=>{
            console.log(res);
            return getUserCart(res);
        })
        .then(res2=>{
            console.log(res2);
            return placeOrder(res2);
        })
        .then(res3=>{
            console.log(res3);

        })
        .catch(err=>{
            console.log("Error:",err);
        })