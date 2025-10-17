/**
 *  UnKnown Type
 */

function unKnownExam() {
  let a : unknown = 30;
  let b : unknown = "hello";
  let c : unknown = true;
  let d : unknown = { name: "Alice"};
  let e : unknown = [1, 2, 3];
  let f : unknown = null;
  let g : unknown = undefined;

  let unknownVar : unknown;

  // let num : number = unknownVar  // Error: Type 'unknown' is not assignable to type 'number'
  // let str : string = unknownVar  // Error: Type 'unknown' is not assignable to type 'string'
  // let bool : boolean = unknownVar  // Error: Type 'unknown' is not assignable to type 'boolean'
}

/**
 *  Never Type (공집합)
 */

function neverExam() {

  // never 타입은 아무 값도 가질 수 없는 타입
  function neverFunc(): never {
    while(true) {}
  }

  let num : number = neverFunc(); // upCasting
  let str : string = neverFunc(); // upCasting
  let bool : boolean = neverFunc(); // upCasting

  // let never1 : never = 1; // Error: Type '1' is not assignable to type 'never'
  // let never2 : never = "hello"; // Error: Type 'string' is not assignable to type 'never'
  // let never3 : never = true; // Error: Type 'boolean' is not assignable to type 'never'
}

/**
 * Void Type (단일값)
 */

function voidExam() {
  function voidFunc(): void {
    console.log("void function");
  }

  let a : void = undefined; // void 타입은 undefined 만 할당 가능
  // a = 1; // Error: Type '1' is not assignable to type 'void'
  // a = "hello"; // Error: Type 'string' is not assignable to type 'void'
}

/**
 * Any Type (모든 값)
 */

function anyExam() {
  let a : any = 30;
  let b : any = "hello";
  let c : any = true;
  let d : any = { name: "Alice"};
  let e : any = [1, 2, 3];
  let f : any = null;
  let g : any = undefined;

  let anyVar : any;

  let num : number = anyVar; // any 타입은 모든 타입에 할당 가능
  let str : string = anyVar; // any 타입은 모든 타입에 할당 가능
  let bool : boolean = anyVar; // any 타입은 모든 타입에 할당 가능

  anyVar.toUpperCase(); // 런타임 에러 발생 가능
  anyVar.foo(); // 런타임 에러 발생 가능
}