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

const AttackSkills =
[
  { skillName: 'Thunderbolt', attack: 19, magic: 34 },
  { skillName: 'Flamethrower', attack: 49, magic: 24 },
  { skillName: 'Water Gun', attack: 1, magic: 13 },
  { skillName: 'Solar Beam', attack: 33, magic: 22 },
  { skillName: 'Ice Beam', attack: 23, magic: 8 },
  { skillName: 'Earthquake', attack: 48, magic: 5 },
  { skillName: 'Psychic', attack: 45, magic: 10 },
  { skillName: 'Shadow Ball', attack: 33, magic: 2 },
  { skillName: 'Thunder Punch', attack: 15, magic: 43 },
  { skillName: 'Fire Blast', attack: 31, magic: 29 },
  { skillName: 'Hydro Pump', attack: 35, magic: 8 },
  { skillName: 'Giga Drain', attack: 3, magic: 29 },
  { skillName: 'Iron Tail', attack: 41, magic: 49 },
  { skillName: 'Dragon Claw', attack: 5, magic: 23 },
  { skillName: 'Hyper Beam', attack: 9, magic: 4 },
  { skillName: 'Aerial Ace', attack: 10, magic: 46 },
  { skillName: 'Focus Blast', attack: 28, magic: 35 },
  { skillName: 'Blizzard', attack: 37, magic: 8 },
  { skillName: 'Brick Break', attack: 10, magic: 4 },
  { skillName: 'Dig', attack: 0, magic: 2 },
  { skillName: 'Sludge Bomb', attack: 48, magic: 28 },
  { skillName: 'Leaf Blade', attack: 34, magic: 20 },
  { skillName: 'Rock Slide', attack: 10, magic: 5 },
  { skillName: 'Surf', attack: 48, magic: 6 },
  { skillName: 'Thunder', attack: 30, magic: 25 },
  { skillName: 'Earth Power', attack: 15, magic: 25 },
  { skillName: 'Dragon Pulse', attack: 30, magic: 45 },
  { skillName: 'Ice Punch', attack: 46, magic: 30 },
  { skillName: 'Poison Jab', attack: 43, magic: 0 },
  { skillName: 'Psychic Fangs', attack: 16, magic: 48 },
  { skillName: 'Scald', attack: 1, magic: 12 },
  { skillName: 'Energy Ball', attack: 22, magic: 19 },
  { skillName: 'Mystical Fire', attack: 1, magic: 32 },
  { skillName: 'Lava Plume', attack: 3, magic: 9 },
  { skillName: 'Dazzling Gleam', attack: 47, magic: 27 },
  { skillName: 'Dark Pulse', attack: 18, magic: 49 },
  { skillName: 'Drain Punch', attack: 24, magic: 48 },
  { skillName: 'Air Slash', attack: 46, magic: 49 },
  { skillName: 'Aqua Tail', attack: 14, magic: 14 },
  { skillName: 'Flame Wheel', attack: 15, magic: 33 },
  { skillName: 'Power Whip', attack: 47, magic: 14 },
  { skillName: 'Seed Bomb', attack: 33, magic: 42 },
  { skillName: 'Stone Edge', attack: 3, magic: 2 },
  { skillName: 'Toxic', attack: 39, magic: 33 },
  { skillName: 'Protect', attack: 7, magic: 45 },
  { skillName: 'Recover', attack: 25, magic: 42 },
  { skillName: 'Dragon Dance', attack: 30, magic: 47 },
  { skillName: 'Bulk Up', attack: 35, magic: 7 },
  { skillName: 'Swords Dance', attack: 24, magic: 46 },
  { skillName: 'Calm Mind', attack: 30, magic: 15 }
]

  //Class to create a player with 3 random Pokemons
  class Player {
    constructor(name) {
      this.name = name;
      this.pokemons = this.getRandomPokemons();
    }
  
    getRandomPokemons() {
      // Randomly select  unique indices
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
        console.log(`  ${index + 1}. ${pokemon.name}, Health: ${pokemon.health}, Magic: ${pokemon.magic}`);
        console.log(`     Skills:`);
        pokemon.skills.forEach(skill => {
          const attackSkill = AttackSkills.find(skillData => skillData.skillName === skill);
          if (attackSkill) {
            console.log(`       ${skill}, Attack: ${attackSkill.attack}, Magic: ${attackSkill.magic}`);
          } else {
            console.log(`       ${skill} - Skill data not found`);
          }
        });
      });
    }
  }
  
  // Example usage
  const player1 = new Player("Johann");
  player1.displayInfo();
  console.log('-------------------');   
  
  const player2 = new Player("Joshua");
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
