const API_KEY="41474ef1e4ecfa9ba0d23cbcf698ff09";

document.querySelector("#searchBtn").addEventListener("click",async()=>{
    const city=document.querySelector("#cityInput").value.trim();
    if(!city) return alert("Please enter the city");

    try{
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        if(!res.ok) throw new Error("City not found");
        const data=await res.json();

        document.querySelector("#cityName").innerText=data.name;
        document.querySelector("#temp").innerText=`Temperature: ${data.main.temp} oC`;
        document.querySelector("#desc").innerText=`weather ${data.weather[0].description}`;
    }
    catch(err){
        alert("Error:",err.message);
    }
});
