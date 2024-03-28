const Pokemons = 
  [
    {
      name: 'Mankey',
      skills: [ 'Power Whip' ],
      health: 196,
      magic: 83,
      types: [ 'Electric', 'Steel', 'Flying' ]
    },
    {
      name: 'Snubbull',
      skills: [ 'Scald', 'Focus Blast' ],
      health: 152,
      magic: 54,
      types: [ 'Ghost' ]
    },
    {
      name: 'Poliwhirl',
      skills: [ 'Hydro Pump' ],
      health: 52,
      magic: 125,
      types: [ 'Dark' ]
     },
    {
      name: 'Tyranitar',
      skills: [ 'Ice Punch' ],
      health: 118,
      magic: 148,
      types: [ 'Dragon', 'Fighting' ]
    },
    {
      name: 'Linoone',
      skills: [ 'Earth Power' ],
      health: 157,
      magic: 5,
      types: [ 'Electric', 'Flying', 'Fire' ]
    },
    {
      name: 'Golem',
      skills: [ 'Hyper Beam' ],
      health: 167,
      magic: 142,
      types: [ 'Ice' ]
    },
    {
      name: 'Togepi',
      skills: [ 'Seed Bomb' ],
      health: 147,
      magic: 17,
      types: [ 'Ice', 'Dark' ]
    },
    {
      name: 'Onix',
      skills: [ 'Ice Punch' ],
      health: 149,
      magic: 100,
      types: [ 'Ice' ]
    },
    {
      name: 'Tentacruel',
      skills: [ 'Water Gun', 'Dragon Dance' ],
      health: 62,
      magic: 46,
      types: [ 'Ghost', 'Steel' ]
    },
    {
      name: 'Persian',
      skills: [ 'Leaf Blade', 'Thunder' ],
      health: 85,
      magic: 77,
      types: [ 'Bug', 'Ghost', 'Ghost' ]
    },
    {
      name: 'Butterfree',
      skills: [ 'Ice Beam', 'Fire Blast' ],
      health: 145,
      magic: 26,
      types: [ 'Fairy', 'Rock' ]
    },
    {
      name: 'Poochyena',
      skills: [ 'Energy Ball' ],
      health: 197,
      magic: 57,
      types: [ 'Dark' ]
    },
    {
      name: 'Seadra',
      skills: [ 'Leaf Blade' ],
      health: 169,
      magic: 1,
      types: [ 'Ice', 'Ghost' ]
    },
    {
      name: 'Suicune',
      skills: [ 'Poison Jab' ],
      health: 179,
      magic: 132,
      types: [ 'Bug', 'Flying' ]
    },
    {
      name: 'Lugia',
      skills: [ 'Giga Drain' ],
      health: 188,
      magic: 133,
      types: [ 'Ice' ]
    }
  ]

// Add key wins to each Pokemon and set it to 0 use map method
const newPokemons = Pokemons.map(pokemon => {pokemon.wins = 0; return pokemon;});
//console.log(newPokemons);


//========================================================================================================

//Task: find strongest Pokemon of

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
              console.log(`${Pokemon1.name} has won the battle!`);           
              break;
            }
            if (attack(Pokemon2, Pokemon1)) {              
              console.log(`${Pokemon2.name} has won the battle!`);
              break;
            }
        }
    }

//Test the function
 battle('Mankey', 'Snubbull');
 console.log('-------------------');
 battle('Poliwhirl', 'Tyranitar');
 console.log('-------------------');


//========================================================================================================
// Function to count the number of wins for all Pokemon in the newPokemons array
function countAllWins() {
  // Loop through each Pokemon in the newPokemons array
  for (let i = 0; i < newPokemons.length-1; i++) {
      const currentPokemon = newPokemons[i]; // Get the current Pokemon

      // Loop through each remaining Pokemon starting from the next one
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

// Call the countAllWins function to count the number of wins for all Pokemon
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
