/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // OK
// num2 = num1; // Error: Type 'number' is not assignable to type '10'

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "Buddy",
  color: "brown",
};

let dog: Dog = {
  name: "Max",
  color: "black",
  breed: "Labrador",
};

animal = dog; // OK (dog에는 animal의 모든 속성이 있으므로)
// dog = animal; // Error: Property 'breed' is missing in type 'Animal' but required in type 'Dog'

// 객체 타입간의 호환성은 속성의 개수와 관계없이, 대상 타입이 필요한 모든 속성을 가지고 있으면 호환 가능


type Book = {
  name : string;
  price : number;
}

type ProgrammingBook = {
  name : string;
  price : number;
  skill : string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "Learn TypeScript",
  price: 30000,
  skill: "TypeScript",
};

book = programmingBook; // OK
// programmingBook = book; // Error: Property 'skill' is missing in type 'Book' but required in type 'ProgrammingBook'

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: "Learn JavaScript",
  price: 25000,
  // skill: "JavaScript" // Error: Object literal may only specify known properties, and 'skill' does not exist in type 'Book'
};

let book3: Book = programmingBook; // OK (변수에 할당할 때는 초과 프로퍼티 검사 없음)

