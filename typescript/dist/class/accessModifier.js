/**
 * 접근 제어자 (Access Modifiers)
 * -> private, public, protected
 */
class Employee {
    name;
    age;
    position;
    // 필드
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    greet() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`);
    }
}
;
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position); // 부모 클래스의 생성자 호출
        this.officeNumber = officeNumber;
    }
    func() {
        // this.age; // private 접근 제어자이므로 자식 클래스에서 접근 불가
        this.position; // protected 접근 제어자이므로 자식 클래스에서 접근 가능
    }
}
const emp1 = new Employee("Jane Smith", 28, "Product Manager");
emp1.name = "New Name"; // public 접근 제어자이므로 외부에서 접근 가능
emp1.greet(); // Hello, my name is New Name and I am a Product Manager.
export {};
// emp1.age = 29; // private 접근 제어자이므로 외부에서 접근 불가
// emp1.position = "New Position"; // protected 접근 제어자이므로 외부에서 접근 불가
