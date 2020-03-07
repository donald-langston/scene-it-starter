document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
       var movieHTML = movieArray.map(function(currentMovie) {
            return `<div class="movie card" style="width: 18rem;">
            <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${currentMovie.Title}</h5>
              <p class="card-text">${currentMovie.Year}</p>
              <a href="#" class="btn btn-primary">Add</a>
            </div>
        </div>`
        });
        return movieHTML.join("");
    }
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementsByClassName("movies-container")[0].innerHTML = renderMovies(movieData);
    });
});



