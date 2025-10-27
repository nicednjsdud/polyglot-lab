/**
 * 분산적인 조건부 타입
 */
let a;
let b;
let c; // 분산적 조건부 타입 적용
// c는 string | number 타입이 됨
let d; // 분산적 조건부 타입 적용
export {};
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
