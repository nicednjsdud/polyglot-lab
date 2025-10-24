/**
 * 제너릭 인터페이스 (Generic Interface)
 */
let kp1 = { key: 1, value: "one" };
let kp2 = { key: "isActive", value: true };
let numberMap = {
    "one": "1",
    "two": "2",
    "three": "3"
};
let booleanMap = {
    "isActive": true,
    "isAdmin": false
};
let stringMap2 = {
    "firstName": "John",
    "lastName": "Doe"
};
let numberMap2 = {
    "age": 30,
    "year": 2024
};
function goToSchool(user) {
    if (user.profile.type !== "student") {
        console.log("Not a student user.");
        return;
    }
    const schoolName = user.profile.school;
    console.log(`${user.name} goes to ${schoolName}.`);
}
const developerUser = {
    name: "Alice",
    profile: {
        type: "developer",
        language: "TypeScript"
    }
};
const studentUser = {
    name: "Bob",
    profile: {
        type: "student",
        school: "XYZ University"
    }
};
export {};
