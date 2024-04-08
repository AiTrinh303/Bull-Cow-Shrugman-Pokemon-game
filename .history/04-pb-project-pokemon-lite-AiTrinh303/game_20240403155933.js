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

  //Class to create a player with 3 random Pokemons
  class Player {
    constructor(name) {
      this.name = name;
      this.pokemons = this.getRandomPokemons();
    }
  
    getRandomPokemons() {
      // Randomly select 3 unique indices
      const randomIndices = [];
      while (randomIndices.length < 5) {
        const randomIndex = Math.floor(Math.random() * Pokemons.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }
  
      // Get the Pokemon objects at these indices
      const randomPokemons = randomIndices.map(index => Pokemons[index]);
      return randomPokemons;
    }
  
    displayInfo() {
      console.log(`Player: ${this.name}`);
      console.log("Pokemons:");
      this.pokemons.forEach((pokemon, index) => {
        console.log(`  ${index + 1}. ${pokemon.name}`);
      });
    }
  }
  
  // Example usage
  const player1 = new Player("Ai");
  player1.displayInfo();
  console.log('-------------------');   
  
  const player2 = new Player("Imre");
  player2.displayInfo();
  console.log('-------------------');


  //find the Pokemon with name
function findPokemonByName(name) {
    return Pokemons.find(pokemon => pokemon.name === name);
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

//function to battle between two Players- if the player has at least 2 wins (each of players can take the pokemon and make the battle with pokemon of opponent player), the player wins!

function battleBetweenPlayers(player1, player2) {
    const pokemons1 = player1.pokemons.sort(() => Math.random() - 0.5);
    const pokemons2 = player2.pokemons.sort(() => Math.random() - 0.5);
    let wins1 = 0;
    let wins2 = 0;

    for (let i = 0; i < 3; i++) {
        battle(pokemons1[i].name, pokemons2[i].name);
        if (attack(pokemons1[i].name, pokemons2[i].name)) {
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

//Test the function
console.log(`Battle between ${player1.name} and ${player2.name}:`)
console.log();
battleBetweenPlayers(player1, player2);
