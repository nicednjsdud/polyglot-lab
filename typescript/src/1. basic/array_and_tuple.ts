// 배열
let numArr : number[] = [1, 2, 3];

let strArr : string[] = ["a", "b", "c"];

let boolArr : boolean[] = [true, false, true];
let boolArr2 : Array<boolean> = [true, false, true]; // 제네릭 배열 타입

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr = [1, "a", true]; // 타입 추론에 의해 (string | number | boolean)[] 타입으로 추론됨
let multiArr2 : (string | number | boolean)[] = [1, "a", true]; // 명시적으로 타입 지정

// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
  [1, 2, 3],
  [4, 5, 6],
]; // 타입 추론에 의해 number[][] 타입으로 추론됨

let doubleArr2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]; // 명시적으로 타입 지정

// 튜플
// 길이와 타입이 고정된 배열
let tupleA: [string, number] = ["hello", 123];
// tupleA = [123, "hello"]; // Error: Type 'number' is not assignable to type 'string'

let tupleB: [string, number, boolean] = ["world", 456, true];
// tupleB = ["world", 456]; // Error: Source has 2 element(s) but target requires 3

tupleA.push("1"); // OK
tupleA.push(2); // OK
// tupleA.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
tupleA.pop(); // OK
tupleA.pop(); // OK
tupleA.pop(); // OK
// tupleA.pop(); // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.


const users: [string, number][] = [
  ["Alice", 30],
  ["Bob", 25],
  ["Charlie", 35],
  ["Dave", 40]
  // [50, "Eve"] // Error: Type 'number' is not assignable to type 'string'
]