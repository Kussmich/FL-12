'use strict'

class Fighter {
    constructor(obj) {
        this.healthCounter = obj.health;
        this.winCounter = 0;
        this.lossesCounter = 0;
        this.name = obj.name;
        this.damage = obj.damage;
        this.strength = obj.strength;
        this.agility = obj.agility;
        this.health = obj.health;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.health;
    }

    attack(defender) {
        const numberHundred = 100;
        let random = Math.random();
        let a = numberHundred * random;
        let b = defender.getStrength() + defender.getAgility();
        if(a < b) {
            console.log(`${this.name} attack missed`)
        } else {
            defender.health -= this.damage;
            console.log(`${this.name} makes ${this.damage} damage to ${defender.getName()}`)
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this.name}, Wins: ${this.winCounter}, Losses: ${this.lossesCounter}`)
    }

    heal(recoveryDegree) {
        const healthAdd = this.health + recoveryDegree;
        if (healthAdd > this.healthCounter) {
            this.health = this.healthCounter;
        } else {
            this.health = healthAdd;
        }
    }

    dealDamage(amount) {
        this.health - amount > 0 ? this.health -= amount : this.health = 0;
    }

    addWin() {
        this.winCounter++;
    }

    addLoss() {
        this.lossesCounter++;
    }

    
}

function battle(fighter1, fighter2) {
    const fighterDead = death(fighter1, fighter2);
    if (fighterDead) {
        console.log(`${fighterDead.getName()} is dead and can't fight`);
        return;
    }
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }
    if (fighter1.getHealth() > fighter2.getHealth()) {
        fighter1.addWin();
        fighter2.addLoss();
        console.log(`${fighter1.getName()} has won!`);    
    } else {
        fighter2.addWin();
        fighter1.addLoss();
        console.log(`${fighter2.getName()} has won!`);
    }
} 


function death(fighter1, fighter2) {
if (fighter1.getHealth() <= 0) {
    let fighterDead = fighter1;
    return fighterDead;
} else if (fighter2.getHealth() <= 0) {
    let fighterDead = fighter2;
    return fighterDead;
}
}


const fighter1 = new Fighter({ name: 'Maximus', damage: 20, strength: 20, agility: 15, health: 100 });
const fighter2 = new Fighter({ name: 'Commodus', damage: 25, strength: 25, agility: 20, health: 90 });

console.log(fighter1.getName());
console.log(fighter1.getDamage());
console.log(fighter1.getStrength());
console.log(fighter1.getAgility());
console.log(fighter1.getHealth());
battle(fighter1, fighter2);