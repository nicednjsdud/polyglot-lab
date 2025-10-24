// void
// void -> 공허 -> 아무것도 없는 상태

// 문자열 반환
function func1() : string {
  return "hello";
}

// 아무것도 반환하지 않음
function func2() : void {
  return undefined;
}

// undefined 만 반환
function func3() : void {
  // return; // OK
  return undefined; // OK
  // return null; // Error: Type 'null' is not assignable to type 'void'
}

let a : void;
// a = 1; // Error: Type '1' is not assignable to type 'void'
// a = null; // OK (strictNullChecks 옵션이 꺼져있는 경우)
// a = "hello" // Error: Type 'string' is not assignable to type 'void'
a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입

function func4() : never {
  while(true) {} // 무한 루프
}

function func5() : never {
  throw new Error("Error!"); // 예외 발생
}

let b: never;
// b = 1; // Error: Type '1' is not assignable to type 'never'
// b = undefined; // Error: Type 'undefined' is not assignable to type 'never'
// b = null; // Error: Type 'null' is not assignable to type 'never'
// b = "hello"; // Error: Type 'string' is not assignable to type 'never'