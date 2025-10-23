/**
 * 인터페이스와 클래스 (Interface and Class)
 */
class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.name} is moving at speed ${this.moveSpeed}.`);
    }
}
export {};
