
/**
 * 인덱스드 엑세스 타입 (Indexed Access Types)
 */

type PostList = {
  title : string;
  content : string;
  author : {
    name : string;
    id : number;
    age: number;
  };
}[];

const post : PostList[number] = {
  title : "TypeScript Basics",
  content : "This post explains the basics of TypeScript.",
  author : {
    name : "John Doe",
    id : 1,
    age: 30
  }
};

function printAuthorInfo(author : PostList[number]["author"]){
  console.log(`Author Name: ${author.name}, Author ID: ${author.id}`);
}

printAuthorInfo(post.author); // Author Name: John Doe, Author ID: 1

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean

type TupNum = Tup[number]; // number | string | boolean
