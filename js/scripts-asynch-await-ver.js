let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    // This function creates li & button with class and model attributes
    function addListItem(pokemon) {
        let unorderedList = document.querySelector('.list-group');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        let button = document.createElement('button');
        button.innerText = pokemon.name.toUpperCase();
        button.classList.add("btn", "btn-success", "btn-lg", "btn-block");
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#modalPokemon");
        listItem.appendChild(button);
        unorderedList.appendChild(listItem);
        button.addEventListener('click', () => { showDetails(pokemon) });
    };

    async function loadList() {
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        } catch (e) {
            console.error(e);
        }
    }

    async function loadDetails(item) {
        let url = item.detailsUrl;
        try {
            const response = await fetch(url);
            const details = await response.json();
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        } catch (e) {
            console.error(e);
        }
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    function showModal(pokemon) {
        let modalBody = document.querySelector(".modal-body");
        let modalTitle = document.querySelector(".modal-title");
        let modalHeader = document.querySelector(".modal-header");

        modalTitle.innerHTML = "";   // Clearing existing content
        modalBody.innerHTML = "";    // Clearing existing content

        let nameElement = document.createElement("h1");
        nameElement.textContent = pokemon.name.toUpperCase();


        let imageElement = document.createElement('img');
        imageElement.src = pokemon.imageUrl;
        imageElement.alt = `image of ${pokemon.name}`;

        let heightElement = document.createElement("p");
        heightElement.textContent = `Height: ${pokemon.height}`;

        modalTitle.appendChild(nameElement);
        modalBody.appendChild(imageElement);
        modalBody.appendChild(heightElement);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});