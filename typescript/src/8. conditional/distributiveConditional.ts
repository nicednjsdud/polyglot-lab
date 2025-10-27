
/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>;

let b : StringNumberSwitch<string>;

let c : StringNumberSwitch<number | string>; // 분산적 조건부 타입 적용
// c는 string | number 타입이 됨

let d : StringNumberSwitch<boolean | number | string>; // 분산적 조건부 타입 적용

// 1단계
// StringNumberSwitch<boolean> | 
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// number |
// string

// 최종결과
// type d = number | string

/**
 * 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 최종결과
// type A = number | boolean;

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 최종결과
// type B = string;