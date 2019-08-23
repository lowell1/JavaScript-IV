/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
        this.isAlive = true;
    }
    destroy() {
        console.log(`${this.name} was removed from the game.`);
        this.isAlive = false;
    }
}
  
class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.healthPoints = 100;
    }
    takeDamage(damage) {
        this.healthPoints -= damage;
        console.log(`${this.name} took ${damage} damage. (${this.healthPoints} health remaining)`);
        if(this.healthPoints <= 0)
          this.destroy();
      }
}

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

/*
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
  mage.takeDamage(4); // Bruce took damage.
//   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
swordsman.destroy(); // Sir Mustachio was removed from the game.
*/

class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes)
    }
    shinKick(vill) {
        console.log(`${this.name} used shinkick!`);
        vill.takeDamage(Math.floor(Math.random() * 31));
    }
}

class Villain extends Humanoid {
    constructor(attributes) {
        super(attributes)
    }
    eyeJab(hero) {
        console.log(`${this.name} used eyejab!`);
        for(let i = 0; i < 3; i++)
         hero.takeDamage(Math.floor(Math.random() * 11));
      }
}

const sanic = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    },
    healthPoints: 50,
    name: "sanic",
    team: "team1",
    weapons: [],
    language: "boognish",
  });
  
  const eggDude = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    },
    healthPoints: 50,
    name: "eggDude",
    team: "team0",
    weapons: [],
    language: "portuguese",
  });

    while(sanic.isAlive && eggDude.isAlive) {
    if(sanic.isAlive && eggDude.isAlive) { //seems redundant
      sanic.shinKick(eggDude);
      
      if(eggDude.isAlive)
        eggDude.eyeJab(sanic);
      
      console.log("\n");
    }
  }
  
  if(sanic.isAlive)
    console.log("sanic wins!");
  else
    console.log("eggDude wins!");