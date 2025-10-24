

/**
 * 인터페이스 확장
 */


interface Animal {
  name : string;
  age: number;
};

interface Dog extends Animal {
  breed : string;
  bark() : void;
};

interface Chicken extends Animal {
  isSmall : boolean;
  cluck() : void;
};

interface Cat extends Animal {
  color : string;
  meow() : void;
};

const dog : Dog = {
  name: "Doggie",
  age: 3,
  breed: "Golden Retriever",
  bark: function() {
    console.log("Woof! Woof!");
  }
};

const chicken : Chicken = {
  name: "Chickie",
  age: 1,
  isSmall: true,
  cluck: function() {
    console.log("Cluck! Cluck!");
  }
};

/**
 * 다중 인터페이스 확장
 */
interface DogCat extends Dog, Cat {};

const dogCat : DogCat = {
  name: "Doggie",
  age: 4,
  breed: "Beagle",
  color: "Brown",
  bark: function() {
    console.log("Woof! Woof!");
  },
  meow: function() {
    console.log("Meow! Meow!");
  }
};