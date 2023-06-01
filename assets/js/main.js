const pokemonOl = document.getElementById('pokemonOl')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxTamanho = document.getElementById('MaxTamanho')

class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
}

const maxRecords = 151
const limit = 10;
let offset = 0;


function criaElementoHtmlPoke(poke){
   
    return `
        <li class="pokemonLi ${poke.type}">
            <span class="number">#${poke.number}</span>
            <span class="name">${poke.name}</span>
            <div class="detail">
                <ol id="lista" class="typer">

                ${poke.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    
                </ol>
        
                <img id="MaxTamanho" src="${poke.photo}"
                      alt="${poke.nome}">
                
            </div>
        </li>`
}

function carregaPokemons(offset,limit) {
    pokeapi.getPokemon(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(criaElementoHtmlPoke).join('')
        pokemonOl.innerHTML += newHtml
    })
}

carregaPokemons(offset. limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    const quantidadeRecarregaNextPage = offset + limit

    if(quantidadeRecarregaNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        carregaPokemons(offset,newLimit)

        loadMoreButton.parentElement.removeChild(loarMoreButton)
    }

    else{
        carregaPokemons(offset,limit)
    }
})





