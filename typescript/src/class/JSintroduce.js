/**
 *  JS 클래스
 */

let studentA = {
  name: "Kim",
  grade: "A",
  age: 20,
  study(){
    console.log("공부하기");
  },
  intro(){
    console.log(`안녕하세요. 저는 ${this.name}이고, 나이는 ${this.age}살 입니다.`);
  }
}

class Student {
  // 필드
  name;
  grade;
  age;
  
  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("공부하기");
  }

  intro() {
    console.log(`안녕하세요. 저는 ${this.name}이고, 나이는 ${this.age}살 입니다.`);
  }
}

let studentB = new Student("Lee", "B", 25);
studentA.intro(); // 안녕하세요. 저는 Kim이고, 나이는 20살 입니다.
studentB.intro(); // 안녕하세요. 저는 Lee이고, 나이는 25살 입니다.


class StudentDeveloper extends Student {
  // 필드
  lang;

  // 생성자
  constructor(name, grade, age, lang) {
    super(name, grade, age);
    this.lang = lang;
  }

  // 메서드
  code() {
    console.log(`${this.lang}로 코딩하기`);
  }
}

let studentC = new StudentDeveloper("Park", "A", 22, "JavaScript");
studentC.intro(); // 안녕하세요. 저는 Park이고, 나이는 22살 입니다.