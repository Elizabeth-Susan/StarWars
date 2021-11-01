let button = document.querySelector("#button")

function sayHello() {
    axios.get('https://swapi.dev/api/films/1').then(function(response){
        console.log(response)
    })
}

button.addEventListener("click", sayHello)