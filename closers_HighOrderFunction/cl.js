function makegreeting(name){
    return function(){
        console.log(`Hellow ${name}`);
    }
};
let greet=makegreeting("Ayush");
greet();