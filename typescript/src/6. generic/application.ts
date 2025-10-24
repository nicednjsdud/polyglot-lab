
/**
 * 타입 변수 응용하기 (Generic Type Applications)
 */


// 스왑 함수 (Swap Function)
function swap(a : any, b : any){
  return [b, a];
}

const [a, b] = swap(1, 2); // a: any, b: any

// 제너릭 스왑 함수 (Generic Swap Function)
// 타입 변수를 여러 개 사용할 수도 있습니다.
function genericSwap<T, U>(a: T, b: U){
  return [b, a];
}

const [genA, genB] = genericSwap(1, 2); // genA: number, genB: number





// 첫 번째 값 반환 함수 (Return First Value Function)
function returnFirstValue(data: any){
  return data[0];
}

let num = returnFirstValue([1, 2, 3]); // 1
let str = returnFirstValue(["a", "b", "c"]); // "a"

// 제너릭 함수로 구현한 첫 번째 값 반환 함수
function genericReturnFirstValue<T>(data: [T, ...unknown[]]): T {
  return data[0];
}

let genNum = genericReturnFirstValue([1, 2, 3]); // 1
let genStr = genericReturnFirstValue(["a", "b", "c"]); // "a"
let genBool = genericReturnFirstValue([true, false, true]); // true
let genMix = genericReturnFirstValue([1, "a", true]); // 1



// interface를 활용한 제너릭 함수 (Generic Function with Interface)
interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

function genericFunctionWithInterface<T extends InterfaceB>(data: T): number {
  return data.length;
}

let length1 = genericFunctionWithInterface("Hello"); // 5
let length2 = genericFunctionWithInterface([1, 2, 3, 4]); // 4