const numberOfFlims=prompt("How much films you see?","for exaple 45");

let personalMovieDB={
    count:numberOfFlims,
    movies:{},
    actors:{},
    genres:[],
    privat:false
}

const a=prompt("One of the last seen films?","for example Logan"),
b=prompt("Rating of this film?","for example 8"),
c=prompt("One of the last seen films?","for example Logan"),
d=prompt("Rating of this film?","for example 8");
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;


console.log(personalMovieDB)
