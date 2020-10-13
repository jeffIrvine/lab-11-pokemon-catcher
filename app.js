import { rawPokemonData } from './data.js';

const images = document.querySelectorAll('label > img');
const radios = document.querySelectorAll('label > input');
const caughtResults = document.querySelector('.caught-result');


// initialize state
let caughtResults = 0;
// set event listeners to update state and DOM

function getRandPokemon(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return someArray[index];
}