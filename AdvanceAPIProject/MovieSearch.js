const API_KEY="e25d8f99";

const searchBtn=document.querySelector("#searchBtn");
const searchInput=document.querySelector("#searchInput");
const loader=document.querySelector("#loader");
const resultDiv=document.querySelector("#results");
const recentList=document.querySelector("#recentList");
const themeToggle=document.querySelector("#toggleTheme");

//Load preview Theme
if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}

// toggle theme
themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",document.body.classList.contains("dark")? "dark" : "light");
});

// fetch Movie data
async function fetchMovie(query){
    loader.classList.remove("hidden");
    resultDiv.innerHTML="";

    try{
        const res=await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        const data=await res.json();

        if(data.Response==="False"){
            resultDiv.innerHTML=`<p> No movies found.</p>`;
        }
        else{
            data.Search.forEach(movie=>{
                const movieCard=document.createElement("div");
                movieCard.classList.add("movie-card");
                movieCard.innerHTML=`
                <h3>${movie.Title} (${movie.Year}) </h3>
                <img src="${movie.Poster}" alt="${movie.Title}" width="100"/>`;
                resultDiv.appendChild(movieCard);
            });
            updateRecentSearch(query);
        }
    }
    catch(err){
        resultDiv.innerHTML=`<p>Error fetching data.</p>`;
    }
    finally{
        loader.classList.add("hidden");
    }
}
// event click btn or press enter
searchBtn.addEventListener("click",()=>{
    const query=searchInput.value.trim();
    if(query) fetchMovie(query);
});

searchInput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        const query=searchInput.value.trim();
        if(query) fetchMovie(query);
    }
});

// save and show recent searches

function updateRecentSearch(query){
    let history=JSON.parse(localStorage.getItem("recentSearches")) || [];
    history.unshift(query);
    history=[... new Set(history)].slice(0,5);
    localStorage.setItem("recentSearches",JSON.stringify(history));
    renderRecentSearches();
}

function renderRecentSearches(){
    let history=JSON.parse(localStorage.getItem("recentSearches")) ||[];
    recentList.innerHTML="";
    history.forEach(item=>{
        const li=document.createElement("li");
        li.textContent=item;
        li.addEventListener("click",()=>fetchMovie(item));
        recentList.appendChild(li);
    });
}
renderRecentSearches();