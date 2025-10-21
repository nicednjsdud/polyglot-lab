/**
 * 서로소 유니온 타입 (Disjoint Union Types) 예제
 * 교집합이 없는 타입들로만 만든 유니온 타입을 정의합니다.
 */

type Admin = {
  tag: "admin";
  name : string;
  kickCount : number;
};

type Member = {
  tag: "member";
  name : string;
  point : number;
};

type Guest = {
  tag: "guest";
  name : string;
  visitCount : number;
};

// 서로소 유니온 타입 정의
type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 강퇴 횟수는 {kickCount}회입니다.
// Member -> {name}님 현재까지 포인트는 {point}점입니다.
// Guest -> {name}님 현재까지 방문 횟수는 {visitCount}회입니다.
function login(user : User){

  if(user.tag === "admin"){
    console.log(`${user.name}님은 관리자입니다. 강퇴 횟수: ${user.kickCount}`);
  }
  else if(user.tag === "member"){
    console.log(`${user.name}님은 회원입니다. 포인트: ${user.point}`);
  }
  else if(user.tag === "guest"){
    console.log(`${user.name}님은 게스트입니다. 방문 횟수: ${user.visitCount}`);
  }

}