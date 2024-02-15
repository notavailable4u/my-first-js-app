/**** IIFE ****/
/* let pokemonRepository = (function () {
    let pokemonList = [];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
 */ /*** END IIFE ****/

let pokemonList = [
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


function addListItem(pokemon) {
    let unorderedList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('ulButton');
    listItem.appendChild(button);
    unorderedList.appendChild(listItem);
    button.addEventListener('click', () => { ShowDetails(pokemon) });
};

function ShowDetails(pokemon) {
    console.log(pokemon)
};

pokemonList.forEach(addListItem);

