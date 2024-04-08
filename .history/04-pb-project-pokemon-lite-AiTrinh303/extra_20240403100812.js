const Pokemons = 
[
  {
    name: 'Pineco',
    skills: [ 'Energy Ball' ],
    health: 120,
    magic: 38,
    types: [ 'Water', 'Poison', 'Bug' ]
  },
  {
    name: 'Staryu',
    skills: [ 'Air Slash' ],
    health: 83,
    magic: 141,
    types: [ 'Normal', 'Dragon' ]
  },
  {
    name: 'Squirtle',
    skills: [ 'Dark Pulse' ],
    health: 98,
    magic: 44,
    types: [ 'Grass', 'Grass' ]
  },
  {
    name: 'Togetic',
    skills: [ 'Lava Plume' ],
    health: 145,
    magic: 21,
    types: [ 'Ground', 'Psychic', 'Electric' ]
  },
  {
    name: 'Tentacool',
    skills: [ 'Stone Edge', 'Protect' ],
    health: 121,
    magic: 114,
    types: [ 'Grass', 'Ghost', 'Bug' ]
  },
  {
    name: 'Delibird',
    skills: [ 'Dragon Pulse', 'Flame Wheel' ],
    health: 138,
    magic: 7,
    types: [ 'Ground', 'Ice' ]
  },
  {
    name: 'Slowpoke',
    skills: [ 'Lava Plume', 'Lava Plume' ],
    health: 86,
    magic: 29,
    types: [ 'Ghost', 'Grass', 'Poison' ]
  },
  {
    name: 'Articuno',
    skills: [ 'Thunder Punch', 'Surf' ],
    health: 188,
    magic: 61,
    types: [ 'Fighting', 'Ghost', 'Bug' ]
  },
  {
    name: 'Bayleef',
    skills: [ 'Brick Break', 'Leaf Blade' ],
    health: 128,
    magic: 21,
    types: [ 'Dark', 'Dragon', 'Ghost' ]
  },
  {
    name: 'Nincada',
    skills: [ 'Bulk Up' ],
    health: 168,
    magic: 147,
    types: [ 'Dragon', 'Poison' ]
  },
  {
    name: 'Remoraid',
    skills: [ 'Leaf Blade', 'Stone Edge' ],
    health: 78,
    magic: 16,
    types: [ 'Ghost' ]
  },
  {
    name: 'Granbull',
    skills: [ 'Dig' ],
    health: 175,
    magic: 20,
    types: [ 'Steel', 'Fire', 'Psychic' ]
  },
  {
    name: 'Kingdra',
    skills: [ 'Flame Wheel', 'Thunderbolt' ],
    health: 119,
    magic: 50,
    types: [ 'Dragon', 'Psychic' ]
  },
  {
    name: 'Swinub',
    skills: [ 'Flamethrower' ],
    health: 192,
    magic: 21,
    types: [ 'Poison' ]
  },
  {
    name: 'Sunflora',
    skills: [ 'Drain Punch' ],
    health: 92,
    magic: 98,
    types: [ 'Ground', 'Ice', 'Fairy' ]
  },
  {
    name: 'Gloom',
    skills: [ 'Brick Break', 'Sludge Bomb' ],
    health: 138,
    magic: 68,
    types: [ 'Psychic', 'Fighting' ]
  },
  {
    name: 'Ditto',
    skills: [ 'Drain Punch' ],
    health: 71,
    magic: 41,
    types: [ 'Water' ]
  },
  {
    name: 'Houndoom',
    skills: [ 'Leaf Blade' ],
    health: 57,
    magic: 24,
    types: [ 'Water', 'Dragon', 'Fire' ]
  },
  {
    name: 'Aerodactyl',
    skills: [ 'Psychic' ],
    health: 117,
    magic: 0,
    types: [ 'Ghost', 'Dragon' ]
  },
  {
    name: 'Ledian',
    skills: [ 'Stone Edge', 'Dazzling Gleam' ],
    health: 81,
    magic: 107,
    types: [ 'Psychic' ]
  },
  {
    name: 'Pichu',
    skills: [ 'Psychic Fangs' ],
    health: 51,
    magic: 76,
    types: [ 'Dark', 'Ice' ]
  },
  {
    name: 'Slugma',
    skills: [ 'Sludge Bomb', 'Dragon Pulse' ],
    health: 111,
    magic: 142,
    types: [ 'Flying' ]
  },
  {
    name: 'Golem',
    skills: [ 'Protect', 'Power Whip' ],
    health: 192,
    magic: 89,
    types: [ 'Grass', 'Rock', 'Grass' ]
  },
  {
    name: 'Magneton',
    skills: [ 'Energy Ball' ],
    health: 127,
    magic: 36,
    types: [ 'Water', 'Electric' ]
  },
  {
    name: 'Mudkip',
    skills: [ 'Rock Slide', 'Iron Tail' ],
    health: 167,
    magic: 4,
    types: [ 'Bug', 'Water' ]
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
