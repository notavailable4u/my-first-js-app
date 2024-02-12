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
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(`<p>${pokemonList[i].name} (Height: ${pokemonList[i].height} feet)</p>`)
}