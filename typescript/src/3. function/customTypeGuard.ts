
/**
 * 사용자 정의 타입 가드 
 */

type Dog = {
  name : string;
  isBark : boolean;
};

type Cat = {
  name : string;
  isScratch : boolean;
};

type Animal = Dog | Cat;

function warning(animal : Animal){
  if(isDog(animal)){
    console.log(`멍멍! ${animal.name}가 짖습니다.`);
  } else if(isCat(animal)){
    console.log(`야옹! ${animal.name}가 할퀴었습니다.`);
  }else{
    console.log("알 수 없는 동물입니다.");
  }
};

// 사용자 정의 타입 가드 함수
// 매개변수 animal이 Dog 타입인지 판별하는 함수
function isDog(animal : Animal) : animal is Dog {
  return (animal as Dog).isBark !== undefined;
};

// 매개변수 animal이 Cat 타입인지 판별하는 함수
function isCat(animal : Animal) : animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}