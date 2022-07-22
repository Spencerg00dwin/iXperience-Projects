
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

async function fetchPoke() {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",

    },
  });

  return response.json();
}

function fetchAllPokemon(){
fetchPoke().then(function(allPokemon){
    allPokemon.results.forEach(function(pokemon){
      fetchPokemonData(pokemon)
    })
}).catch((err) =>{
    console.log(err)
})
}

function fetchPokemonData(pokemon){
  let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
      let pokeName = document.createElement('h4')
      pokeName.innerText = pokeData.name
      document.body.append(pokeName)

   
    })
  }

  fetchAllPokemon();