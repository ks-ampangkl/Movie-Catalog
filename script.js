const columns = document.getElementById("grids");
const search = document.getElementById("search");
const submit = document.getElementById("submit");
const filter = document.getElementById("genre");

let allMovies = [];

//why we put render in a function? because if we dont it all renders once only, so if we filter any search, we can do it more than once iwth this function.


function renderData(movieArray){
    
    columns.innerHTML = "";//clears old cards

    movieArray.forEach(moviesData => {

        const movie = document.createElement("div");

        movie.classList.add("movie");

        movie.innerHTML = `
        <img src = ${moviesData.poster}>
        <p>Title: ${moviesData.title}</p>
        <p>Year: ${moviesData.year}</p>
        <p>Genre: ${moviesData.genre}</p>
        <p>Rating: ${moviesData.rating}</p>
        `;


        columns.appendChild(movie);    
    }
    );


}

//SEARCHING//
submit.addEventListener("click", () => {

    const movie = search.value.toLowerCase();
    const type = filter.value.toLowerCase();

    const filteredMovies = allMovies.filter(movies => movies.title.toLowerCase().includes(movie) && movies.genre.toLowerCase().includes(type));


    renderData(filteredMovies);
})


// search.addEventListener("input",() =>{
//     const movie = search.value.toLowerCase();

//     const filteredMovies = allMovies.filter(movies => movies.title.toLowerCase().includes(movie));
//     // determining what filtered movies are based on: filter allMovies array: checking if movies has same title as movie.includes to check if it is available through case insensitive scenario.
//     renderData(filteredMovies);
// })


fetch("info.json")
.then( response => response.json())
.then( data => {
    
    allMovies = data;
    renderData(allMovies);
});