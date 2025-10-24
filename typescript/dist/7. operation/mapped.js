/**
 * 맵드 타입
 */
;
// 한명의 유저 정보를 불러오는 기능
function fetchUser() {
    return {
        id: 1,
        name: "John Doe",
        age: 30
    };
}
;
const user = fetchUser();
// user.name = 'bob' // 오류 발생: 읽기 전용 속성입니다.
// 한명의 유저 정보를 수정하는 기능
function updateUser(user) {
    // .. 수정 로직
}
;
updateUser({
    id: 1,
    name: "Jane Doe",
    age: 25
});
export {};
