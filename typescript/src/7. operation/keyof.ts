
/**
 * Keyof 연산자
 */

type Person = typeof person;

function getPropertyKey(person : Person, key : keyof Person) {
  return person[key];
}

const person = {
  name : "John",
  age : 30,
};

getPropertyKey(person, "name"); // "John"