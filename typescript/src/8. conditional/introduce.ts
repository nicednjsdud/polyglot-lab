
/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
}

type B = ObjB extends ObjA ? number : string; // number


/**
 * 제너릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>; // string
let varB : StringNumberSwitch<string>; // number


function removeSpaces<T>(text : T) : T extends string ? string : undefined 
function removeSpaces<T>(text : any) {
  if(typeof text === "string"){
    return text.replace(/\s/g, "");
  }
  return undefined;
}

let result = removeSpaces("Hello World"); // "HelloWorld"
result?.toUpperCase();
let result2 = removeSpaces(undefined);