// object
let user = {
    id: 1,
    name: "Alice",
};
// user.id; // Error: Property 'id' does not exist on type 'object'
// 객체 리터럴 타입 
// 객체의 구조를 타입으로 정의
// 구조적 타입 시스템 (structural type system) **
// Property Based TS
let user2 = {
    id: 2,
    name: "Bob",
    isAdmin: true,
};
let config = {
    apiKey: "My API Key"
};
export {};
// config.apiKey = "123" Error: Cannot assign to 'apiKey' because it is a read-only property
