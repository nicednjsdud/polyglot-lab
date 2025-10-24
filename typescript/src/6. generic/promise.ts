import { resolve } from "path";

/**
 * 프로미스 타입을 정의합니다.
 */
const promise = new Promise<number>((resolve, reject) =>{
    setTimeout(() => {
      // resolve(20);
      reject("Something went wrong");
    }, 1000);
});

promise.then((response) => {
    console.log(response * 10);  // 200
});

promise.catch((error) => {
    if(typeof error === "string"){
      console.error("Error occurred:", error);
      return;
    }
    console.error("Unknown error:", error);
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id : number;
  title : string;
  content : string;
}

function fetchPost() : Promise<Post> {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve({
        id : 1,
        title : "Hello World",
        content : "This is a sample post."
        });
    }, 1000);
  })
}

const postRequest = fetchPost();

postRequest.then((post) => {
  console.log("Post title:", post.title);
});