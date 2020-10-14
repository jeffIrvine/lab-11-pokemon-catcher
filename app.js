import { rawPokemonData } from './data.js';

const images = document.querySelectorAll('label > img');
const radioButtons = document.querySelectorAll('input');
// const caughtResultsSpan = document.querySelector('.caught-result');


const pokemonResults = [];

// function pushPokemon() {
    //     encounteredPokemon.push(pokeOne);
    // }
// for (let i = 0; i < someArray.length; i++) {
    //     radio
    

    

// }

function getRandPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}

function renderPoke() {

    let pokeOne = getRandPokemon(rawPokemonData);
    let pokeTwo = getRandPokemon(rawPokemonData);
    let pokeThree = getRandPokemon(rawPokemonData);

    while (pokeOne.id === pokeTwo.id) {
        pokeOne = getRandPokemon(rawPokemonData);
    }
    while (pokeTwo.id === pokeThree.id) {
        pokeTwo = getRandPokemon(rawPokemonData);
    }
    while (pokeThree.id === pokeOne.id) {
        pokeThree = getRandPokemon(rawPokemonData);
    }

    findByName(pokeOne);
    findByName(pokeTwo);
    findByName(pokeThree);

    radioButtons[0].value = pokeOne.id;
    images[0].src = pokeOne.url_image;

    radioButtons[1].value = pokeTwo.id;
    images[1].src = pokeTwo.url_image;

    radioButtons[2].value = pokeThree.id;
    images[2].src = pokeThree.url_image;


}

function createNewItem(someId) {
    const pokemon = findById(rawPokemonData, someId);
    const element = {
        id: pokemon.id,
        pokemon: pokemon.pokemon,
        encountered: 0,
        caught: 0
    };
    pokemonResults.push(element);
}

function createNewEncounter(rawPokemonData, someId) {
        if (pokemonResults[i].id === someId) {
            pokemonResults[i].encountered++;
    }
}


for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', (e) => {
        

    });
}


function findById(someArray, someId,) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}

renderPoke();

//     function encounteredPokemon() {
