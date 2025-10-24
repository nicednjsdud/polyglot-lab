/**
 * 타입 단언
 */
// 먼저 빈 객체를 생성한 후, 속성을 추가
// 타입 단언을 사용하여 빈 객체를 Person 타입으로 간주
let person = {};
person.name = "Alice";
person.age = 30;
// 나중에 속성을 추가할 것을 예상하여 Dog 타입으로 단언
let dog = {
    name: "Buddy",
    color: "brown",
    breed: "Labrador"
};
/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입인 경우에만 허용
 */
let num1 = 10; // 10은 never의 슈퍼 타입이므로 허용
let num2 = 10; // 10은 unknown의 서브 타입이므로 허용
// let num3 = 10 as string; // 에러: number와 string은 서로 관련이 없음
// let str1 = "hello" as number; // 에러: string과 number는 서로 관련이 없음
let num3 = 10; // 중간에 unknown을 거치면 가능
/**
 * const 단언
 */
let num4 = 10; // num4는 10 타입으로 단언됨 (리터럴 타입)
let cat = {
    name: "Kitty", // readonly 속성으로 변환
    color: "white" // readonly 속성으로 변환
};
let post = {
    title: "TypeScript 단언",
    author: "Bob"
};
// const len : number = post.author?.length; // author가 있을 수도 있고 없을 수도 있으므로 len은 number | undefined 타입
const len = post.author.length; // Non Null 단언을 사용하여 author가 절대 null 또는 undefined가 아님을 컴파일러에 알림
export {};
