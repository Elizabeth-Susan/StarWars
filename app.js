function displayMovie(response) {
  let button5 = document.querySelector("#button");
  button5.addEventListener("click", sayHello)
}

function search(movie) {
  let apiUrl = 'https://swapi.dev/api/films/2';
  axios.get(apiUrl).then(displayMovie)
}

search("The Phantom Menace");




let button3 = document.querySelector("#button")

function sayHello() {
    axios.get('https://swapi.dev/api/films/1').then(function(response){
        console.log(response)
    })
}

button3.addEventListener("click", sayHello)

let button5 = document.querySelector("#button")

function sayHello() {
    axios.get('https://swapi.dev/api/films/2').then(function(response){
        console.log(response)
    })
}

button5.addEventListener("click", sayHello)