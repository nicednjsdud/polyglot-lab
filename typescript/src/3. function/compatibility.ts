

/**
 * 함수 타입의 호환성 (Function Type Compatibility)
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값의 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a : A = () => 10; // ok
let b : B = () => 10; // ok

a = b; // ok
// b = a; // error : 'A' 형식은 'B' 형식에 할당할 수 없습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.


// 기준 2. 매개변수의 타입이 호환되는가

// 2-1. 매개변수의 개수가 같은 경우

type C = (value : number) => void;
type D = (value : 10) => void;

let c : C = (value) => {};
let d : D = (value) => {};

// c = d; // error : 'D' 형식은 'C' 형식에 할당할 수 없습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.
d = c; // ok

type Animal = {
    name : string;
};

type Dog = {
    name : string;
    breed : string;
};

let animalFunc = (animal : Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog : Dog) => {
  console.log(dog.name + ', ' + dog.breed);
};


// animalFunc = dogFunc; // error
dogFunc = animalFunc; // ok

// 2-2. 매개변수의 개수가 다른 경우

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1 : Func1 = (a, b) => {};
let func2 : Func2 = (a) => {};

func1 = func2; // ok
// func2 = func1; // error : 'Func1' 형식은 'Func2' 형식에 할당할 수 없습니다. 대상에 1개의 매개변수가 필요하지만, 소스에는 2개의 매개변수가 있습니다.