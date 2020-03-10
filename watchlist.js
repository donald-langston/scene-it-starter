document.addEventListener('DOMContentLoaded', function() {
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchList = JSON.parse(watchlistJSON);
     var watchListHTML = watchList.map(function(currentMovie) {
        return `<div class="movie card" style="width: 18rem;">
        <img src="${currentMovie.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${currentMovie.Title}</h5>
          <p class="card-text">${currentMovie.Year}</p>
          <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
        </div>
    </div>` 
    });
    watchListHTML.join("");
    document.getElementsByClassName("movies-container")[0].innerHTML = watchListHTML;
});