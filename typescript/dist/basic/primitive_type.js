// 변수 선언과 동시에 초기화 type annotation
// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = NaN;
let num6 = Infinity;
let num7 = -Infinity;
// num1 = "hello"; // Error: Type 'string' is not assignable to type 'number'
num1.toFixed(2); // OK
// string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`; // template string
let str4 = `hello ${num1}`; // template string
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let undef1 = undefined;
// 리터럴 타입
let numA = 10;
numA = 10; // OK
// numA = 20; // Error: Type '20' is not assignable to type '10'
let strA = "hello";
strA = "hello"; // OK
export {};
// strA = "world"; // Error: Type '"world"' is not assignable to type '"hello"'
