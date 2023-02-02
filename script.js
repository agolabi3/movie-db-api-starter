
function getPopularMovies(){
    console.log("in this function");

    let url = "https://api.themoviedb.org/3/movie/popular?api_key=205b6095693e5f89a3d10ed7779423bb&language=en-US&page=1";
    
    //url for popular movies
    let popularMovies = document.getElementById("popular");
    
    //url for images
    let imgUrl = "https://image.tmdb.org/t/p/w400";

    //create ajax
    let xhr = new XMLHttpRequest();

    //add event listeners
    xhr.addEventListener("readystatechange", function(){
        //is it complete?
        if(this.readyState === this.DONE){
            //return data to console
            console.log(this.response);
        }
    });//end add event

    xhr.responseType = "json";
    //open connection
    xhr.open("GET", url);
    //send the request
    xhr.send();

}//end getPopularMovies

function getBirthYearMovies(){

}

window.addEventListener("load", function(){
    console.log("in the onload");
    getPopularMovies();
    document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies());
});