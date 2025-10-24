/**
 * 조건부 타입
 */
let varA; // string
let varB; // number
function removeSpaces(text) {
    if (typeof text === "string") {
        return text.replace(/\s/g, "");
    }
    return undefined;
}
let result = removeSpaces("Hello World"); // "HelloWorld"
result?.toUpperCase();
let result2 = removeSpaces(undefined);
export {};
