// Importing prompt-sync

const prompt = require("prompt-sync")({ sigint: true });


// Pokémon Data
const Pokemons = [
    {
        name: 'Mankey',
        skills: ['Power Whip'],
        health: 196,
        magic: 83,
        types: ['Electric', 'Steel', 'Flying']
    },
    // Rest of the Pokémon data...

// Class to create a player with 3 chosen Pokemons
class Player {
    constructor(name, chosenPokemons) {
        this.name = name;
        this.pokemons = this.getChosenPokemons(chosenPokemons);
    }

    getChosenPokemons(chosenPokemons) {
        const selectedPokemons = chosenPokemons.map(name => findPokemonByName(name));
        return selectedPokemons;
    }

    displayInfo() {
        console.log(`Player: ${this.name}`);
        console.log("Pokemons:");
        this.pokemons.forEach((pokemon, index) => {
            console.log(`  ${index + 1}. ${pokemon.name}`);
        });
    }
}

// Function to find the Pokemon with name
function findPokemonByName(name) {
    return Pokemons.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
}

// Function to modify the battle between two Pokemons
function attack(attacker, defender) {
    if (!attacker || !defender) {
        console.log("Pokemon not found!");
        return;
    }

    defender.health -= attacker.magic;

    if (defender.health <= 0) {
        return true; // Defender is defeated
    }
    return false; // Defender still alive
}

// Function to simulate the fight until one character is defeated
function battle(attacker, defender) {
    console.log(`${attacker.name} vs ${defender.name}!`);

    while (attacker.health > 0 && defender.health > 0) {
        if (attack(attacker, defender)) {
            console.log(`${attacker.name} has won the battle!`);
            console.log('-------------------');
            break;
        }
        if (attack(defender, attacker)) {
            console.log(`${defender.name} has won the battle!`);
            console.log('-------------------');
            break;
        }
    }
}

// Function to battle between two Players - if the player has at least 2 wins, the player wins!
function battleBetweenPlayers(player1, player2) {
    let wins1 = 0;
    let wins2 = 0;

    for (let i = 0; i < 3; i++) {
        battle(player1.pokemons[i], player2.pokemons[i]);
        if (attack(player1.pokemons[i], player2.pokemons[i])) {
            wins1++;
        } else {
            wins2++;
        }
    }

    if (wins1 > wins2) {
        console.log(`${player1.name} wins the battle!`);
    } else if (wins2 > wins1) {
        console.log(`${player2.name} wins the battle!`);
    } else {
        console.log(`It's a draw between ${player1.name} and ${player2.name}!`);
    }
}

// Function to create a player with chosen Pokemons
function createPlayerWithChosenPokemons(playerName) {
    const chosenPokemons = [];
    console.log(`Choose 3 Pokemons for ${playerName}:`);
    for (let i = 0; i < 3; i++) {
        const pokemonName = prompt(`Enter Pokemon ${i + 1}: `);
        chosenPokemons.push(pokemonName);
    }
    return new Player(playerName, chosenPokemons);
}

// Create two players with chosen Pokemons
const player1Name = prompt("Enter Player 1 name: ");
const player1 = createPlayerWithChosenPokemons(player1Name);

const player2Name = prompt("Enter Player 2 name: ");
const player2 = createPlayerWithChosenPokemons(player2Name);

// Display their Pokemons
console.log("Player 1:");
player1.displayInfo();
console.log('-------------------');
console.log("Player 2:");
player2.displayInfo();
console.log('-------------------');

// Battle between the players' Pokemons
console.log(`Battle between ${player1.name} and ${player2.name}:`);
battleBetweenPlayers(player1, player2);
