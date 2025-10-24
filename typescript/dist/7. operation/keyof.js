/**
 * Keyof 연산자
 */
function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "John",
    age: 30,
};
getPropertyKey(person, "name"); // "John"
export {};
