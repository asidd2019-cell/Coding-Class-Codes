const search = document.getElementById("search")
const searchBtn = document.getElementById("searchBtn")
const movieImg = document.getElementById("movieImage")
const movieTitle = document.getElementById("movieTitle")
const releaseDate = document.getElementById("releaseDate")

searchBtn.addEventListener('click',searchMovie)

search.addEventListener("keydown",async (event) =>{
    if (event.key === 'Enter') {
        await searchMovie()
    }
})

async function searchMovie(){
    let apiURL = `https://www.omdbapi.com/?apikey=c550fb3a&s=${search.value}&type=movie`
    let response = await fetch(apiURL)

    if (!response.ok){
        alert("API Failed")
    }

    let data = await response.json()
    if (data.Response == 'False'){
        alert("Movie not Found")
    }
    let title = data.Search[0].Title
    let release = data.Search[0].Year
    let img = data.Search[0].Poster

    movieTitle.innerHTML = `Title: ${title}`
    releaseDate.innerHTML = `Release Date: ${release}`
    movieImg.setAttribute("src",img)
}