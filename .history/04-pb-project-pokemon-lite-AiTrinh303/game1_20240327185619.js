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
function attack(name1, name2) {
    const Pokemon1 = findPokemonByName(name1);
    const Pokemon2 = findPokemonByName(name2);
    if (!Pokemon1 || !Pokemon2) {
        console.log("Pokemon not found!");
        return;
      }
    Pokemon2.health -= Pokemon1.magic;
    console.log(`${Pokemon1.name} attacks ${Pokemon2.name} with ${Pokemon1.magic} magic!`);
    
    if (Pokemon2.health <= 0) {
      return true; // Pokemon2 is defeated
    }
       return false; // Pokemon2 still alive
  }

//Function to simulate the fight until one character is defeated  
    function battle(name1, name2) {
        const Pokemon1 = findPokemonByName(name1);
        const Pokemon2 = findPokemonByName(name2);
        if (!Pokemon1 || !Pokemon2) {
            console.log("Pokemon not found!");
            return;
          }

        console.log(`${Pokemon1.name} vs ${Pokemon2.name}!`);

        while (Pokemon1.health > 0 && Pokemon2.health > 0) {
            if (attack(name1, name2)) {
                console.log(`${Pokemon1.name} has won the battle!`);
                console.log('-------------------');
                break;
            }
            if (attack(name2, name1)) {
                console.log(`${Pokemon2.name} has won the battle!`);
                console.log('-------------------');
                break;
            }
        }
    }

//Test the function
 battle('Mankey', 'Snubbull');
// console.log('-------------------');
// battle('Poliwhirl', 'Tyranitar');

function strongestPokemon(array) {
  // take one pokemon and take battle with all other pokemons, not battle with itself, 2 pokemon battle only once, if the pokemon wins, increase the wins of the pokemon
    for (let i = 0; i < array.length-2; i++) {
        for (let j = i + 1; j < array.length-1; j++) {
            battle(array[i].name, array[j].name);
            if (array[i].health <= 0) {
                array[j].wins++;
                
            } else {
                array[i].wins++;
                }
    }
    // find the strongest Pokemon(s) with the most wins
    let maxWins = Math.max(...array.map(pokemon => pokemon.wins)); 
    let strongest = array.filter(pokemon => pokemon.wins === maxWins);
  
    console.log('-------------------');
    array.forEach(pokemon => {
        console.log(`${pokemon.name}: ${pokemon.wins} wins`);
    });
    console.log('-------------------');
  
    console.log(`Strongest Pokemon(s) with ${maxWins} wins:`);
    strongest.forEach(pokemon => {
        console.log(`${pokemon.name}`);
    });
  }
  }


// Add key level to each Pokemon in array Pokemons and set it to 1 use map method
const newPokemons1 = Pokemons.map(pokemon => {pokemon.level = 1; return pokemon;});


//Task: write the function levelUp for Pokemons, condition for leveling up:if pokemon win 10 times gets 1 level up,when Pokemon levelUp, its heath and magic increase by 20%. When the Pokemon reaches level 10, it can't level up anymore!!!
function levelUp(pokemon) {
  if (pokemon.level === 10) {
      console.log(`${pokemon.name} has reached the maximum level!`);
      return;
  }
  if (pokemon.wins >= 10) {
      pokemon.level++;
      pokemon.health += pokemon.health * 0.2;
      pokemon.magic += pokemon.magic * 0.2;
      pokemon.wins = 0;
      return pokemon.level;
  }
}
//Function to print the information of the Pokemon about level
function printInfo(pokemon) {
  console.log(`${pokemon.name} is at level ${pokemon.level} with ${pokemon.wins} wins.`);
 }

//Test the function printInfo for each Pokemon in array newPokemons1

newPokemons1.forEach(pokemon => {
  levelUp(pokemon);
  return printInfo(pokemon);
})




