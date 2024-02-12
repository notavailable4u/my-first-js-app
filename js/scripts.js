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

for (let i = 0; i < pokemonList.length; i++) {
    /*Checks to see if height of character is  equal to or greater than 5*/
    if (pokemonList[i].height >= 5) {
        /* writes standard message with special highlight comment*/
        document.write(`<p>${pokemonList[i].name} (Height: ${pokemonList[i].height} feet) - <span>Wow, that's big!</span></p>`)
    }else {
        /*writes standard message*/
        document.write(`<p>${pokemonList[i].name} (Height: ${pokemonList[i].height} feet)</p>`)
    }
}