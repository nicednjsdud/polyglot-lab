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
  switch(user.tag){
    case "admin":
      console.log(`${user.name}님은 관리자입니다. 강퇴 횟수: ${user.kickCount}`);
      break;
    case "member":
      console.log(`${user.name}님은 회원입니다. 포인트: ${user.point}`);
      break;
    case "guest":
      console.log(`${user.name}님은 게스트입니다. 방문 횟수: ${user.visitCount}`);
      break;
  }
}

/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 예제

// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지를 출력
// 성공 -> 성공 : 데이터를 출력

type LoadingTask = {
  state: "LOADING";
}
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
}

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
}

function processResult(task : AsyncTask){
  switch(task.state){
    case "LOADING":
      console.log("로딩중...");
      break;
    case "FAILED":
      console.log(`실패 : ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공 : ${task.response.data}`);
      break;
  }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const loading : AsyncTask = {
  state: "LOADING"
}

const failed : AsyncTask = {
  state: "FAILED",
  error: {
    message: "Network error"
  },
};

const success : AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~"
  }
};
