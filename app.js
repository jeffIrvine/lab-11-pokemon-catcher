import { rawPokemonData } from './data.js';

const images = document.querySelectorAll('label > img');
const radioButtons = document.querySelectorAll('input');
// const caughtResultsSpan = document.querySelector('.caught-result');




// let caughtResults = 0;
// let encounteredResults = 0;
// const caughtPokemon = [];
// const encounteredPokemon = [];
// const currentPokemon = []; 



function getRandPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}

// function pushPokemon() {
//     encounteredPokemon.push(pokeOne);
// }

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

    radioButtons[0].value = pokeOne.id;
    images[0].src = pokeOne.url_image;

    radioButtons[1].value = pokeTwo.id;
    images[1].src = pokeTwo.url_image;

    radioButtons[2].value = pokeThree.id;
    images[2].src = pokeThree.url_image;
}

renderPoke();
// find by id to loop through captured or caught id and iterate 