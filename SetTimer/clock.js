function updateclock(){
    const now=new Date(); // current time

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    const ampm=hours>=12 ?"PM" : "AM";

    hours=hours%12 || 12;

    // pad single digit with zero
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");

    const timeString=`${hours} :${minutes}:${seconds} ${ampm}`;
    document.querySelector("#time").innerText=timeString;

    const dateString=now.toLocaleDateString("en-IN",{
        day:"2-digit",
        month:"long",
        year:"numeric"
    });

    document.querySelector("#date").innerText=dateString;
}
let updateclockId=setInterval(updateclock,1000);
updateclock();
let isRunning=false;
let paused=document.querySelector("#stop")
paused.addEventListener("click", function(){
    clearInterval(updateclockId);
    isRunning=false;
});
document.querySelector("#resume").addEventListener("click",function(){
    if(!isRunning){
        updateclockId=setInterval(updateclock,1000);
        updateclock();
        isRunning=true;
    }
})