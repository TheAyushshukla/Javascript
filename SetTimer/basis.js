// setTimeout(()=>{
//     console.log("Ayush Shukla");
//     alert("Hey , Ayush 3 second passed");
// },3000);

let count=0;
let timer=setInterval(()=>{
    count++;
    console.log(`${count}`);
    if(count===10){
        clearInterval(timer);
        console.log("The interval is paused");
        alert("congratulations u learned clear Interval");
    }
},1000);