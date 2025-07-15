function greet(callback){
    setTimeout(()=>{
        console.log(`Hellow I'm Ayush Shukla`);
        callback();
    },2000)
};

greet(()=>{
    console.log(`Callback executed`);
});