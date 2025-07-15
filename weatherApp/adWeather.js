const API_KEY = "41474ef1e4ecfa9ba0d23cbcf698ff09";

const searchBtn=document.querySelector("#searchBtn");
const loader=document.querySelector("#loader");

searchBtn.addEventListener("click", async()=>{
    const city=document.querySelector("#cityInput").value.trim();

    if(!city){
        alert("Please Enter the city name");
        return;
    }

    document.querySelector("#cityName").innerText="--";
    document.querySelector("#temp").innerText="Temperatur: --Oc";
    document.querySelector("#desc").innerText="Description: --";
    document.querySelector("#sunrise").innerText="Sunrise: --";
    document.querySelector("#sunset").innerText="Sunset: --";
    document.querySelector("#icon").src="";

    loader.style.display="block";

    try{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if(!res.ok) throw new Error("City not found");
        const data =await res.json();

        const iconCode=data.weather?.[0]?.icon;
        const sunrise=new Date(data.sys?.sunrise*1000).toLocaleTimeString("en-In");
        const sunset=new Date(data.sys?.sunset*1000).toLocaleTimeString("en-In");

        document.querySelector("#cityName").innerText=data.name;
        document.querySelector("#temp").innerText=`Temperature: ${data.main.temp}Oc`;
        document.querySelector("#desc").innerText=`Description: ${data.weather?.[0]?.description}`;
        document.querySelector("#sunrise").innerText=`Sunrise:${sunrise}`;
        document.querySelector("#sunset").innerText=`sunset:${sunset}`;
        document.querySelector("#icon").src=`http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }
    catch(err){
        alert(err.message || "Something went wrong");
    }
    finally{
        loader.style.display="none";
    }
});