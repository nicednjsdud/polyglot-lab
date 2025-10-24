/**
 * 인덱스드 엑세스 타입 (Indexed Access Types)
 */
const post = {
    title: "TypeScript Basics",
    content: "This post explains the basics of TypeScript.",
    author: {
        name: "John Doe",
        id: 1,
        age: 30
    }
};
function printAuthorInfo(author) {
    console.log(`Author Name: ${author.name}, Author ID: ${author.id}`);
}
printAuthorInfo(post.author); // Author Name: John Doe, Author ID: 1
export {};
