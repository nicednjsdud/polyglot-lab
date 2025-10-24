
/**
 * 인터페이스와 클래스 (Interface and Class)
 */

interface CharacterInterface {
  name : string;
  moveSpeed : number;
  move() : void;
}

class Character implements CharacterInterface {
  
  constructor(public name: string, public moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move() : void {
    console.log(`${this.name} is moving at speed ${this.moveSpeed}.`);
  }
}