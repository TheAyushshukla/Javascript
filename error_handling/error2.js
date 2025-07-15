function submitform(name,email){
    if(!name || !email){
        throw new Error("All fields are required");
    }
    if(!email.includes('@')){
        throw new Error("Invalid email");
    }
    return `Form submitted ${name}`;
}
try{
    submitform("Ayush","");
}catch(e){
    console.log(e.message);
    alert(e.message);
}