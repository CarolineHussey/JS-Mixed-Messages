// JavaScript source code
const apiUrl = 'https://fight.pokebattler.com/pokemon';
let randInd = Math.random();
// Make a GET request
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        let selectPokemon = data.pokemon[Math.floor(randInd * data.pokemon.length)].pokemonId;
        let selectFastMove = data.pokemon[Math.floor(randInd * data.pokemon.length)].quickMoves[Math.floor(Math.random() * data.pokemon[Math.floor(randInd * data.pokemon.length)].quickMoves.length)];
        let selectChargeMove = data.pokemon[Math.floor(randInd * data.pokemon.length)].cinematicMoves[Math.floor(Math.random() * data.pokemon[Math.floor(randInd * data.pokemon.length)].cinematicMoves.length)];

        console.log(selectPokemon);
        console.log(selectFastMove);
        console.log(selectChargeMove);
        /*for (let i = 0; i < data.pokemon.length; i++) {
            console.log(Object.keys(data.pokemon[i].pokemonId));
            if (data.pokemon[i].hasOwnProperty('type2')) {
                console.log(`${data.pokemon[i].type} and ${data.pokemon[i].type2}`);
            } else {
                console.log(data.pokemon[i].type);
            }
            //console.log(Object.keys(data.pokemon[i]));
            console.log(data.pokemon[i].quickMoves[0]);
        //pick a random number to select a pokemonID at the given index
        //pick quick move
        //pick charge move
        
        }*/


    })
    .catch(error => {
        console.error('Error:', error);
    });