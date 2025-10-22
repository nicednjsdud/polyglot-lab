/**
 * 서로소 유니온 타입 (Disjoint Union Types) 예제
 * 교집합이 없는 타입들로만 만든 유니온 타입을 정의합니다.
 */
// Admin -> {name}님 현재까지 강퇴 횟수는 {kickCount}회입니다.
// Member -> {name}님 현재까지 포인트는 {point}점입니다.
// Guest -> {name}님 현재까지 방문 횟수는 {visitCount}회입니다.
function login(user) {
    switch (user.tag) {
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
function processResult(task) {
    switch (task.state) {
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
const loading = {
    state: "LOADING"
};
const failed = {
    state: "FAILED",
    error: {
        message: "Network error"
    },
};
const success = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~"
    }
};
export {};
