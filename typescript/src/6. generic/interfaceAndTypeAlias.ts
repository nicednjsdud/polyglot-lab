
/**
 * 제너릭 인터페이스 (Generic Interface)
 */

interface keyPair<K, V>{
  key: K;
  value: V;
}

let kp1: keyPair<number, string> = { key: 1, value: "one" };
let kp2: keyPair<string, boolean> = { key: "isActive", value: true };

/**
 * 인덱스 시그니처
 */

interface Map<V> {
  [key: string]: V;
}

let numberMap: Map<String> = {
  "one": "1",
  "two": "2",
  "three": "3"
};

let booleanMap: Map<boolean> = {
  "isActive": true,
  "isAdmin": false
};

/**
 * 제너릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
}

let stringMap2: Map2<string> = {
  "firstName": "John",
  "lastName": "Doe"
};

let numberMap2: Map2<number> = {
  "age": 30,
  "year": 2024
};

/**
 * 제너릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 /  개발자 유저
 */

interface StudentUser {
  type : "student";
  school : string;
}

interface DeveloperUser {
  type : "developer";
  language : string;
}

interface User<T> {
  name : string;
  profile : T;
}

function goToSchool(user : User<StudentUser>){
  if(user.profile.type !== "student"){
    console.log("Not a student user.");
    return;
  }

  const schoolName = user.profile.school;
  console.log(`${user.name} goes to ${schoolName}.`);
}

const developerUser : User<DeveloperUser> = {
  name : "Alice",
  profile : {
    type : "developer",
    language : "TypeScript"
  }
};

const studentUser : User<StudentUser> = {
  name : "Bob",
  profile : {
    type : "student",
    school : "XYZ University"
  }
};