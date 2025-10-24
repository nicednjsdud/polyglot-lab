

/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number;

const add: Operation = (x, y) => x + y;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐 (콜 시그니쳐)
 */

type Operation2 = {
    (a: number, b: number): number;
    name: string;
};

const add2: Operation2 = (x, y) => x + y;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;

add2( 1, 2 ); // 3
add2.name = "addition"; 