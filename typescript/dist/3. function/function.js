/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반환하는지
function func(a, b) {
    return a + b;
}
/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a, b) => a + b;
/**
 * 함수의 매개변수
 */
function introduce(name = 'bob', tall) {
    console.log(`안녕하세요, ${name}입니다.`);
    if (typeof tall === 'number') {
        console.log(`키는 ${tall}cm입니다.`);
    }
}
introduce('alice', 170); // 이름과 키 모두 전달
introduce('bob'); // 이름만 전달 (키는 union type인 undefined가 됨)
function getSum(...rest) {
    return rest.reduce((acc, cur) => acc + cur, 0);
}
getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
export {};
