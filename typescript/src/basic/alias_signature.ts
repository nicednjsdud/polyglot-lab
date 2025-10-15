// 타입 별칭
let user : {
  id: number;
  name: string;
  isAdmin: boolean;
  brithday: string; 
} = {
  id: 1,
  name: "Alice",
  isAdmin: true,
  brithday: "2020-01-01"
}

let user2 : {
  id: number;
  name: string;
  isAdmin: boolean;
  brithday: string; 
} = {
  id: 1,
  name: "Alice",
  isAdmin: true,
  brithday: "2020-01-01"
}

// 위와 같이 동일한 타입을 여러번 사용해야 하는 경우 타입 별칭(type alias)을 사용

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
  brithday: string; 
}

let user3: User = {
  id: 3,
  name: "Charlie",
  isAdmin: false,
  brithday: "2020-01-01"
}

let user4: User = {
  id: 4,
  name: "Dave",
  isAdmin: true,
  brithday: "2020-01-01"
}

function func() {
  type User = {};   // 함수 내부에서만 사용 가능한 user 타입 별칭
}