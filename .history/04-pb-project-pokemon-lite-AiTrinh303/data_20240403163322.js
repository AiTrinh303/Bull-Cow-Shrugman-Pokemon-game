// Array contains 300 Pokemon names (In real Pokemon world, there are 1025 Pokemon names)

const pokemonNames = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie",
    "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow",
    "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂",
    "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish",
    "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck",
    "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop",
    "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem",
    "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong",
    "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler",
    "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing",
    "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu",
    "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto",
    "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax",
    "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium",
    "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl",
    "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi",
    "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed",
    "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon",
    "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar",
    "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring",
    "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory",
    "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop",
    "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar",
    "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp",
    "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox",
    "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts",
    "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada",
    "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty]"]
  
console.log(pokemonNames.length); // 300

// Array contains 50 skills of Pokemon (In real Pokemon world, there are 728 skills)
const skillNames = [
    "Thunderbolt", "Flamethrower", "Water Gun", "Solar Beam", "Ice Beam",
    "Earthquake", "Psychic", "Shadow Ball", "Thunder Punch", "Fire Blast",
    "Hydro Pump", "Giga Drain", "Iron Tail", "Dragon Claw", "Hyper Beam",
    "Aerial Ace", "Focus Blast", "Blizzard", "Brick Break", "Dig",
    "Sludge Bomb", "Leaf Blade", "Rock Slide", "Surf", "Thunder",
    "Earth Power", "Dragon Pulse", "Ice Punch", "Poison Jab", "Psychic Fangs",
    "Scald", "Energy Ball", "Mystical Fire", "Lava Plume", "Dazzling Gleam",
    "Dark Pulse", "Drain Punch", "Air Slash", "Aqua Tail", "Flame Wheel",
    "Power Whip", "Seed Bomb", "Stone Edge", "Toxic", "Protect",
    "Recover", "Dragon Dance", "Bulk Up", "Swords Dance", "Calm Mind"
];

console.log(skillNames.length); // 50

// //Array contains 18 types of Pokemon
// const pokemonTypes = [
//     "Normal", "Fire", "Water", "Electric", "Grass",
//     "Ice", "Fighting", "Poison", "Ground", "Flying",
//     "Psychic", "Bug", "Rock", "Ghost", "Dragon",
//     "Dark", "Steel", "Fairy"];

// console.log(pokemonTypes.length); // 18


// Function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Function to create a random Pokemon
function createRandomPokemon() {
    const randomName = getRandomElement(pokemonNames);
    const numSkills = getRandomInt(1, 2); // Random skills from 1 to 2
    const randomSkills = Array.from({ length: numSkills }, () => getRandomElement(skillNames));  
    
    const randomHealth = getRandomInt(100, 300); // Random health from 100 to 300   
    const randomMagic = getRandomInt(50, 150); // Random magic from 50 to 150
        
    return {
        name: randomName,
        health: randomHealth,
        magic: randomMagic,
        skills: randomSkills
        };
}

// Use the function to create 15 random Pokemons and store them in an array
// Use loop to create 15 random Pokemons and store them in an array Pokemons

const Pokemons = [];

for (let i = 0; i < 15; i++) {

  Pokemons.push(createRandomPokemon());
}
console.log(Pokemons);

// const randomPokemons = Array.from({ length: 15 }, createRandomPokemon);
// console.log(randomPokemons);


const AttackSkill = [];
for (let i = 0; i < skillNames.length; i++) {
    const skill = {
        skillName: skillNames[i],
        attack: getRandomInt(0, 50),
        magic: getRandomInt(0, 50)
    };
    AttackSkill.push(skill);
}

console.log(AttackSkill);