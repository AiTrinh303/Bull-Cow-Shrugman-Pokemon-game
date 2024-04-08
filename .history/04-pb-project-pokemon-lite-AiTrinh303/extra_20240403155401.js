const Pokemons = 
[
  {
    name: 'Nidorino',
    skills: [ 'Solar Beam', 'Dazzling Gleam' ],
    health: 211,
    magic: 73,
    types: [ 'Fire', 'Water' ]
  },
  {
    name: 'Slowpoke',
    skills: [ 'Dark Pulse' ],
    health: 254,
    magic: 147,
    types: [ 'Grass', 'Bug', 'Bug' ]
  },
  {
    name: 'Eevee',
    skills: [ 'Dragon Claw', 'Air Slash' ],
    health: 137,
    magic: 127,
    types: [ 'Bug', 'Water' ]
  },
  {
    name: 'Dragonair',
    skills: [ 'Focus Blast' ],
    health: 140,
    magic: 81,
    types: [ 'Electric' ]
  },
  {
    name: 'Politoed',
    skills: [ 'Protect', 'Dragon Pulse' ],
    health: 142,
    magic: 109,
    types: [ 'Ice', 'Water' ]
  },
  {
    name: 'Xatu',
    skills: [ 'Air Slash' ],
    health: 162,
    magic: 70,
    types: [ 'Ground', 'Flying', 'Electric' ]
  },
  {
    name: 'Slaking',
    skills: [ 'Flamethrower', 'Stone Edge' ],
    health: 251,
    magic: 132,
    types: [ 'Grass', 'Water' ]
  },
  {
    name: 'Nidoran♀',
    skills: [ 'Stone Edge', 'Water Gun' ],
    health: 181,
    magic: 64,
    types: [ 'Fighting' ]
  },
  {
    name: 'Magneton',
    skills: [ 'Calm Mind' ],
    health: 139,
    magic: 150,
    types: [ 'Psychic' ]
  },
  {
    name: 'Hariyama',
    skills: [ 'Calm Mind', 'Psychic' ],
    health: 118,
    magic: 85,
    types: [ 'Fire', 'Rock', 'Water' ]
  },
  {
    name: 'Chikorita',
    skills: [ 'Thunder Punch', 'Protect' ],
    health: 154,
    magic: 56,
    types: [ 'Rock', 'Ground', 'Electric' ]
  },
  {
    name: 'Poliwrath',
    skills: [ 'Air Slash' ],
    health: 273,
    magic: 97,
    types: [ 'Rock', 'Dark' ]
  },
  {
    name: 'Lombre',
    skills: [ 'Drain Punch' ],
    health: 208,
    magic: 96,
    types: [ 'Ice', 'Ice' ]
  },
  {
    name: 'Bayleef',
    skills: [ 'Flame Wheel' ],
    health: 154,
    magic: 112,
    types: [ 'Dark', 'Fire', 'Rock' ]
  },
  {
    name: 'Charmander',
    skills: [ 'Giga Drain', 'Calm Mind' ],
    health: 244,
    magic: 90,
    types: [ 'Fairy', 'Dark' ]
  }
]

// Add key wins to each Pokemon and set it to 0 use map method
const newPokemons = Pokemons.map(pokemon => {pokemon.wins = 0; return pokemon;});
//console.log(newPokemons);


//========================================================================================================
//find the Pokemon with name
function findPokemonByName(name) {
    return newPokemons.find(pokemon => pokemon.name === name);
  }
  
//function to modify the battle between two Pokemons  
function attack(Pokemon1, Pokemon2) {
    Pokemon2.health -= Pokemon1.magic;      
    if (Pokemon2.health <= 0) {
      return true; // Pokemon2 is defeated
    }
      return false; // Pokemon2 still alive
  }

//Function to simulate the fight until one character is defeated  
    function battle(name1, name2) {
        const Pokemon1 = findPokemonByName(name1);
        const Pokemon2 = findPokemonByName(name2);
        
        //console.log(`${Pokemon1.name} vs ${Pokemon2.name}!`);
        while (Pokemon1.health > 0 && Pokemon2.health > 0) {
            if (attack(Pokemon1, Pokemon2)) {              
              return `${Pokemon1.name} has won the battle!`;           
              
            }
            if (attack(Pokemon2, Pokemon1)) {              
              return `${Pokemon2.name} has won the battle!`;
              
            }
        }
    }

//Test the function
//  console.log( battle('Mankey', 'Snubbull'));
//  console.log('-------------------');
//  console.log( battle('Poliwhirl', 'Tyranitar'));
//  console.log('-------------------');


//========================================================================================================
//Task: find the strongest Pokemon(s) with the most wins

// Function to count the number of wins for all Pokemon in the newPokemons array
function countAllWins() {
  for (let i = 0; i < newPokemons.length-1; i++) {
      const currentPokemon = newPokemons[i]; // Get the current Pokemon
      for (let j = i + 1; j < newPokemons.length; j++) {
          const opponentPokemon = newPokemons[j]; // Get the opponent Pokemon
          battle(currentPokemon.name, opponentPokemon.name); // Simulate a battle between currentPokemon and opponentPokemon
          if (attack(currentPokemon, opponentPokemon)) {
              currentPokemon.wins++; // Increment the number of wins for the current Pokemon
          } else {
              opponentPokemon.wins++; // Increment the number of wins for the opponent Pokemon
          }
      }
  }
}
countAllWins();

// find the strongest Pokemon(s) with the most wins
let maxWins = Math.max(...newPokemons.map(pokemon => pokemon.wins));
let strongest = newPokemons.filter(pokemon => pokemon.wins === maxWins);

console.log('-------------------');
console.log("Total number of wins for each Pokemon:");
newPokemons.forEach(pokemon => {console.log(`${pokemon.name}: ${pokemon.wins} wins`);});
console.log('-------------------');

console.log(`Strongest Pokemon(s) with ${maxWins} wins:`);
strongest.forEach(pokemon => {console.log(`${pokemon.name}`);});
