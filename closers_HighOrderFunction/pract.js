function createCounter(start){
    let count=start;
    return{
        increment: function(){
        count++;
        console.log(count);
    },
       reset:function(){
        count=start;
        console.log(count);
       }
    }
};
let counter=createCounter(5);
counter.increment();
counter.increment();
counter.reset();
counter.increment();