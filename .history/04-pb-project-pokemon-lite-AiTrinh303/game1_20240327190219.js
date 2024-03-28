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
      
    if (Pokemon2.health <= 0) {
      return true; // Pokemon2 is defeated
    }
       return false; // Pokemon2 still alive
  }

//Function to simulate the fight until one character is defeated  
    function battle(name1, name2) {
        const Pokemon1 = findPokemonByName(name1);
        const Pokemon2 = findPokemonByName(name2);
        
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
 console.log('-------------------');
 battle('Poliwhirl', 'Tyranitar');
 console.log('-------------------');