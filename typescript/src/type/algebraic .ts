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
};

let union2 : Union1 = {
  name: "Alice",
  age : 30
};

let union3 : Union1 = {
  name: "Max",
  color: "black",
  age : 5
};

// let union4 : Union1 = {
//   name: "Charlie"
// }; // Error: Property 'color' is missing in type '{ name: string; }' but required in type 'Dog'.

/**
 * 교집합 타입 (Intersection Type)
 */

let variable : number & string; // 불가능

type Intersection = Dog & Person;

let intersection : Intersection = {
  name: "Charlie",
  color: "white",
  age: 4
};

// let intersection2 : Intersection = {
//   name: "Lucy",
//   color: "golden"
// }; // Error: Property 'age' is missing in type '{ name: string; color: string; }' but required in type 'Intersection'.