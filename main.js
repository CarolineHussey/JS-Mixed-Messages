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

        let select = data.pokemon[Math.floor(randInd * data.pokemon.length)];
        let selectPokemon = select.pokemonId;
        let selectFastMove = select.quickMoves[Math.floor(Math.random() * select.quickMoves.length)];
        let selectChargeMove = select.cinematicMoves[Math.floor(Math.random() * select.cinematicMoves.length)];
        let baseAtt = select.stats.baseAttack;
        let baseStamina = select.stats.baseStamina;
        let baseDef = select.stats.baseDefense;
        let type = '';

        if (select.hasOwnProperty('type2')) {
            let rawFormat = select.type.split('_');
            let returnValue1 = rawFormat[rawFormat.length - 1];
            let rawFormat2 = select.type2.split('_');
            let returnValue2 = rawFormat2[rawFormat2.length - 1];
            type = `${returnValue1} and ${returnValue2}`;
        } else {
            let rawFormat = select.type.split('_');
            let returnValue = rawFormat[rawFormat.length - 1];
            type = returnValue;
        }

        console.log(`You choose ${selectPokemon}! ${selectPokemon} is of ${type} type and base stats are: Attack: ${baseAtt}, Defence: ${baseDef}, Stamina: ${baseStamina}. Your ${selectPokemon} has a fast move of ${selectFastMove} and charged move of ${selectChargeMove}. Good Luck!!`);
    })
    .catch(error => {
        console.error('Error:', error);
    });