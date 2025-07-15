const books=[
    {
    title:"You can win",
    author:"Shiva",
    genre:"self-help",
    pages:300
    },
    {
        title:"Atomic Habits",
        author:"james clear",
        genre:"Productivity"
    },
    {
        title:"Ikigai",
        author:"hector"
    }
];
for(let book of books){
    const {title,author,genre,pages}=book;
    console.log(`${title} by ${author}`);
    console.log(`genre:${genre || "N/A"} | pages:${pages || "N/A"}`);
    console.log(`Publisher: ${book.publisher?.name || "Not published yet"}`);
    console.log("....");
}

const ratedbook={...books[0],rating:4.8};
console.log("Updated book with rating:",ratedbook);
