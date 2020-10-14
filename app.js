import { rawPokemonData } from './data.js';

const images = document.querySelectorAll('label > img');
const radioButtons = document.querySelectorAll('input');
// const caughtResultsSpan = document.querySelector('.caught-result');

let numOfPlays = 0;
const pokemonResults = [];

const HAUL = 'HAUL';

function getRandPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}

renderPoke();

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', (e) => {
        //loop through the radios to get their value
        numOfPlays++;

        radioButtons.forEach((radio) => {
            let pokeItem = findById(pokemonResults, Number(radio.value));
            if (!pokeItem) {
                createNewItem(pokemonResults, Number(radio.value));
            } else {
                pokeItem.encountered++;
            }
        });
        // identify which to pick
        let capturedPokemon = findById(pokemonResults, Number(e.target.value));
        capturedPokemon.caught++;

        setInLocalStorage(HAUL, pokemonResults);

        if (numOfPlays >= 10) {
            window.location.href = './results/index.html';
        }
        renderPoke();

    });
}

function renderPoke() {


    let pokeOne = getRandPokemon(rawPokemonData);
    let pokeTwo = getRandPokemon(rawPokemonData);
    let pokeThree = getRandPokemon(rawPokemonData);

    while (pokeOne.id === pokeTwo.id || pokeTwo.id === pokeThree.id || pokeThree.id === pokeOne.id) {
        pokeOne = getRandPokemon(rawPokemonData);
        pokeTwo = getRandPokemon(rawPokemonData);
    }

    radioButtons[0].value = pokeOne.id;
    console.log(radioButtons[0]);
    images[0].src = pokeOne.url_image;
    // radioButtons[0].checked = true;

    radioButtons[1].value = pokeTwo.id;
    images[1].src = pokeTwo.url_image;
    // radioButtons[1].checked = false;

    radioButtons[2].value = pokeThree.id;
    images[2].src = pokeThree.url_image;
    // radioButtons[2].checked = false;

}

function createNewItem(pokemonResults, someId) {
    const pokemon = findById(rawPokemonData, someId);
    const element = {
        id: pokemon.id,
        pokemon: pokemon.pokemon,
        encountered: 1,
        caught: 0
    };
    pokemonResults.push(element);
}

function findById(someArray, someId,) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

function setInLocalStorage(key, value) {
    const stringyItems = JSON.stringify(value);

    localStorage.setItem(key, stringyItems);

    return value;
}

