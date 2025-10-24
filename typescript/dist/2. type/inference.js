/**
 * 타입 추론
 */
let a = 10; // 타입 추론에 의해 num은 number 타입으로 추론됨
let b = "hello"; // 타입 추론에 의해 str은 string 타입으로 추론됨
// 타입 추론에 의해 obj는 { id: number; name: string; profile: { age: number; city: string; }; url: string; } 타입으로 추론됨
let c = {
    id: 1,
    name: "Alice",
    profile: {
        age: 30,
        city: "Seoul"
    },
    url: "https://example.com"
};
let { id, name, profile: { age, city }, url } = c; // 구조 분해 할당
let [one, two, three] = [1, 2, 3]; // 타입 추론에 의해 one, two, three는 각각 number 타입으로 추론됨
function func() {
    return "hello"; // 반환값의 타입은 string으로 추론됨
}
function func1(message = "message") {
    return message; // 반환값의 타입은 string으로 추론됨
}
// 아무 초기값이 없으면 암묵적 any 타입으로 추론됨
let d;
d = 10;
d.toFixed(); // number 타입으로 추론됨
d = "hello";
d.toLowerCase(); // string 타입으로 추론됨
d = true;
d.valueOf(); // boolean 타입으로 추론됨
const num = 10; // num은 10 타입으로 추론됨 (리터럴 타입)
const str = "hello"; // str은 "hello" 타입으로 추론됨 (리터럴 타입)
const bool = true; // bool은 true 타입으로 추론됨 (리터럴 타입)
let arr = [1, "string"]; // arr은 (string | number)[] 타입으로 추론됨 (유니언 타입 배열)
export {};
