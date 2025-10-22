/**
 * 함수 타입의 호환성 (Function Type Compatibility)
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */
let a = () => 10; // ok
let b = () => 10; // ok
a = b; // ok
let c = (value) => { };
let d = (value) => { };
// c = d; // error : 'D' 형식은 'C' 형식에 할당할 수 없습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.
d = c; // ok
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name + ', ' + dog.breed);
};
// animalFunc = dogFunc; // error
dogFunc = animalFunc; // ok
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2; // ok
export {};
// func2 = func1; // error : 'Func1' 형식은 'Func2' 형식에 할당할 수 없습니다. 대상에 1개의 매개변수가 필요하지만, 소스에는 2개의 매개변수가 있습니다.
