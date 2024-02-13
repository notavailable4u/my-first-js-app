const pokemonList = [
    {
        name: 'Bulbasaur',
        height: 2,
        types: ['grass', 'poison']
    },
    {
        name: 'Charmeleon',
        height: 3,
        types: ['fire']
    },
    {
        name: 'Ivysaur',
        height: 3,
        types: ['grass', 'poison']
    },
    {
        name: 'Blastoise',
        height: 5,
        types: ['water']
    }
];

function checkHeight(pokemon) {
    if (pokemon.height >= 5) {
        document.write(`<p>${pokemon.name} (Height: ${pokemon.height} feet) - <span>Wow, that's big!</span></p>`)
    } else {
        document.write(`<p>${pokemon.name} (Height: ${pokemon.height} feet)`)
    }
}

pokemonList.forEach(checkHeight);