const Pokemons = 
[
  {
    name: 'Magikarp',
    skills: [ 'Seed Bomb' ],
    health: 171,
    magic: 15,
    types: [ 'Normal', 'Water' ]
  },
  {
    name: 'Pineco',
    skills: [ 'Ice Punch', 'Stone Edge' ],
    health: 173,
    magic: 142,
    types: [ 'Normal', 'Dark' ]
  },
  {
    name: 'Pichu',
    skills: [ 'Dig' ],
    health: 78,
    magic: 60,
    types: [ 'Steel', 'Ghost' ]
  },
  {
    name: 'Doduo',
    skills: [ 'Ice Beam', 'Scald' ],
    health: 181,
    magic: 31,
    types: [ 'Grass', 'Rock' ]
  },
  {
    name: 'Pupitar',
    skills: [ 'Hydro Pump' ],
    health: 106,
    magic: 142,
    types: [ 'Steel', 'Ice' ]
  },
  {
    name: 'Delibird',
    skills: [ 'Psychic', 'Energy Ball' ],
    health: 79,
    magic: 103,
    types: [ 'Normal' ]
  },
  {
    name: 'Caterpie',
    skills: [ 'Calm Mind' ],
    health: 154,
    magic: 17,
    types: [ 'Electric', 'Psychic', 'Fighting' ]
  },
  {
    name: 'Pikachu',
    skills: [ 'Calm Mind' ],
    health: 84,
    magic: 23,
    types: [ 'Ice' ]
  },
  {
    name: 'Jumpluff',
    skills: [ 'Surf', 'Mystical Fire' ],
    health: 191,
    magic: 62,
    types: [ 'Flying', 'Fairy' ]
  },
  {
    name: 'Onix',
    skills: [ 'Drain Punch', 'Dazzling Gleam' ],
    health: 199,
    magic: 91,
    types: [ 'Bug' ]
  },
  {
    name: 'Ponyta',
    skills: [ 'Focus Blast', 'Water Gun' ],
    health: 100,
    magic: 15,
    types: [ 'Fire', 'Steel', 'Rock' ]
  },
  {
    name: 'Dunsparce',
    skills: [ 'Calm Mind' ],
    health: 89,
    magic: 21,
    types: [ 'Grass', 'Fighting' ]
  },
  {
    name: 'Ariados',
    skills: [ 'Poison Jab', 'Ice Beam' ],
    health: 199,
    magic: 26,
    types: [ 'Water', 'Water' ]
  },
  {
    name: 'Scizor',
    skills: [ 'Calm Mind' ],
    health: 53,
    magic: 72,
    types: [ 'Bug', 'Psychic' ]
  },
  {
    name: 'Hypno',
    skills: [ 'Power Whip', 'Flamethrower' ],
    health: 77,
    magic: 87,
    types: [ 'Ground' ]
  },
  {
    name: 'Clefairy',
    skills: [ 'Lava Plume' ],
    health: 98,
    magic: 20,
    types: [ 'Dark', 'Psychic' ]
  },
  {
    name: 'Seadra',
    skills: [ 'Ice Beam', 'Air Slash' ],
    health: 193,
    magic: 86,
    types: [ 'Water' ]
  },
  {
    name: 'Zubat',
    skills: [ 'Dragon Dance' ],
    health: 149,
    magic: 9,
    types: [ 'Ice' ]
  },
  {
    name: 'Natu',
    skills: [ 'Iron Tail', 'Psychic' ],
    health: 148,
    magic: 93,
    types: [ 'Fire', 'Normal' ]
  },
  {
    name: 'Steelix',
    skills: [ 'Aerial Ace' ],
    health: 118,
    magic: 122,
    types: [ 'Ground', 'Fire', 'Dragon' ]
  },
  {
    name: 'Omastar',
    skills: [ 'Sludge Bomb' ],
    health: 176,
    magic: 78,
    types: [ 'Psychic' ]
  },
  {
    name: 'Larvitar',
    skills: [ 'Ice Punch' ],
    health: 142,
    magic: 109,
    types: [ 'Rock', 'Fire', 'Ground' ]
  },
  {
    name: 'Rapidash',
    skills: [ 'Recover' ],
    health: 99,
    magic: 48,
    types: [ 'Poison', 'Ghost' ]
  },
  {
    name: 'Slugma',
    skills: [ 'Toxic', 'Thunder Punch' ],
    health: 153,
    magic: 126,
    types: [ 'Flying', 'Normal' ]
  },
  {
    name: 'Bellossom',
    skills: [ 'Toxic' ],
    health: 131,
    magic: 27,
    types: [ 'Fire', 'Bug', 'Grass' ]
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
