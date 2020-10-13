import { rawPokemonData } from './data.js';

const images = document.querySelectorAll('label > img');
const radioButtons = document.querySelectorAll('input');
// const caughtResultsSpan = document.querySelector('.caught-result');




let caughtResults = 0;
let encounteredResults = 0;
const caughtPokemon = [];
const encounteredPokemon = [];




// function pushPokemon() {
    //     encounteredPokemon.push(pokeOne);
    // }
// for (let i = 0; i < someArray.length; i++) {
    //     radio
  
function findByName(somePokemon) {
    for (let i = 0; i < encounteredPokemon.length; i++) {
        if (encounteredPokemon[i].pokemon === somePokemon.pokemon) {
            encounteredPokemon[i].encountered++;
            return;
        }
    }
    encounteredPokemon.push({ pokemon: somePokemon.pokemon, encountered: 1, captured: 0 });
}

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

    console.log(encounteredPokemon);
    radioButtons[0].value = pokeOne.id;
    images[0].src = pokeOne.url_image;

    radioButtons[1].value = pokeTwo.id;
    images[1].src = pokeTwo.url_image;

    radioButtons[2].value = pokeThree.id;
    images[2].src = pokeThree.url_image;
}
//     // so now we want to create an add event listnr on the button and once we click on the image then we want to incriment captured when we click on it . 
//     for (let i = 0; i < radioButtons.length; i++) {
//         radioButtons[i].addEventListener('change', (e) => {
//             console.log(e.target.value);
//             caughtPokemon.
//         );
//     }
// }

renderPoke();
// "rolls loop 10 times "
