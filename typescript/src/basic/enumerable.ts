// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입입



const user1 = {
  name: "kim",
  role : 0 // 0: 관리자
}

const user2 ={
  name: "park",
  role : 1 // 1: 일반 사용자
}

// role이 0, 1로 지정되어 있지만 어떤 역할인지 알기 어려움
// 이를 해결하기 위해 enum 타입을 사용
enum Role {
  USER,
  ADMIN // 1
}

// 숫자 뿐만 아니라 문자도 가능
enum RoleNumber {
  USER = 1,
  ADMIN
}

enum RoleString {
  USE = "USER",
  ADMIN = "ADMIN"
}


const user3 = {
  name: "lee",
  role : Role.ADMIN
}

const user4 = {
  name: "choi",
  role : Role.USER
}

console.log(user3.role === Role.ADMIN) // true
// console.log(user4.role === Role.ADMIN) // false
