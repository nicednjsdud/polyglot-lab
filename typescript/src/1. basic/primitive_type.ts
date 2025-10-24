
// 변수 선언과 동시에 초기화 type annotation

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = NaN;
let num6: number = Infinity;
let num7: number = -Infinity;

// num1 = "hello"; // Error: Type 'string' is not assignable to type 'number'

num1.toFixed(2); // OK

// string
let str1: string = "hello";
let str2: string = 'hello'; 
let str3: string = `hello`; // template string
let str4: string = `hello ${num1}`; // template string

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undef1: undefined = undefined;

// 리터럴 타입
let numA : 10 = 10;
numA = 10; // OK
// numA = 20; // Error: Type '20' is not assignable to type '10'

let strA : "hello" = "hello";
strA = "hello"; // OK
// strA = "world"; // Error: Type '"world"' is not assignable to type '"hello"'
