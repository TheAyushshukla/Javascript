let message="  Ayush Shukla  ";
let origional=message;
console.log(origional);

console.log(`length of the string -> ${origional.length}`);
console.log(`Removing extra spaces ->${message.trim()}`);// not giving result
console.log(`Uppercase-> ${origional.toUpperCase()}`);
console.log(`Lowecase->${origional.toLowerCase()}`);
console.log(`Including ${origional.includes(" Learning Javascript ")}`);// output->false
console.log(origional.includes(" Learning Js")); // not giving result->false
console.log(origional)
console.log(origional.indexOf('A'));
console.log(origional.slice(0,3)); // output ->A
console.log(origional.replace("Shukla","The Shukla"));

let myName="Ayush Shukla";
console.log(myName.toUpperCase());
console.log(myName.length);
console.log(myName.slice(0,5));

