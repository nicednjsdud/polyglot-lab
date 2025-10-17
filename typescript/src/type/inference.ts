/**
 * 타입 추론
 */

let a = 10; // 타입 추론에 의해 num은 number 타입으로 추론됨
let b = "hello"; // 타입 추론에 의해 str은 string 타입으로 추론됨

// 타입 추론에 의해 obj는 { id: number; name: string; profile: { age: number; city: string; }; url: string; } 타입으로 추론됨
let c = {
  id : 1,
  name : "Alice",
  profile : {
    age : 30,
    city : "Seoul"
  },
  url : "https://example.com"
}

let {id, name, profile: {age, city}, url} = c; // 구조 분해 할당

let [one, two, three] = [1, 2, 3]; // 타입 추론에 의해 one, two, three는 각각 number 타입으로 추론됨


function func() {
  return "hello"; // 반환값의 타입은 string으로 추론됨
}

function func1(message = "message") {
  return message; // 반환값의 타입은 string으로 추론됨
}

// 아무 초기값이 없으면 any 타입으로 추론됨
let d;
d = 10;
d.toFixed();
d = "hello";
d.toLowerCase();
d = true;
