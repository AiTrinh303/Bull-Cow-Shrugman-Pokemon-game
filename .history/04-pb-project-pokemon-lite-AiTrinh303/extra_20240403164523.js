const Pokemons = 
[
  {
    name: 'Steelix',
    health: 287,
    magic: 111,
    skills: [ 'Energy Ball' ]
  },
  {
    name: 'Mewtwo',
    health: 255,
    magic: 86,
    skills: [ 'Leaf Blade', 'Bulk Up' ]
  },
  {
    name: 'Forretress',
    health: 143,
    magic: 83,
    skills: [ 'Aqua Tail', 'Earthquake' ]
  },
  {
    name: 'Taillow',
    health: 264,
    magic: 87,
    skills: [ 'Dragon Claw' ]
  },
  { name: 'Wingull', health: 181, magic: 145, skills: [ 'Recover' ] },
  {
    name: 'Cleffa',
    health: 268,
    magic: 78,
    skills: [ 'Brick Break', 'Hyper Beam' ]
  },
  {
    name: 'Tangela',
    health: 170,
    magic: 59,
    skills: [ 'Brick Break' ]
  },
  {
    name: 'Phanpy',
    health: 200,
    magic: 107,
    skills: [ 'Earthquake', 'Bulk Up' ]
  },
  {
    name: 'Slaking',
    health: 145,
    magic: 65,
    skills: [ 'Ice Beam', 'Brick Break' ]
  },
  {
    name: 'Kakuna',
    health: 131,
    magic: 98,
    skills: [ 'Leaf Blade', 'Energy Ball' ]
  },
  { name: 'Ekans', health: 108, magic: 141, skills: [ 'Leaf Blade' ] },
  {
    name: 'Marill',
    health: 278,
    magic: 86,
    skills: [ 'Earthquake', 'Energy Ball' ]
  },
  { name: 'Arbok', health: 296, magic: 112, skills: [ 'Brick Break' ] },
  {
    name: 'Politoed',
    health: 241,
    magic: 83,
    skills: [ 'Mystical Fire' ]
  },
  {
    name: 'Parasect',
    health: 208,
    magic: 81,
    skills: [ 'Thunder Punch' ]
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
  
//Modify the battle between two Pokemons  
function attack(Pokemon1, Pokemon2) {
    Pokemon2.health -= Pokemon1.magic;      
    if (Pokemon2.health <= 0) {
      return true; // Pokemon2 is defeated
    }
      return false; // Pokemon2 still alive
  }

//Simulate the fight until one character is defeated  
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
