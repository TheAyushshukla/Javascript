let favMovies=["Intersteller","inception","Shawshank Redemption"];
console.log(favMovies[0]);
console.log(favMovies.length);
favMovies.push("Peaky Blinders");

for(let i=0;i<favMovies.length;i++){
    console.log(`favorite Movie->${favMovies[i]}`);
}
for(let Movie of favMovies){
    console.log(Movie);
}