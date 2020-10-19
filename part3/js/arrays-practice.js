//STEP 1
var moviesName = ["Joker", "Titanic", "Frozen", "Clue","Inception"];
window.console.log("Second Movie in my Entry is : "+ moviesName[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Solo";
movies[1] = "Waxwork";
movies[2] = "Avatar";
movies[3] = "Cinderella";
movies[4] = "Twilight";
window.console.log("First Movie in my Entry is : "+ movies[0]);

//STEP 3
var addMovies = movies ;
addMovies.splice(2,0, "Fear");
window.console.log("Length of the movie array is : "+addMovies.length);

//STEP 4
var movies = ["Joker", "Titanic", "Frozen", "Clue","Inception"];
window.console.log("List of Movies before deletion: "+ movies);
movies.shift();
window.console.log("List of Movies after deletion: "+ movies);

//STEP 5
var movies = ["Mac", "Firewall", "Piku", "Panga", "Queen", "Arya", "Wednesday"];
window.console.log("List of movies names using for loop: ");
for(var i=0; i < movies.length ; i++){
    window.console.log(movies[i]);
}

//STEP 6
var movielist = movies;
window.console.log("List of movies names using for-in loop :");
for (i in movielist) {
    window.console.log(movielist[i]);
}

//STEP 7
window.console.log("List of movies names in sorted order : ");
movielist.sort();
for (i in movielist) {
    window.console.log(movielist[i]);
}

//STEP 8
var leastFavMovies = ["Zoya", "Sadak", "Hero"];
window.console.log("Movies I like:\n\n");
for (i in movies) {
    window.console.log(movies[i]);
}
window.console.log("\n\n");

window.console.log("Movies I regret watching:\n\n");
for (i in leastFavMovies) {
    window.console.log(leastFavMovies[i]);
}

//STEP 9
var moviesList = movies.concat(leastFavMovies);
moviesList.sort().reverse();
window.console.log("Movies in reverse sorted order:");
for (i in moviesList) {
    window.console.log(moviesList[i]);
}


//STEP 10
window.console.log("\nLast item in array is: "+ (moviesList[moviesList.length -1]));


