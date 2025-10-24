/**
 * 기본 타입간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2; // OK
let animal = {
    name: "Buddy",
    color: "brown",
};
let dog = {
    name: "Max",
    color: "black",
    breed: "Labrador",
};
animal = dog; // OK (dog에는 animal의 모든 속성이 있으므로)
let book;
let programmingBook = {
    name: "Learn TypeScript",
    price: 30000,
    skill: "TypeScript",
};
book = programmingBook; // OK
// programmingBook = book; // Error: Property 'skill' is missing in type 'Book' but required in type 'ProgrammingBook'
/**
 * 초과 프로퍼티 검사
 */
let book2 = {
    name: "Learn JavaScript",
    price: 25000,
    // skill: "JavaScript" // Error: Object literal may only specify known properties, and 'skill' does not exist in type 'Book'
};
let book3 = programmingBook; // OK (변수에 할당할 때는 초과 프로퍼티 검사 없음)
export {};
