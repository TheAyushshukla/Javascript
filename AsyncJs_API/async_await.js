async function overflow(){
    try{
        const user=await loginUser();
        console.log(user);

        const cart=await getUserCart(user);
        console.log(cart);

        const order=await placeOrder(cart);
        console.log(order);
    }

    catch(err){
        console.log("Error:",err);
    }
}
// overflow();

async function getJoke(){
    try{
        const res= await fetch("https://api.chucknorris.io/jokes/random");
        const data= await res.json();
        console.log(data.value);
    }
    catch(err){
        console.log("Error",err);
    }
}
getJoke();