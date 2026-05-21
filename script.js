const columns = document.getElementById("grids");



fetch("info.json")
.then(response => response.json())
.then( data => 
    {data.forEach(moviesData => {
        
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
    })
});
