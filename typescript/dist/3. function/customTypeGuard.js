/**
 * 사용자 정의 타입 가드
 */
function warning(animal) {
    if (isDog(animal)) {
        console.log(`멍멍! ${animal.name}가 짖습니다.`);
    }
    else if (isCat(animal)) {
        console.log(`야옹! ${animal.name}가 할퀴었습니다.`);
    }
    else {
        console.log("알 수 없는 동물입니다.");
    }
}
;
// 사용자 정의 타입 가드 함수
// 매개변수 animal이 Dog 타입인지 판별하는 함수
function isDog(animal) {
    return animal.isBark !== undefined;
}
;
// 매개변수 animal이 Cat 타입인지 판별하는 함수
function isCat(animal) {
    return animal.isScratch !== undefined;
}
export {};
