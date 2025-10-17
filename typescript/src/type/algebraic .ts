/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 합집합 타입 (Union Type)
 * 
 */

let a : number | string | boolean | null;
a = 1;
a = "hello";
a = true;
a = null;

let arr : (number | string | boolean | null)[] = [1, "hello", true, null];

type Dog = {
  name : string;
  color : string;
};

type Person = {
  name : string;
  age : number;
}

type Union1 = Dog | Person;

let union1 : Union1 = {
  name: "Buddy",
  color: "brown",
  age : 5
};