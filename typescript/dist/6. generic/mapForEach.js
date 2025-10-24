/**
 * map 메서드
 */
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item * 2); // [2, 4, 6, 8, 10]
function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
;
map(arr, (it) => it * 2); // [2, 4, 6, 8, 10]
map(["a", "b", "c"], (it) => it.toUpperCase()); // ["A", "B", "C"]
/**
 * forEach 메서드
 */
const arr2 = [1, 2, 3, 4, 5];
arr2.forEach((item) => console.log(item)); // 1 2 3 4 5
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(arr2, (it) => console.log(it)); // 1 2 3 4 5
forEach(["a", "b", "c"], (it) => console.log(it.toUpperCase())); // "A" "B" "C"
export {};
