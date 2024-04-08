// AttackSkill class
class AttackSkill {
    constructor(attack, damage, magic) {
        this.attack = attack;
        this.damage = damage;
        this.magic = magic;
    }
}

// Pokemon class
class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
        this.counter = 0;
    }

    learnAttackSkill(newSkill) {
        this.skills.push(newSkill);
    }

    showStatus() {
        console.log(`${this.name} - Health: ${this.health}, Magic: ${this.magic}`);
        // if (this.counter > 3) {
        //     console.log(`${this.name} has won the battle!`);
        // }
    }

    getMagics() {
        const magicIncrease = Math.floor(Math.random() * 21);
        this.magic += magicIncrease;
        console.log(`${this.name} gained ${magicIncrease} magic!`);
    }

    hasEnoughMagic(skillName) {
        const selectedSkill = this.skills.find(skill => skill.attack === skillName);
        if (!selectedSkill) {
            console.log(`${this.name} doesn't have the skill ${skillName}.`);
            return false;
        }
        return this.magic >= selectedSkill.magic;
    }

    isAlive() {
        return this.health > 0;
    }

    attack(skillName, opponent) {
        const selectedSkill = this.skills.find(skill => skill.attack === skillName);
        if (!selectedSkill) {
            console.log(`${this.name} doesn't have the skill ${skillName}.`);
            return;
        }

        if (!this.isAlive()) {
            console.log(`${this.name} cannot attack. It is already defeated !`);
            return;
        }

        if (!opponent.isAlive()) {
            console.log(`${opponent.name} is already defeated after ${this.counter} attacks !`);
            return;
        }

        if (!this.hasEnoughMagic(skillName)) {
            console.log(`${this.name} doesn't have enough magic to use ${skillName}.`);
            return;
        }

        console.log(`${this.name} attacks ${opponent.name} with ${selectedSkill.attack}!`);
        this.magic -= selectedSkill.magic;
        opponent.health -= selectedSkill.damage;
        this.counter++;

        console.log(`${opponent.name} receives ${selectedSkill.damage} damage!`);
        this.showStatus();
        opponent.showStatus();
        console.log('-------------------');
    }
}

// create new Pokemons
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// create new skills that Pokemons can learn
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);

// pikachu learning skills
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(bombing);

// bulbasaur learning skills
bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(bombing);

// Pokemons starts attacking each other
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachu);
pikachu.attack("lightning", bulbasaur);
pikachu.attack("poisonSeed", bulbasaur); // bulbasaur is already dead!
