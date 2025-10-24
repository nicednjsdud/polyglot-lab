
/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "blue" | "green";

type Animal = "cat" | "dog" | "bird";

type ColoredAnimal = `${Color}-${Animal}`;
// 결과: "red-cat" | "red-dog" | "red-bird" | "blue-cat" | "blue-dog" | "blue-bird" | "green-cat" | "green-dog" | "green-bird"

