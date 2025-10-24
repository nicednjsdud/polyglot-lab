/**
 * 타입 좁히기 (Type Narrowing)
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 설명합니다.
 */
// value => number : fixed
// value => string : toLowerCase
// value => Date : getFullYear
// value => null : "value is null"
// value => Person : name은 age살 입니다.
function func(value) {
    value; // value는 number | string 타입
    // value.toUpperCase; // 에러: number 타입에는 toUpperCase 메서드가 없음
    // value.toFixed; // 에러: string 타입에는 toFixed 메서드가 없음
    if (typeof value == 'number') {
        return console.log(value.toFixed(2)); // number 타입으로 좁혀짐
    }
    else if (typeof value == 'string') {
        return console.log(value.toLowerCase()); // string 타입으로 좁혀짐
    }
    else if (value instanceof Date) {
        return console.log(value.getFullYear()); // Date 타입으로 좁혀짐
    }
    else if (value && "age" in value) {
        return console.log(`${value.name}은 ${value.age}살 입니다.`); // Person 타입으로 좁혀짐
    }
    else {
        return console.log("value is null");
    }
}
;
export {};
