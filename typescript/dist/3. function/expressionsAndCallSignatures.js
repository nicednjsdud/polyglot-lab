/**
 * 함수 타입 표현식
 */
const add = (x, y) => x + y;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const add2 = (x, y) => x + y;
const sub2 = (a, b) => a - b;
const mul2 = (a, b) => a * b;
const div2 = (a, b) => a / b;
add2(1, 2); // 3
add2.name = "addition";
export {};
