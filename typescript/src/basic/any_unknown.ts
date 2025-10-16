// any
// 특정 변수의 타입을 알 수 없을 때 사용
let anyVar : any = 10;
anyVar = "hello";
anyVar = true;
anyVar = { name: "Alice"};

anyVar.toUpperCase(); // 런타임 에러 발생 가능
anyVar.foo(); // 런타임 에러 발생 가능

let num : number = 10;
num = anyVar; // any 타입은 모든 타입에 할당 가능

// unknown
let unknownVar : unknown = 10;

unknownVar = "hello";
unknownVar = true;
unknownVar = { name: "Alice"};

// num = unknownVar; // Error: Type 'unknown' is not assignable to type 'number'

// 타입 정제 (타입 가드)
if (typeof unknownVar === "number") {
  num = unknownVar; // 타입 가드로 unknown 타입을 number 타입으로 좁힘
}