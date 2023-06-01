 //Objeto Literal
const pokeapi = {}


function convertOkeDetalhes(pokeDetalhe){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetalhe.id
    pokemon.name = pokeDetalhe.name

    const types = pokeDetalhe.types.map((typeSlot) => typeSlot.type.name)
    //declarando a variável type dentro de chaves faz com que eloe armazene o primeiro tipo Poke
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetalhe.sprites.other.dream_world.front_default

    return pokemon
}



//atravez a url recuperada nos detalhes essa função restorna um objeto json do objeto requisitado via http ex https://pokeapi.co/api/v2/pokemon/1 que estava dentro a primeira requisição http
pokeapi.detalhePoke = (pokemon) => {
    return fetch(pokemon.url)
            .then(resposta => resposta.json())
            .then(convertOkeDetalhes)
}

pokeapi.getPokemon = (offset = 0, limit = 10) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
            .then(resposta => resposta.json())
            .then(objJson => objJson.results)
            .then(pokemonsArray => pokemonsArray.map(pokeapi.detalhePoke))
            .then(detailRequest => Promise.all(detailRequest))
            .then(pokemonsDetalhes => pokemonsDetalhes) 
}

pokeapi.tiposToLi = (typer) => {
 return typer.map(tipoPercorridos => `<li class="tipo">${tipoPercorridos.type.name}</li>` )
}


                  




 




