require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });
// Sintax ES6
class Animal {
    constructor(){
        this.race = "a";
    }
    getRace(){
        return this.race;
    }
    setRace(newRace){
        this.race = newRace;
    }
}
class Person extends Animal{
    constructor(){
        super();
        this.name = 'Luis';
    }
    getName(){
        return this.name;
    }
}

const p = new Person();
p.setRace('Human')
console.log(p.getName())
console.log(p.getRace())

// Sintax ES7
/*
class Cat extends Animal{
    name = 'Garfield';
    
    getName = () => this.name;
    
}
const gato = Cat();
gato.setRace('Felino');
console.log(gato.getName());
*/