const prompt = require("prompt-sync")({ sigint: true });

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
    { skillName: 'Thunderbolt', damage: 21, magic: 44 },
    { skillName: 'Flamethrower', damage: 27, magic: 7 },
    { skillName: 'Water Gun', damage: 15, magic: 28 },
    { skillName: 'Solar Beam', damage: 27, magic: 13 },
    { skillName: 'Ice Beam', damage: 13, magic: 36 },
    { skillName: 'Earthquake', damage: 35, magic: 44 },
    { skillName: 'Psychic', damage: 20, magic: 38 },
    { skillName: 'Shadow Ball', damage: 19, magic: 23 },
    { skillName: 'Thunder Punch', damage: 44, magic: 30 },
    { skillName: 'Fire Blast', damage: 42, magic: 2 },
    { skillName: 'Hydro Pump', damage: 3, magic: 14 },
    { skillName: 'Giga Drain', damage: 18, magic: 41 },
    { skillName: 'Iron Tail', damage: 2, magic: 8 },
    { skillName: 'Dragon Claw', damage: 0, magic: 7 },
    { skillName: 'Hyper Beam', damage: 15, magic: 41 },
    { skillName: 'Aerial Ace', damage: 50, magic: 33 },
    { skillName: 'Focus Blast', damage: 26, magic: 31 },
    { skillName: 'Blizzard', damage: 45, magic: 47 },
    { skillName: 'Brick Break', damage: 1, magic: 44 },
    { skillName: 'Dig', damage: 25, magic: 32 },
    { skillName: 'Sludge Bomb', damage: 32, magic: 8 },
    { skillName: 'Leaf Blade', damage: 34, magic: 8 },
    { skillName: 'Rock Slide', damage: 48, magic: 34 },
    { skillName: 'Surf', damage: 34, magic: 44 },
    { skillName: 'Thunder', damage: 37, magic: 39 },
    { skillName: 'Earth Power', damage: 49, magic: 48 },
    { skillName: 'Dragon Pulse', damage: 50, magic: 3 },
    { skillName: 'Ice Punch', damage: 33, magic: 44 },
    { skillName: 'Poison Jab', damage: 0, magic: 17 },
    { skillName: 'Psychic Fangs', damage: 44, magic: 15 },
    { skillName: 'Scald', damage: 7, magic: 30 },
    { skillName: 'Energy Ball', damage: 8, magic: 18 },
    { skillName: 'Mystical Fire', damage: 33, magic: 12 },
    { skillName: 'Lava Plume', damage: 46, magic: 48 },
    { skillName: 'Dazzling Gleam', damage: 13, magic: 22 },
    { skillName: 'Dark Pulse', damage: 17, magic: 11 },
    { skillName: 'Drain Punch', damage: 40, magic: 8 },
    { skillName: 'Air Slash', damage: 39, magic: 24 },
    { skillName: 'Aqua Tail', damage: 23, magic: 31 },
    { skillName: 'Flame Wheel', damage: 36, magic: 18 },
    { skillName: 'Power Whip', damage: 24, magic: 26 },
    { skillName: 'Seed Bomb', damage: 28, magic: 50 },
    { skillName: 'Stone Edge', damage: 40, magic: 25 },
    { skillName: 'Toxic', damage: 44, magic: 26 },
    { skillName: 'Protect', damage: 2, magic: 25 },
    { skillName: 'Recover', damage: 34, magic: 11 },
    { skillName: 'Dragon Dance', damage: 20, magic: 3 },
    { skillName: 'Bulk Up', damage: 28, magic: 30 },
    { skillName: 'Swords Dance', damage: 18, magic: 17 },
    { skillName: 'Calm Mind', damage: 3, magic: 19 }
  ]


//pick 5 random pokemons for each player
function getRandomPokemons() {
    const randomPokemons = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * Pokemons.length);
      randomPokemons.push(Pokemons[randomIndex]);
    }
    return randomPokemons;
  }

//display the information of the pokemons  
function displayInfo(player) {
    console.log(`\n${player}'s Pokemons:`);
    const PokemonsPlayer = getRandomPokemons();
  
    PokemonsPlayer.forEach((pokemon, index) => {
      console.log(`  ${index + 1}. ${pokemon.name}, Health: ${pokemon.health}, Magic: ${pokemon.magic}`);
      console.log(`     Skills:`);
      pokemon.skills.forEach(skill => {
        const attackSkill = AttackSkills.find(skillData => skillData.skillName === skill);
        if (attackSkill) {
          console.log(`       ${skill}, Damage: ${attackSkill.damage}, Magic: ${attackSkill.magic}`);
        } else {
          console.log(`       ${skill} - Skill data not found`);
        }
      });
    });
  
    return PokemonsPlayer; // Return the chosen Pokemons
}
  
  let Player1 = prompt("Enter Player1's name: ");
  const Player1Pokemons = displayInfo(Player1);
  
  console.log('\n');
  
  let Player2 = prompt("Enter Player2's name:");
  const Player2Pokemons = displayInfo(Player2);
  
//each player picks a pokemon
function pickPokemon(player, PokemonsPlayer) {
    let selectedPokemon;
    while (!selectedPokemon) {
      const pokemonIndex = prompt(`${player}, choose your Pokemon (1-5): `);
      if (pokemonIndex >= 1 && pokemonIndex <= 5) {
        selectedPokemon = PokemonsPlayer[pokemonIndex - 1];
      } else {
        console.log('Invalid input. Please try again.');
      }
    }
    return selectedPokemon;
}

//each player picks a skill of selected pokemon
function pickMagicSkill(pokemon) {
  let selectedSkill;
  if (pokemon.skills.length === 1) {
      console.log(`\n pokemon has only one skill: ${pokemon.skills[0]}`);       
      selectedSkill = pokemon.skills[0];
    }
  
  else {  
    console.log(`\n pokemon has multiple skills `);
    pokemon.skills.forEach((skill, index) => {console.log(`${index + 1}. ${skill}`);});
    let skillIndex = prompt(`please pick (1 or 2): `);
    selectedSkill = pokemon.skills[skillIndex - 1];
    
  }
  return selectedSkill;
}

//function to attack between two pokemons
function attackPokemon(attacker, defender, attackSkill) {
  
  let findSkill = AttackSkills.find(skillData => skillData.skillName === attackSkill);

  console.log(`${attacker.name} attacks ${defender.name} with ${findSkill.skillName}!`);
  attacker.magic -= findSkill.magic;
  defender.health -= findSkill.damage;
  console.log(`${defender.name} has ${defender.health} health left`);

  if (defender.health <= 0) {
      //console.log(`${attacker.name} has won!`);
      return true;
  } else {
      return false;
  }
}

// Function to simulate a battle between two players
function battle(player1, player2) {
    let player1Wins = 0;
    let player2Wins = 0;
    console.log('-------Ready to Battle!-------\n')
    for (let round = 1; round <= 3; round++) {
      console.log(`\n---------------Round ${round}:-----------------`);
          
      let player1Pokemon = pickPokemon(player1, Player1Pokemons);
      let attackSkill1 = pickMagicSkill(player1Pokemon);
  
      console.log('\n');
  
      let player2Pokemon = pickPokemon(player2, Player2Pokemons);
      let attackSkill2 = pickMagicSkill(player2Pokemon);
  
      console.log('\n');
  
      console.log(`${player1Pokemon.name} use ${attackSkill1} skill vs ${player2Pokemon.name} use ${attackSkill2} skill!`);

      console.log("\n----- Battle Starts -----");
      while (player1Pokemon.health > 0 && player2Pokemon.health > 0) {
          if (attackPokemon(player1Pokemon, player2Pokemon, attackSkill1)) {
              player1Wins++;  
              console.log(`\n ${player1Pokemon.name} has won the battle!`);
              console.log(`\n ${player1} wins round ${round}!`);
              
              break;
          }
          else if (attackPokemon(player2Pokemon, player1Pokemon, attackSkill2)){
              player2Wins++;
              console.log(`\n ${player2Pokemon.name} has won the battle!`);
              console.log(`\n ${player2} wins round ${round}!`);
              break;
          }
      }

      console.log("----- Battle Ends -----");
      if (player1Wins === 2 || player2Wins === 2) {
          break;
      }
     }
    
    console.log('\n');
    console.log('-------Battle Results-------');

    if (player1Wins > player2Wins) {
      console.log(`${player1} wins the battle with ${player1Wins} rounds!`);
    } else if (player2Wins > player1Wins) {
      console.log(`${player2} wins the battle with ${player2Wins} rounds!`);
    } else {
      console.log('It\'s a drawn battle!');
    }
  } 
  
  battle(Player1, Player2);