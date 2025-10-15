// 배열
let numArr = [1, 2, 3];
let strArr = ["a", "b", "c"];
let boolArr = [true, false, true];
let boolArr2 = [true, false, true]; // 제네릭 배열 타입
// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr = [1, "a", true]; // 타입 추론에 의해 (string | number | boolean)[] 타입으로 추론됨
let multiArr2 = [1, "a", true]; // 명시적으로 타입 지정
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5, 6],
]; // 타입 추론에 의해 number[][] 타입으로 추론됨
let doubleArr2 = [
    [1, 2, 3],
    [4, 5, 6],
]; // 명시적으로 타입 지정
// 튜플
// 길이와 타입이 고정된 배열
let tupleA = ["hello", 123];
// tupleA = [123, "hello"]; // Error: Type 'number' is not assignable to type 'string'
let tupleB = ["world", 456, true];
// tupleB = ["world", 456]; // Error: Source has 2 element(s) but target requires 3
tupleA.push("1"); // OK
tupleA.push(2); // OK
// tupleA.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
tupleA.pop(); // OK
tupleA.pop(); // OK
tupleA.pop(); // OK
export {};
// tupleA.pop(); // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.
