
/**
 * 맵드 타입
 */

interface User {
  id: number;
  name : string;
  age: number;
};

type PartialUser = {
    [K in keyof User]?: User[K];
};

type BooleanUser = {
    [K in keyof User]: boolean;
};

type ReadOnlyUser = {
    readonly [K in keyof User]: User[K];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser() : ReadOnlyUser {
  return {
    id: 1,
    name: "John Doe",
    age: 30
  };
};

const user = fetchUser();
// user.name = 'bob' // 오류 발생: 읽기 전용 속성입니다.

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser){
  // .. 수정 로직
};

updateUser({
  id: 1,
  name: "Jane Doe",
  age: 25
});