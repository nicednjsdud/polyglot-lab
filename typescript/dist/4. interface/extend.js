/**
 * 인터페이스 확장
 */
;
;
;
;
const dog = {
    name: "Doggie",
    age: 3,
    breed: "Golden Retriever",
    bark: function () {
        console.log("Woof! Woof!");
    }
};
const chicken = {
    name: "Chickie",
    age: 1,
    isSmall: true,
    cluck: function () {
        console.log("Cluck! Cluck!");
    }
};
;
const dogCat = {
    name: "Doggie",
    age: 4,
    breed: "Beagle",
    color: "Brown",
    bark: function () {
        console.log("Woof! Woof!");
    },
    meow: function () {
        console.log("Meow! Meow!");
    }
};
export {};
