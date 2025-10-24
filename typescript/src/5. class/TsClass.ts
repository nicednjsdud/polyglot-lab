
/**
 * 타입 스크립트의 클래스
 */

const employee = {
  name: "John Doe",
  age: 30,
  position: "Software Engineer",
  greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`);
  },
}

class Employee {
  // 필트
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서디
  greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`);
  }
}


// JS 보다 더 나은 상속 지원
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: string;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: string) {
    super(name, age, position); // 부모 클래스의 생성자 호출
    this.officeNumber = officeNumber;
  }
}

// 인스턴스 생성
const emp1 = new Employee("Jane Smith", 28, "Product Manager");
emp1.greet(); // Hello, my name is Jane Smith and I am a Product Manager.

const emp2 : Employee = {
  name: "Alice Johnson",
  age: 35,
  position: "Designer",
  greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`);
  },
};

