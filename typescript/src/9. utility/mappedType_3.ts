
/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다.
 * -> T에서 U에 할당 가능한 타입들을 제외한 나머지 타입들로 이루어진 새로운 타입을 만들어주는 타입
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean , boolean>;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 최종결과
// string

/**
 * Extract<T, U>
 * -> 추출하다.
 * -> T에서 U에 할당 가능한 타입들로만 이루어진 새로운 타입을 만들어주는 타입
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean , boolean>;

// 1단계
// Extract<string, boolean> |
// Extract<boolean, boolean>

// 2단계
// never |
// boolean

// 최종결과
// boolean


/**
 * ReturnType<T>
 * -> 함수 타입 T의 반환 타입을 추출하여 반환하는 타입
 */

type ReturnType<T extends (...args : any) => any> = T extends (...args : any) => infer R ? R : any;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;



