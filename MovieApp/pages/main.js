const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";

const API_URL_POPULAR ="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

const API_URL_SEARCH ="https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  console.log(respData)
  showMovies(respData);
}



function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  document.querySelector('.movies').innerHTML = ''

  data.films.forEach((el) => { 
    const movieEl = document.createElement("div"); 
    movieEl.classList.add('movie')
    movieEl.innerHTML = ` 
        <div class="movie__cover-inner"> 
        <img 
          src="${el.posterUrlPreview}" 
          class="movie__cover" 
          alt="" 
        />
         <div class="movie__cover--darkened"></div> 
        </div>
        
        <div class="movie__info"> 
            <div class="movie__title">${el.nameRu}</div> 
            <div class="movie__category">${el.genres.map((genre) =>` ${genre.genre}`)}</div>

            <div class="movie__average">${el.rating}</div>

        `;
        moviesEl.appendChild(movieEl)

  });
}

const form = document.querySelector('form')
const search = document.querySelector('.header__search')

form.addEventListener('submit',(e)=>{
    const apiSearch = `${API_URL_SEARCH}${search.value}`;
    e.preventDefault()

    if(search.value){
        getMovies(apiSearch)

        search.value = ""
    }
})



function mirror(arr1,arr2){
    arr2.reverse()

    arr1.push(arr2)

    const w = arr1.flat()
    w.splice(3,1)
    console.log(w)
}
console.log(mirror([0,2,4,6],[0,2,4,6]))




















// fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') 
//   .then(response => response.json())
//   .then(json => console.log(json))
  

