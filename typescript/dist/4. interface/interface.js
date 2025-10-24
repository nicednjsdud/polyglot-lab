/**
 * 인터페이스
 */
;
const person1 = {
    name: "Alice",
    sayHi: function () {
        console.log(`Hi, I'm ${this.name}`);
    }
};
person1.age = 30;
// person1.name = "Bob"; // error: 읽기 전용 속성이므로 변경할 수 없습니다.
person1.sayHi(); // Hi, I'm Alice
person1.sayHi(10, 20); // Hi, I'm Alice
export {};
