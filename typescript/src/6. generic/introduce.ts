
/**
 * 제너릭 (Generic) 은 타입을 일반화하여 재사용성을 높이는 기능입니다.
 */

function func(value : any){
  return value;
}

let num = func(1); // number
let string = func("string"); // string
let boolean = func(true); // boolean

if (typeof num === "number") {
  console.log(num + 1); // 2
}

// 제너릭 함수
function genericFunc<T>(value: T): T {
  return value;
}

let genNum = genericFunc(1); // number
let genString = genericFunc("string"); // string
let genBoolean = genericFunc(true); // boolean
let genArray = genericFunc([1, 2, 3]); // number[]
let genObject = genericFunc({ name: "John", age: 30 }); // { name: string; age: number; }