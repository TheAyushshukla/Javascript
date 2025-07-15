//try again if api fails

async function fetchWithRetry(url,tries=3){
    for(let i=0;i<tries;i++){
        try{
            const res=await fetch(url);
            if(!res.ok) throw new Error("Bad Response");
            
            return await res.json();
        }
        catch(err){
            if(i===tries-1) throw err ;
            console.log(`Retrying ... (${i+1})`);
        }
    }
}